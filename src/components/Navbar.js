import { Link, animateScroll as scroll } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="NavbarContent">
        <Link
          className="NavbarItem"
          activeClass="active"
          to="IntroSection"
          spy={true}
          smooth={true}
          offset={-70}
          duration={280}
        >
          Home
        </Link>
        <Link
          className="NavbarItem"
          activeClass="active"
          to="AboutSection"
          spy={true}
          smooth={true}
          offset={-70}
          duration={280}
        >
          About
        </Link>
        <Link
          className="NavbarItem"
          activeClass="active"
          to="ProjectsSection"
          spy={true}
          smooth={true}
          offset={-70}
          duration={280}
        >
          Projects
        </Link>
        <Link
          className="NavbarItem"
          activeClass="active"
          to="ContactSection"
          spy={true}
          smooth={true}
          offset={-70}
          duration={280}
        >
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
