import classNames from "classnames";
import PropTypes from "prop-types";
import { ButtonGroup } from "../buttonGroup";

export function ContentBox({
  children,
  title,
  titleBadge,
  titleIcon,
  icon,
  image,
  imageThumb,
  imageBadge,
  className,
  buttons,
  ...attrs
}) {
  const clssName = classNames("content-box", className);
  return (
    <div {...attrs} className={clssName}>
      <div className="content-box-header">
        {image && <span className="content-box-img">{image}</span>}
        {imageThumb && <span className="content-box-img content-box-img--thumb">{imageThumb}</span>}
        {imageBadge && <span className="content-box-img-badge">{imageBadge}</span>}
      </div>
      {icon && <div className="content-box-icon">{icon}</div>}
      {title && (
        <span className="content-box-title">
          <div className="title">{title}</div>
          {(titleBadge || titleIcon) && (
            <span className="d-flex align-items-center gap-1">
              {titleBadge}
              {titleIcon}
            </span>
          )}
        </span>
      )}
      {children && <div className="content-box-content">{children}</div>}
      {buttons && <div className={"content-box-buttons"}>{buttons}</div>}
    </div>
  );
}

ContentBox.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  titleBadge: PropTypes.element,
  titleIcon: PropTypes.element,
  icon: PropTypes.element,
  image: PropTypes.element,
  imageThumb: PropTypes.element,
  imageBadge: PropTypes.element,
  buttons: function ({ buttons }, propName) {
    if (buttons && buttons.type?.name !== ButtonGroup.name) {
      throw Error(
        `The "${propName}" property must be an instance of "${ButtonGroup.name}" component`,
      );
    }
  },
};
