import React from "react"
import styles from "./About.module.css"
import { getImageUrl } from "../../utils";
export const About = ()=>{
    return(
    <section className={styles.AboutSection}>
        <img src={getImageUrl("about/code.jpg")} alt="" className={styles.img} />
        <article className={styles.article}>
            <p className={styles.titlePink}>ABOUT ME</p>
            <h1 className={styles.title}>Front-end Developer based in Bahia, Brazil 📍</h1>
            <p className={styles.apresentation}>Hi, I'm Rebeca Freitas, a front-end developer passionate about creating intuitive and appealing interfaces. With experience in HTML, CSS, JavaScript, and modern frameworks like React. <br/> <br/>I strive to deliver the best user experience. I am dedicated to transforming ideas into functional and aesthetically pleasing digital products.
            </p>
        </article>
      </section>
    )
};