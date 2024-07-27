import PropTypes from "prop-types";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet, useNavigate } from "react-router-dom";

export default function AppErrorBoundary({ children, resetText = "Back to home", onReset }) {
  const navigate = useNavigate();
  onReset ??= () => navigate("/");
  return (
    <ErrorBoundary
      onReset={() => onReset()}
      fallbackRender={({ error, resetErrorBoundary }) => (
        <>
          <div className="mx-auto text-center p-5 gap-2 row align-items-center justify-content-center">
            <div className="col-auto d-flex gap-2">
              😔
              <p>Something went wrong</p>
            </div>
            {(error.code || error.message) && (
              <div className="col-12">
                <p>
                  {error.code && (
                    <small className="badge bg-slate-300 text-slate-700 mx-3">{error.code}</small>
                  )}
                  {error.message}
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
      {children}
      <Outlet />
    </ErrorBoundary>
  );
}
AppErrorBoundary.propTypes = {
  children: PropTypes.any,
  resetText: PropTypes.string,
  onReset: PropTypes.func,
};
