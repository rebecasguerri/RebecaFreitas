import styles from "./Projects.module.css"
import { getImageUrl } from "../../utils";
import { FaGithub } from "react-icons/fa"
import { IoIosLogOut } from "react-icons/io";


export const Projects = () => {
    return(
        <section className={styles.projectsMain}>
            <div className={styles.projectContainer}>
                <img src={getImageUrl("devPic/profile-pic.png")} alt="project-image" className={styles.img}/>

                <article className={styles.article}>
                    <h2 className={styles.title}>Project Name</h2>
                    <p className={styles.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum possimus et, voluptates aliquid ad recusandae, nemo cumque sunt architecto maiores ipsum. Culpa temporibus impedit, architecto cupiditate rem vel magni aperiam.</p>
                    <ul className={styles.listIcons}>
                        <li>
                            <a href="/" target="blank" className={styles.Icons}>
                                <FaGithub />
                            </a>
                        </li>
                        <li>
                            <a href="/" target="blank" className={styles.Icons}>
                            <IoIosLogOut />
                            </a>
                        </li>
                    </ul>
                </article>
            </div>
            <div className={styles.projectContainer}>
                <img src="/" alt="project-image" className={styles.img}/>
                <div className={styles.line}></div>
                <article className={styles.article}>
                    <h2 className={styles.title}>Project Name</h2>
                    <p className={styles.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum possimus et, voluptates aliquid ad recusandae, nemo cumque sunt architecto maiores ipsum. Culpa temporibus impedit, architecto cupiditate rem vel magni aperiam.</p>
                    <ul className={styles.listIcons}>
                        <li>
                            <a href="/" target="blank" className={styles.Icons}>
                                <FaGithub />
                            </a>
                        </li>
                        <li>
                            <a href="/" target="blank" className={styles.Icons}>
                            <IoIosLogOut />
                            </a>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}