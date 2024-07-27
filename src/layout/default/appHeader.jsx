import * as classNames from "classnames";
import { MenuScale } from "iconoir-react";
import { Button } from "../../components/UI/button";

export function AppHeader() {
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
        <li className="list-group-item">Products</li>
        <li className="list-group-item">Solutions</li>
        <li className="list-group-item">Pricing</li>
        <li className="list-group-item">Resources</li>
        <li className="list-group-item">Log in</li>
        <li className="list-group-item">
          <Button outline variant="amber-900" text={"Sign up now"} />
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
