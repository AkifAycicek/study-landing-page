import { AppFooter } from "@/layout/default/appFooter";
import { AppHeader } from "@/layout/default/appHeader";

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
