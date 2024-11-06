// import Image from "next/image";
import styles from "./page.module.css";
import TodoComp from "@/components/todo";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <TodoComp />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
