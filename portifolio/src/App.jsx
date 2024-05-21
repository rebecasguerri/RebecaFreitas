import styles from './App.module.css'
import { About } from './components/About/About.jsx'
import { Navbar } from './components/Navbar/Navbar.jsx'
import { Contact } from './components/contact/Contact.jsx'
import { Footer } from './components/footer/Footer.jsx'
import { Hero } from './components/home/Home.jsx'
import { Projects } from './components/projects/Projects.jsx'

function App() {
  return(
    <div className={styles.App}>
      <Navbar />
      <Hero/>
      <About/>
      <Projects />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
