import react from "react"
import styles from "./Contact.module.css"
import { FaLocationDot } from "react-icons/fa6"
import { CiMail } from "react-icons/ci";

export const Contact = () => {
    return(
        <section className={styles.contactMain}>
            <p className={styles.titlePink}>CONTACT </p>
            <h1></h1>
            <div className={styles.contactContent}>
                <div className={styles.contactIconBox}>
                <div className={styles.iconSocial}>
                    <a href="https://www.github.com/rebecasguerri" target="blank" className={styles.Icons}>
                      <FaLocationDot/>
                    </a>
                </div>
                   <div className="contatInfo">
                      <h3>Location</h3>
                      <p>Bahia, Brazil</p>
                   </div>
                </div>
                <div className={styles.contactIconBox}>
                    <div className={styles.iconSocial}>
                        <a href="https://www.github.com/rebecasguerri" target="blank" className={styles.Icons}>
                        <CiMail />
                        </a>
                    </div>
                   <div className="contactInfo">
                      <h3>Mail</h3>
                      <p>rebecasguerri@gmail.com</p>
                   </div>
                </div>
            </div>
        </section>
    )
}