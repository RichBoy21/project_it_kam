import MyPosts from "./myPosts/MyPosts";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.content}>
      <div>
        <img src="https://images.prom.ua/1065621053_w600_h600_1065621053.jpg"></img>
      </div>
      <div>ava+discription</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
