import react from "react"
import styles from "./Footer.module.css" 
import { ContactsIcons } from "../contactsIcons/ContactsIcons"

export const Footer = () =>{
    return(
        <section className={styles.footer}>
            <p className={styles.copy_rigth}>
                <span>Rebeca Freitas</span> &copy;2024
            </p>
            <ContactsIcons/>
        </section>
    )
}