import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'
import styles from './App.module.css'


function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Navbar />
        <Container customClass='min-height'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/company' element={<Company />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/newproject' element={<NewProject />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/project/:id' element={<Project />} />
          </Routes>
        </Container>    
        <Footer />
      </Router>
    </div>
  );
}

export default App;
