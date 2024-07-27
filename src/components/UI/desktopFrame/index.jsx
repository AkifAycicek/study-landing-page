import classNames from "classnames";
import PropTypes from "prop-types";

export function DesktopFrame({
  children,
  image,
  variant,
  topbar = false,
  dots,
  className,
  ...attrs
}) {
  if (dots) {
    topbar = true;
  }

  const clssName = classNames(
    "desktop-frame",
    {
      [`border-${variant}`]: variant,
      [`bg-${variant}`]: variant,
    },
    className,
  );
  return (
    <div {...attrs} className={clssName}>
      {topbar && (
        <div className="desktop-frame-topbar">
          {dots && (
            <div className="d-flex gap-1">
              <span className="fs-xs jam jam-circle-f text-rose-600" />
              <span className="fs-xs jam jam-circle-f text-amber-400" />
              <span className="fs-xs jam jam-circle-f text-green" />
            </div>
          )}
        </div>
      )}
      {image && (
        <div className="desktop-frame-image">
          {typeof image == "string" ? (
            <img loading="lazy" src={image} alt="desktop frame" />
          ) : (
            image
          )}
        </div>
      )}
      {children}
    </div>
  );
}

DesktopFrame.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  variant: PropTypes.string,
  dots: PropTypes.bool,
  topbar: PropTypes.bool,
};
