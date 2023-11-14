import styles from "./Post.module.css";

const Post = ({ message, like }) => {
  return (
    <div className={styles.item}>
      <img src="https://ae04.alicdn.com/kf/S96e9650817d14af382d1d04f2a41d9cfB.jpg"></img>
      {message}
      <div>
        <span>{like}</span>
      </div>
    </div>
  );
};

export default Post;
