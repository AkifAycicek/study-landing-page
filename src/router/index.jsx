import { DefaultLayout } from "@/layout/default/index.jsx";
import AppErrorBoundary from "@components/appErrorBoundary";
import { Error404 } from "@pages/errors/error404";
import { HomePage } from "@pages/homePage";
import { StyleGuidePage } from "@pages/styleGuide";
import { LanguageMiddleware } from "@router/middleware/language";

function RouterRoutes() {
  return (
    <Routes>
      <Route path="/:lang?" element={<LanguageMiddleware />}>
        <Route path="" element={<DefaultLayout />}>
          <Route path="" element={<AppErrorBoundary />}>
            <Route path="" element={<HomePage />} />
            {import.meta.env.MODE == "development" && (
              <Route path="style-guide" element={<StyleGuidePage />} />
            )}
            <Route path="*" element={<Error404 />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default RouterRoutes;
