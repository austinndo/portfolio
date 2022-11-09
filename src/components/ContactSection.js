import resume from '../assets/Austin_Do_Resume.docx.pdf'
import { LinkedinOriginalIcon, GithubOriginalIcon } from 'react-devicons'

const ContactSection = ({ id }) => {
  return (
    <div className="SectionContent" id={id}>
      <div className="ContactSection">
        <h2>Contact Me</h2>
        <div className="ContactSocialsContainer">
          <h3>Socials:</h3>
          <ul className="ContactLinks">
            <li>
              <a
                href="https://www.linkedin.com/in/austin-do/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinOriginalIcon size={42} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/austinndo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubOriginalIcon size={42} />
              </a>
            </li>
          </ul>
        </div>
        <div className="ContactEmailContainer">
          <h3>Email:</h3>
          <h3
            className="email-link"
            onClick={() => {
              window.location = 'mailto:austinndo@gmail.com'
            }}
          >
            austinndo@gmail.com
          </h3>
        </div>

        <div className="ContactResumeContainer">
          <h3>Resume</h3>
          <a href={resume} download>
            Download Here
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
