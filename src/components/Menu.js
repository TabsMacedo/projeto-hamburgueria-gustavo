"use client";

import Image from "next/image";
import styles from "./Menu.module.css";

const Menu = ({ items }) => {
  return (
    <div className={styles.menu}>
      <h2>Nosso Cardápio</h2>
      <div className={styles.cardContainer}>
        {items.map((item) => (
          <div key={item.id} className={styles.card}>
            <Image
              src={item.img}
              alt={item.name}
              width={150}
              height={item.imgHeight}
            />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
