import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/src/components/Banner";

export default function Home() {
  return (
    <div className={styles.main}>
      <Banner />
    </div>
  );
}
