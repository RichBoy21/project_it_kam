import styles from "./Message.module.css";

function Message(props) {
  return <div className={styles.dialog_message}>{props.message}</div>;
}
export default Message;
