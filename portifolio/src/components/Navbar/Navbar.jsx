import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <a className={styles.title} href='/'>Rebeca.<div className={styles.difColor}>dev</div></a>
                <div className={styles.menu}>
                    <img className={styles.menuBtn}
                        src={
                            menuOpen
                            ? getImageUrl("nav/closeIcon.svg")
                            : getImageUrl("nav/menuIcon.svg")
                        }
                        alt='menu-button'
                        onClick={() => setMenuOpen(!menuOpen)}
                    />
                    <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen }`}
                        onClick={() => setMenuOpen(false)}
                    >
                        <li>
                            <a href='#home'>Home</a>
                        </li>
                        <li>
                            <a href='#about'>About</a>
                        </li>
                        <li>
                            <a href='#projects'>Projects</a>
                        </li>
                        <li>
                            <a href='#contact'>Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}