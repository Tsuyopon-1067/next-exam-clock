import styles from "./page.module.css";
import { Clock } from "./components/Clock";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Clock />
      </div>
    </main>
  );
}
