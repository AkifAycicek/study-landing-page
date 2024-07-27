import { useEffect } from "react";

export function Error404() {
  useEffect(() => {
    const error = new Error("Page Not Found");
    error.code = "404";
    throw error;
  }, []);
}
