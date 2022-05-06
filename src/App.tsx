import './App.css'

import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Projects from './components/projects/main/Projects'
import Skills from './components/skills/main/Skills'
import video from './assets/banner.mp4'
import { ParallaxProvider } from 'react-scroll-parallax'

const elements = document.querySelectorAll('.App > *');
elements.forEach(element => {
  element.addEventListener('scroll', () => {
    element.animate([
      // fotogramas clave
      { transform: 'translateY(0px)' },
      { transform: 'translateY(-300px)' }
    ], {
      // opciones de sincronización
      duration: 1000,
      iterations: 1
    });
  })
})


function App() {

  return (
    <ParallaxProvider>
      <div className="App">
        <video autoPlay muted loop id="video-banner">
          <source src={video} type="video/mp4" />
        </video>
        <Header />
        <Banner />
        <Skills />
        <Projects/>
        <Footer />
      </div>
    </ParallaxProvider>

  )
}

export default App
