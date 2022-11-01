import Navbar from '../components/Navbar'
import DNAvbar from '../components/DNAvbar'
import IntroSection from '../components/IntroSection'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import ProjectsSection from '../components/ProjectsSection'

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <DNAvbar /> */}
      <IntroSection title="Intro Section" id="IntroSection" />
      <AboutSection title="About Section" id="AboutSection" />
      {/* <ProjectsSection title="Projects Section" id="ProjectsSection" />
      <ContactSection title="Contact Section" id="ContactSection" /> */}
    </div>
  )
}

export default Home
