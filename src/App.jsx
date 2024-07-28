import Router from "@/router";
import AppErrorBoundary from "@components/appErrorBoundary.jsx";
import { IconoirProvider } from "iconoir-react";

function App() {
  return (
    <AppErrorBoundary>
      <IconoirProvider
        iconProps={{
          strokeWidth: 1.5,
          width: "1.5rem",
          height: "1.5rem",
        }}>
        <Router />
      </IconoirProvider>
    </AppErrorBoundary>
  );
}

export default App;
