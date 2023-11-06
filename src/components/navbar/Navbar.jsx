import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div>
        <a href="" className={styles.item}>
          Profile
        </a>
      </div>
      <div>
        <a href="" className={styles.item}>
          Messages
        </a>
      </div>
      <div>
        <a href="" className={styles.item}>
          News
        </a>
      </div>
      <div>
        <a href="" className={styles.item}>
          Music
        </a>
      </div>
      <div>
        <a href="" className={styles.item}>
          Settings
        </a>
      </div>
    </nav>
  );
}
