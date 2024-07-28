import classNames from "classnames";

import { ButtonGroup } from "../buttonGroup";

export function SectionText({
  children,
  className,
  caption,
  mainHeadline,
  secondHeadline,
  buttons,
  ...attrs
}) {
  const clssName = classNames("section-text", className);
  return (
    <>
      <div {...attrs} className={clssName}>
        {caption && <h6 className="caption">{caption}</h6>}
        {(mainHeadline || secondHeadline) && (
          <div className="row gap-2">
            {mainHeadline && <div className="headline">{mainHeadline}</div>}
            {secondHeadline && <div className="headline headline--second">{secondHeadline}</div>}
          </div>
        )}
        {children && <div className={`${buttons ? "my-8" : "mt-8"}`}>{children}</div>}
        {buttons}
      </div>
    </>
  );
}

SectionText.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  caption: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  mainHeadline: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  secondHeadline: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  buttons: function ({ buttons }, propName) {
    if (buttons && buttons.type?.name !== ButtonGroup.name) {
      throw Error(
        `The "${propName}" property must be an instance of "${ButtonGroup.name}" component`,
      );
    }
  },
};
