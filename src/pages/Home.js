import Navbar from '../components/Navbar'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import ProjectsSection from '../components/ProjectsSection'

const Home = () => {
  return (
    <div>
      <Navbar />
      <AboutSection title="About Section" id="AboutSection" />
      <ProjectsSection title="Projects Section" id="ProjectsSection" />
      <ContactSection title="Contact Section" id="ContactSection" />
    </div>
  )
}

export default Home
