import {perfil,habilidades,proyectos} from './data/datos'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Hero nombre={perfil.nombre} profesion={perfil.profesion} />
      <AboutMe  nombre={perfil.nombre} edad={perfil.edad} ciudad={perfil.ciudad} profesion={perfil.profesion} correo={perfil.correo} github={perfil.github} linkedin={perfil.linkedin} />
      <Skills habilidades={habilidades} />
      <Projects proyectos={proyectos} />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
