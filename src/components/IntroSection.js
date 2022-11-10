import resume from '../assets/Austin_Do_Resume.docx.pdf'
import { HiDocumentDownload } from 'react-icons/hi'
import { MdOutlineLaunch } from 'react-icons/md'

const IntroSection = ({ id }) => {
  return (
    <div className="SectionContent" id={id}>
      <div className="IntroSection">
        <span>
          <p>Hello!</p>
          <p>My name is Austin Do,</p>
        </span>
        <div className="IntroParagraph">
          <p>
            I'm a solutions focused software engineer with experience developing
            and managing LIMS applications. My involvement at the intersection
            of operations and sales inspired me to continuously improve user
            systems and has taught me to value open communication and active
            collaboration.
          </p>
        </div>

        <div className="IntroResumeContainer">
          <span>
            <p>Resume</p>
          </span>
          <div className="IntroResumeContent">
            <a href={resume} download>
              Download <HiDocumentDownload />
            </a>

            <a
              href="https://docs.google.com/document/d/1XagYzDBAVQlMqvY8Fk-8yoSearsTI5Gj/edit?usp=sharing&ouid=100953629623174778157&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              View <MdOutlineLaunch />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroSection
