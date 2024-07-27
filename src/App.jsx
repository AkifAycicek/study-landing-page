import Router from "@/router";
import { IconoirProvider } from "iconoir-react";

function App() {
  return (
    <>
      <IconoirProvider
        iconProps={{
          strokeWidth: 1.5,
          width: "1.5rem",
          height: "1.5rem",
        }}>
        <Router />
      </IconoirProvider>
    </>
  );
}

export default App;
