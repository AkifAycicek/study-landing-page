import i18next from "i18next";
import { ErrorBoundary } from "react-error-boundary";

export default function AppErrorBoundary({
  children,
  resetText = i18next.t("error:home_page"),
  onReset,
}) {
  const navigate = useNavigate();
  onReset ??= () => navigate("/");
  const { t } = useTranslation();
  return (
    <ErrorBoundary
      onReset={() => onReset()}
      fallbackRender={({ error, resetErrorBoundary }) => (
        <>
          <div className="mx-auto text-center p-5 gap-2 row align-items-center justify-content-center">
            <div className="col-auto d-flex gap-2">
              😔
              <p>{t(`error:something_went_wrong`)}</p>
            </div>
            {(error.code || error.message) && (
              <div className="col-12">
                <p>
                  {error.code && (
                    <small className="badge bg-slate-300 text-slate-700 mx-3">{error.code}</small>
                  )}
                  {has(error, "code") ? t(`error:${error.code}`) : error.toString()}
                </p>
              </div>
            )}
            <div className="col-auto">
              <button
                className="btn btn-sm btn-outline-amber-800"
                onClick={() => resetErrorBoundary()}>
                {resetText}
              </button>
            </div>
          </div>
        </>
      )}>
      {children || <Outlet />}
    </ErrorBoundary>
  );
}
AppErrorBoundary.propTypes = {
  children: PropTypes.any,
  resetText: PropTypes.string,
  onReset: PropTypes.func,
};
