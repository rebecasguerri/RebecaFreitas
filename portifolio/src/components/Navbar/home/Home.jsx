import React from "react" 
import {AiOutlineLinkedin} from "react-icons/ai"
import { AiOutlineGithub } from "react-icons/ai"
import Styles from "../home/Home.module.css"
import { getImageUrl } from "../../utils";
export const Hero = () =>{
    return (
        <section className={Styles.container}>
            <div className={Styles.content}>
                <h1 className={Styles.title}>Front-End Developer</h1>
                <p className={Styles.description}>Hi, i´m Rebeca Freitas. A passionate Front-end Developer based in Bahia, Brasil </p>
                <aside>
                    <div><p>Tech Stack | </p></div>
                    <ul>
                        <li><img src={getImageUrl("icons/icons")} alt="" /></li>
                        <li></li>
                        <li></li>
                    </ul>
                </aside>
            </div>
            <div className={Styles.topBlur}/>
            <div className={Styles.bottomBlur}/>
        </section>
    )
}