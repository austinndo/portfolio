import { Link, animateScroll as scroll } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="NavbarContent">
        <h3
          className="NavbarItem"
          onClick={() => {
            scroll.scrollToTop()
          }}
        >
          Austin Do
        </h3>
        <Link
          className="NavbarItem"
          activeClass="active"
          to="AboutSection"
          spy={true}
          smooth={true}
          offset={-70}
          duration={680}
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
          duration={680}
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
          duration={680}
        >
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
