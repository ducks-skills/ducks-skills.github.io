import { Header } from "@components/header/header";
import styles from "./page.module.css";
import { WelcomeBlock } from "@components/blocks/welcome-block";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <WelcomeBlock />
    </main>
  );
}
