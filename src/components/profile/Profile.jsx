import MyPosts from "./myPosts/MyPosts";
import styles from "./Profile.module.css";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
