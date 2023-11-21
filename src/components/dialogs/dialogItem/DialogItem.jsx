import { NavLink } from "react-router-dom";
import styles from "./DialogItem.module.css";

function DialogItem(props) {
  let path = "/dialogs/" + props.id;

  return (
    <div className={styles.dialog_item}>
      <NavLink to={path} className={styles.item}>
        {props.name}
      </NavLink>
    </div>
  );
}

export default DialogItem;
