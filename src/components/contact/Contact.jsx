import react from "react";
import styles from "./Contact.module.css";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

export const Contact = () => {
  return (
    <section className={styles.contactMain} id="contact">
      <p className={styles.titlePink}>CONTACT </p>
      <h1></h1>
      <div className={styles.contactContent}>
        <div className={styles.contactIconBox}>
          <div className={styles.iconSocial}>
            <FaLocationDot />
          </div>
          <div className="contatInfo">
            <h3>Location</h3>
            <p>Bahia, Brazil</p>
          </div>
        </div>
        <div className={styles.contactIconBox}>
          <div className={styles.iconSocial}>
            <IoMdMail />
          </div>
          <div className="contactInfo">
            <h3>Mail</h3>
            <p>rebecasguerri@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};
