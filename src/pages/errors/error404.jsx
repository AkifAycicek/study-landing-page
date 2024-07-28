import { useEffect } from "react";

export function Error404() {
  const { t } = useTranslation();
  useEffect(() => {
    const error = new Error(t("error:404"));
    error.code = "404";
    throw error;
  }, [t]);
}
