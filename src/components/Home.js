import Navbar from './Navbar'
import IntroSection from './IntroSection'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import ProjectsSection from './ProjectsSection'

const Home = () => {
  return (
    <div>
      <Navbar />
      <IntroSection title="Intro Section" id="IntroSection" />
      <AboutSection title="About Section" id="AboutSection" />
      <ProjectsSection title="Projects Section" id="ProjectsSection" />
      <ContactSection title="Contact Section" id="ContactSection" />
    </div>
  )
}

export default Home
