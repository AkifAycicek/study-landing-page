import { Route, Routes } from "react-router-dom";

import AppErrorBoundary from "@components/appErrorBoundary";
import { DefaultLayout } from "@layout/default";
import { Error404 } from "@pages/errors/error404";
import { HomePage } from "@pages/homePage";
import { StyleGuidePage } from "@pages/styleGuide";

function RouterRoutes() {
  return (
    <>
      <AppErrorBoundary>
        <Routes>
          <Route
            path="/"
            element={
              <DefaultLayout>
                <AppErrorBoundary />
              </DefaultLayout>
            }>
            <Route path="" element={<HomePage />} />
            {import.meta.env.MODE == "development" && (
              <Route path="style-guide" element={<StyleGuidePage />} />
            )}
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </AppErrorBoundary>
    </>
  );
}

export default RouterRoutes;
