
import classes from "./SubmenuItem.module.scss";

const SubmenuItem = ({ submenuItem }) => {
  return (
    <li key={submenuItem.id} className={`${classes.subMenuList}`}>
      {submenuItem.title}
    </li>
  );
};

export default SubmenuItem;
