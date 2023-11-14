import styles from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = (props) => {
  const postData = [
    { id: 1, message: "Hello!", likesCount: "like 12" },
    { id: 2, message: "Hallo!", likesCount: "like 20" },
  ];

  const postElements = postData.map((post) => (
    <Post message={post.message} like={post.likesCount} />
  ));

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
