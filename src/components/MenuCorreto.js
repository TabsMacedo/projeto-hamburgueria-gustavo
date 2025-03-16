"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Menu.module.css";

const Menu = ({ items }) => {
  const [cart, setCart] = useState([]); // Estado do carrinho
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado do modal

  // Adiciona um item ao carrinho
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    setIsModalOpen(true); // Abre o modal ao adicionar
  };

  return (
    <div className={styles.menu}>
      <h2>Nosso Cardápio</h2>
      <div className={styles.cardContainer}>
        {items.map((item) => (
          <div key={item.id} className={styles.card} onClick={() => addToCart(item)}>
            <Image src={item.img} alt={item.name} width={150} height={item.imgHeight} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>

      {/* Modal do Carrinho */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h3>Carrinho</h3>
            {cart.length > 0 ? (
              <ul>
                {cart.map((item, index) => (
                  <li key={index}>
                    <span>{item.name} - {item.price}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Seu carrinho está vazio.</p>
            )}
            <button onClick={() => setIsModalOpen(false)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
