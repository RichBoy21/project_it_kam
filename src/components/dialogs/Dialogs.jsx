import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

function DialogItem(props) {
  let path = "/dialogs/" + props.id;

  return (
    <div className={styles.dialog}>
      <NavLink to={path} className={styles.item}>
        {props.name}
      </NavLink>
    </div>
  );
}

function Message(props) {
  return <div className={styles.dialog}>{props.message}</div>;
}

function Dialogs() {
  const dialogsData = [
    { id: 1, name: " Rinat" },
    { id: 2, name: "John" },
  ];

  const messageData = [
    { id: 1, message: "Hello!" },
    { id: 2, message: "Hallo!" },
  ];

  const dialogsElements = dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  const messageElements = messageData.map((message) => (
    <Message message={message.message} />
  ));
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>{messageElements}</div>
    </div>
  );
}

export default Dialogs;
