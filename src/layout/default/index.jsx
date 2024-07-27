import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

export function DefaultLayout({ children }) {
  return (
    <div className="app">
      <main className="app-content">{children || <Outlet />}</main>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.any,
};
