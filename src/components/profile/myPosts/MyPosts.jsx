import styles from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={styles.posts}>
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
