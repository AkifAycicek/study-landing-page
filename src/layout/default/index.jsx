import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import { AppFooter } from "./appFooter";
import { AppHeader } from "./appHeader";

export function DefaultLayout({ children }) {
  return (
    <div className="app">
      <AppHeader />
      <main className="app-content">{children || <Outlet />}</main>
      <AppFooter />
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.any,
};
