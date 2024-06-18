import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils";
import { FaGithub } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

export const Projects = () => {
  return (
    <section className={styles.projectsMain} id="projects">
      <h1>Novos projetos em breve... 🔨⚙️</h1>
      {/*
          <div className={styles.projectContainer}>
            <img
              src={getImageUrl("#")}
              alt="project-image"
              className={styles.img}
            />
            <article className={styles.article}>
              <h2 className={styles.title}>Clone TabNews</h2>
              <p className={styles.description}>
                Implementação do
                <a href="https://www.tabnews.com.br" target="blank">
                  TabNews
                </a>
                para o
                <a href="https://curso.dev" target="blank">
                  curso.dev
                </a>
              </p>
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
            <img src="/" alt="project-image" className={styles.img} />
            <div className={styles.line}></div>
            <article className={styles.article}>
              <h2 className={styles.title}>Project Name</h2>
              <p className={styles.description}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
                possimus et, voluptates aliquid ad recusandae, nemo cumque sunt
                architecto maiores ipsum. Culpa temporibus impedit, architecto
                cupiditate rem vel magni aperiam.
              </p>
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
          </div> */}
    </section>
  );
};
