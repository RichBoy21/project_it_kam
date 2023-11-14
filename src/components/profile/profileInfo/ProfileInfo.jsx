import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://images.prom.ua/1065621053_w600_h600_1065621053.jpg"></img>
      </div>
      <div className={styles.discriptionBlock}>ava+discription</div>
    </div>
  );
};

export default ProfileInfo;
