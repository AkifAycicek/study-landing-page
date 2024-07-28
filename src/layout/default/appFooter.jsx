import { Button } from "@/components/UI/button/index.jsx";

export function AppFooter() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleLanguageChange = () => {
    const currentLang = i18n.language;
    const newLang = currentLang === "tr" ? "en" : "tr";

    const newPathname = location.pathname.replace(`/${currentLang}/`, `/${newLang}/`);
    navigate(newPathname);
  };
  return (
    <footer className="app-footer">
      <div className="container-fluid my-12 gx-0">
        <div className="row g-0 gap-4">
          <div className="row gx-0 justify-content-center gap-12 text-center text-lg-start">
            <div className="col-md-3 col-lg">
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-slate-900 fw-bold">
                  {t("layout.default:product")}
                </li>
                <li className="list-group-item list-group-item-slate-900">
                  {t("layout.default:pricing")}
                </li>
                <li className="list-group-item list-group-item-slate-900">
                  {t("layout.default:overview")}
                </li>
                <li className="list-group-item list-group-item-slate-900">
                  {t("layout.default:browse")}
                </li>
                <li className="list-group-item list-group-item-slate-900">
                  {t("layout.default:accessibility")}
                </li>
                <li className="list-group-item list-group-item-slate-900">
                  {t("layout.default:five")}
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-lg">
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-slate-900 fw-bold">
                  {t("layout.default:solutions")}
                </li>
                <li className="list-group-item list-group-item-slate-900">
                  {t("layout.default:brainstorming")}
                </li>
                <li className="list-group-item list-group-item-slate-900">
                  {t("layout.default:ideation")}
                </li>
                <li className="list-group-item list-group-item-slate-900">
                  {t("layout.default:wireframing")}
                </li>
                <li className="list-group-item list-group-item-slate-900">
                  {t("layout.default:research")}
                </li>
                <li className="list-group-item list-group-item-slate-900">
                  {t("layout.default:design")}
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-lg">
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-slate-900 fw-bold">
                  {t("layout.default:support")}
                </li>
                <li className="list-group-item list-group-item-slate-900">
                  {t("layout.default:contact_us")}
                </li>
                <li className="list-group-item list-group-item-slate-900">
                  {t("layout.default:developers")}
                </li>
                <li className="list-group-item list-group-item-slate-900">
                  {t("layout.default:documentation")}
                </li>
                <li className="list-group-item list-group-item-slate-900">
                  {t("layout.default:integrations")}
                </li>
                <li className="list-group-item list-group-item-slate-900">
                  {t("layout.default:reports")}
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg">
              <div className="h-100 d-flex flex-column justify-content-between">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item list-group-item-slate-900 fw-bold">
                    {t("layout.default:get_the_app")}
                  </li>
                  <li className="list-group-item list-group-item-slate-900 ">
                    <div className="d-flex flex-column align-items-center align-items-lg-start justify-content-start gap-3">
                      <a target="blank" href="https://www.apple.com/app-store/">
                        <img src="/assets/img/app-store.png" alt="" srcSet="" />
                      </a>
                      <a target="blank" href="https://play.google.com/store/">
                        <img src="/assets/img/google-store.png" alt="" srcSet="" />
                      </a>
                    </div>
                  </li>
                </ul>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item list-group-item-slate-900">
                    {t("layout.default:follow_us")}
                  </li>
                  <li className="list-group-item list-group-item-slate-900">
                    <div className="d-flex gap-3 align-items-start justify-content-center justify-content-lg-start">
                      <i className="jam jam-youtube" />
                      <i className="jam jam-facebook" />
                      <i className="jam jam-twitter" />
                      <i className="jam jam-instagram" />
                      <a
                        target="blank"
                        className="text-light text-decoration-none d-flex"
                        href="https://www.linkedin.com/in/akifaycicek/">
                        <i className="jam jam-linkedin" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="row g-0 px-4 gap-6 align-items-center justify-content-center text-center">
            <div className="col-auto">{t("layout.default:all_rights_reserved")}</div>
            <div className="col-auto ms-lg-auto">
              <ul className="list-group list-group-flush list-group-horizontal-sm align-items-center">
                <li className="list-group-item list-group-item-slate-900">
                  {t("layout.default:terms")}
                </li>
                <li className="list-group-item list-group-item-slate-900">
                  {t("layout.default:privacy")}
                </li>
                <li className="list-group-item list-group-item-slate-900">
                  {t("layout.default:contact")}
                </li>
                <li className="list-group-item list-group-item-slate-900">
                  <Button
                    variant={"dark"}
                    className={"p-2 m-0"}
                    iconLeft={<i className="jam jam-world" />}
                    onClick={handleLanguageChange}>
                    {(i18n.language == "en" ? "tr" : "en").toUpperCase()}
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
