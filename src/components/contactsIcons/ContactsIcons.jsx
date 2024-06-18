import react from "react";
import styles from "./ContactsIcons.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export const ContactsIcons = () => {
  return (
    <div className={styles.iconsContainer}>
      <div className={styles.iconSocial}>
        <a
          href="https://www.github.com/rebecasguerri"
          target="blank"
          className={styles.Icons}
        >
          <FaGithub />
        </a>
      </div>
      <div className={styles.iconSocial}>
        <a
          href="https://www.linkedin.com/in/rebeca-freitas-/"
          target="blank"
          className={styles.Icons}
        >
          <FaLinkedin />
        </a>
      </div>
      <div></div>
    </div>
  );
};
