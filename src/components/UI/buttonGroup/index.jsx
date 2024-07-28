import { Button } from "@components/UI/button";
import classNames from "classnames";

export function ButtonGroup({ children, vertical, gap, className, ...attrs }) {
  const clssName = classNames(
    "btn-group",
    {
      [`btn-group--vertical`]: vertical,
      [`gap-${gap}`]: gap > -1,
    },
    className,
  );
  return (
    <div {...attrs} className={clssName}>
      {children}
    </div>
  );
}

ButtonGroup.propTypes = {
  className: PropTypes.string,
  vertical: PropTypes.bool,
  gap: PropTypes.number,
  children: function ({ children }) {
    if (isArray(children)) {
      if (!children.every?.((children) => children.type?.name === Button.name)) {
        throw Error(
          `The "${ButtonGroup.name}" component childrens must be instances of "${Button.name}" component`,
        );
      }
    } else if (children.type?.name !== Button.name) {
      throw Error(
        `The "${ButtonGroup.name}" component children must be an instance of "${Button.name}" component`,
      );
    }
  },
};
