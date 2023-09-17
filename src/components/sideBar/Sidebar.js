//icon
import {
  faArrowCircleLeft,
  faList,
  faSearch,
  faStore,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { useState } from "react";

import classes from "./Sidebar.module.scss";
import MenuItem from "./MenuItem";
import SubmenuItem from "./SubmenuItem";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const Menus = [
    { title: "Dashboard",link:'/home', id: 1 },
    {
      title: "Product",
      link:'/products',
      id: 2,
      icon: <FontAwesomeIcon icon={faList} />,
      // submenu: true,
      spacing: true,
      // submenuItems: [
      //   { title: "Submenu 1", id: 1 },
      //   { title: "Submenu 2", id: 2 },
      //   { title: "Submenu 3", id: 3 },
      // ],
    },
    { title: "About Us", link:'/about-us', id: 3, icon: <FontAwesomeIcon icon={faPerson} /> },

  ];

  return (
    <div className={classes.mainContainer}>
      <div className={`${classes.container} ${open ? "w-72" : "w-20"} `}>
        <FontAwesomeIcon
          icon={faArrowCircleLeft}
          className={`${classes.toggleIcon}  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />

        <div className="inline-flex">
          <FontAwesomeIcon icon={faStore}  className={`${classes.logo} ${open && "rotate-[360deg]"}`}/>
          <h1 className={`${classes.iconTitle} ${!open && "scale-0"}`}>
            Clothes Store
          </h1>
        </div>

        <div
          className={`${classes.searchContainer} ${!open ? "px-2.5" : "px-4"}`}
        >
          <FontAwesomeIcon
            icon={faSearch}
            className={`${classes.searchIcon} ${open && "mr-2"}`}
          />
          <input
            type={"serach"}
            placeholder="search"
            className={`${classes.searchInput} ${!open && "hidden"}`}
          />
        </div>

        <ul className="pt-2">
          {Menus.map((menu) => (
            <div  key={menu.id}>
              <MenuItem
              link={menu.link}
                menu={menu}
                open={open}
                setSubmenuOpen={setSubmenuOpen}
                submenuOpen={submenuOpen}
              />
              {menu.submenu && open && submenuOpen && (
                <ul>
                  {menu.submenuItems.map((submenuItem) => (
                    <SubmenuItem submenuItem={submenuItem} />
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
