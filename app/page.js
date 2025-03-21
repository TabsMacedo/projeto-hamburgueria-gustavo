import Banner from "@/src/components/Banner";
import Menu from "@/src/components/Menu";
import styles from "./page.module.css";


export default function Home() {
  const menuItems = [
    { id: 1, name: "Cheese Bacon", price: "R$ 25,90", img: "/cheese-bacon.png", imgHeight: 130 },
    { id: 2, name: "Smash Burger", price: "R$ 22,90", img: "/smash-burguer.webp", imgHeight: 130 },
    { id: 3, name: "Veggie Burger", price: "R$ 23,90", img: "/veggie-burger.png", imgHeight: 130 }
  ];

  return (
    <div className={styles.main}>
      <Banner />
      <Menu items={menuItems} />
    </div>
  );
}
