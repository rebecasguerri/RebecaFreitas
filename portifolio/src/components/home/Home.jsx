import React from "react" 
import Styles from "./Home.module.css"
import { getImageUrl } from "../../utils";
import { ContactsIcons } from "../contactsIcons/ContactsIcons";
export const Hero = () =>{
    return (
        <main className={Styles.mainHome}>
            <section className={Styles.container} id="home">
                <div className={Styles.content}>
                    <article className={Styles.article}>
                        <h1 className={Styles.title}>Front-End React <br/> Developer</h1>
                        <p className={Styles.description}>Hi, i´m Rebeca Freitas. A passionate Front-end Developer <br/>based in Bahia, Brazil 📍 </p>
                        <ContactsIcons />
                    </article>
                    <img className={Styles.heroImg}  src={getImageUrl("devPic/profile-pic.png")} alt="dev-image"  />
                </div>
            
                <aside className={Styles.skillsSection}>
                        <div><p>Tech Stack</p></div>
                        <ul className={Styles.skillsIcons}>
                            <li><img src={getImageUrl("icons/HTML.svg")} alt="stack" /></li>
                            <li><img src={getImageUrl("icons/CSS.svg")} alt="stack" /></li>
                            <li><img src={getImageUrl("icons/JavaScript.svg")} alt="stack" /></li>
                            <li><img src={getImageUrl("icons/React-Dark.svg")} alt="stack" /></li>
                            <li><img src={getImageUrl("icons/Git.svg")} alt="stack" /></li>
                        </ul>
                    </aside>
                <div className={Styles.topBlur}/>
                <div className={Styles.bottomBlur}/>
            </section>
        </main>
    )
}