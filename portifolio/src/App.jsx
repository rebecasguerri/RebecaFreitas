import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar.jsx'
import { Hero } from './components/Navbar/home/Home.jsx'

function App() {
  return(
    <div className={styles.App}>
      <Navbar />
      <Hero/>
    </div>
  )
}

export default App
