import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <BrowserRouter>
        <nav className={styles.navbar}>
          <a className={styles.title} href="/">
            Rebeca.<div className={styles.difColor}>dev</div>
          </a>
          <div className={styles.menu}>
            <img
              className={styles.menuBtn}
              src={
                menuOpen
                  ? getImageUrl("nav/closeIcon.svg")
                  : getImageUrl("nav/menuicons.png")
              }
              alt="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul
              className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
              onClick={() => setMenuOpen(false)}
            >
              <li>
                <Link to="#home" className={styles.listItem}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="#about" className={styles.listItem}>
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="#projects" className={styles.listItem}>
                  Projetos
                </Link>
              </li>
              <li>
                <Link to="#contact" className={styles.listItem}>
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </BrowserRouter>
    </header>
  );
};
