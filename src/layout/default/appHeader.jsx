import * as classNames from "classnames";
import { MenuScale } from "iconoir-react";
import { Button } from "../../components/UI/button";

export function AppHeader() {
  const { t } = useTranslation();
  const [menuActive, setMenuActive] = useState(false);
  const menuClass = classNames(
    "app-header-menu list-group list-group-flush list-group-horizontal-lg",
    {
      [`active`]: menuActive,
    },
  );

  return (
    <header className="app-header">
      <h2 className="d-inline fw-bold text-amber-900 m-0">Collers</h2>
      <ul className={menuClass}>
        <li className="list-group-item">{t("layout.default:products")}</li>
        <li className="list-group-item">{t("layout.default:solutions")}</li>
        <li className="list-group-item">{t("layout.default:pricing")}</li>
        <li className="list-group-item">{t("layout.default:resources")}</li>
        <li className="list-group-item">{t("layout.default:log_in")}</li>
        <li className="list-group-item">
          <Button outline variant="amber-900" text={t("layout.default:sign_up_now")} />
        </li>
      </ul>
      <MenuScale
        className={classNames("app-header-menu-btn", {
          [`active`]: menuActive,
        })}
        onClick={() => setMenuActive((state) => !state)}
      />
    </header>
  );
}
