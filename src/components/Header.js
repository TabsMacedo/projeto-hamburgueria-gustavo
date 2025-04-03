import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
         <Link className={styles.link} href="/menu">🍔 BurguerHouse</Link>
        </div>
        <ul className={styles.ul}>
          <li><Link href="/">Menu</Link></li>
          <li><Link href="/">Sobre</Link></li>
          <li><Link href="/">Contato</Link></li>
        </ul>
        <button className={styles.orderButton}>Peça Agora</button>
      </nav>
    </header>
  );
}
