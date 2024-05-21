import react from "react"
import styles from "./Footer.module.css" 
import { ContactsIcons } from "../contactsIcons/ContactsIcons"

export const Footer = () =>{
    return(
        <section className={styles.footer}>
            <ContactsIcons/>
        </section>
    )
}