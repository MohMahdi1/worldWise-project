import Appnav from "../components/AppNav.module.css";
import { NavLink } from "react-router-dom";

function AppNav() {
  return (
    <div className={Appnav.nav}>
      <nav>
        <ul>
          <li>
            <NavLink to="cities">Cities</NavLink>
          </li>
          <li>
            <NavLink to="coutries">Coutries</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AppNav;
