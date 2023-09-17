//icon
import { faDashboard, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./MenuItem.module.scss";
import { Link } from "react-router-dom";

const MenuItem = ({ menu, open, submenuOpen, setSubmenuOpen , link }) => {
  return (
    <li
      onClick={() => {
        menu.submenu && open && setSubmenuOpen(!submenuOpen);
      }}
      className={`${classes.listMenuContainer} ${
        menu.spacing ? "mt-9" : "mt-2"
      } `}
      key={menu.id}
    >
      <span className={`text-2xl block float-left`}>
        {menu.icon ? menu.icon : <FontAwesomeIcon icon={faDashboard} />}
      </span>
      {link?.length ? 
      <Link className={`text-base font-medium flex-1 ${!open && "hidden"}`} to={link} >{menu.title}</Link> :
      <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}>
        {menu.title}
      </span>
      }

      {menu.submenu && open && (
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`${submenuOpen && "rotate-180"}`}
        />
      )}
    </li>
  );
};

export default MenuItem;
