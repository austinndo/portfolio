import { LinkedinOriginalIcon, GithubOriginalIcon } from 'react-devicons'

const ContactSection = ({ id }) => {
  return (
    <div className="SectionContent" id={id}>
      <div className="ContactSection">
        <h2>Contact Me</h2>
        <h3>Email:</h3>
        <h4
          className="email-link"
          onClick={() => {
            window.location = 'mailto:austinndo@gmail.com'
          }}
        >
          austinndo@gmail.com
        </h4>
        <h3>Socials:</h3>
        <ul>
          <li>
            <a href="www.linkedin.com/in/austin-do">
              <LinkedinOriginalIcon /> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/austinndo">
              <GithubOriginalIcon /> GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ContactSection
