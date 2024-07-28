import classNames from "classnames";

export function Button({
  children,
  className,
  outline = false,
  variant,
  iconLeft,
  iconRight,
  text,
  size,
  ...attrs
}) {
  const clssName = classNames(
    "btn",
    {
      [`btn-${outline ? "outline-" : ""}${variant}`]: variant,
      [`btn-${size}`]: size,
    },
    className,
  );

  return (
    <button {...attrs} className={clssName}>
      {iconLeft}
      {text ? <span className="btn-text">{text}</span> : children}
      {iconRight}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  iconLeft: PropTypes.element,
  iconRight: PropTypes.element,
  variant: PropTypes.string,
  text: PropTypes.string,
  outline: PropTypes.bool,
  size: PropTypes.oneOf(["xs", "sm", "lg", "xl"]),
};
