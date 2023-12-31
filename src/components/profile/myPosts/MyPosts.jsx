import styles from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = (props) => {
  console.log(props);
  const postElements = props.posts.map((post) => (
    <Post key={post.id} messages={post.messages} likes={post.likesCount} />
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
