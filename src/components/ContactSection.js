import { LinkedinOriginalIcon, GithubOriginalIcon } from 'react-devicons'
import { MdOutlineEmail } from 'react-icons/md'

const ContactSection = ({ id }) => {
  return (
    <div className="SectionContent" id={id}>
      <div className="ContactSection">
        <p className="ContactTitle">Contact Me</p>
        <div className="ContactSocialsContainer">
          <ul className="ContactLinks">
            <li>
              <div className="ContactLinkContainer">
                <p
                  className="email-link"
                  onClick={() => {
                    window.location = 'mailto:austinndo@gmail.com'
                  }}
                >
                  <MdOutlineEmail size={42} />
                </p>
              </div>
            </li>
            <li>
              <div className="ContactLinkContainer">
                <a
                  href="https://www.linkedin.com/in/austin-do/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinOriginalIcon size={42} />
                </a>
              </div>
            </li>
            <li>
              <div className="ContactLinkContainer">
                <a
                  href="https://github.com/austinndo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubOriginalIcon size={42} />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
