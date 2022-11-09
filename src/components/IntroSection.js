import resume from '../assets/Austin_Do_Resume.docx.pdf'

const IntroSection = ({ id }) => {
  return (
    <div className="SectionContent" id={id}>
      <div className="IntroSection">
        <h2>Hello!</h2>
        <h2>My name is Austin Do,</h2>
        <div className="IntroParagraph">
          <p>
            I'm a solutions focused software engineer with experience developing
            and managing LIMS applications. My involvement at the intersection
            of operations and sales inspired me to continuously improve user
            systems and has taught me to value open communication and active
            collaboration.
          </p>
        </div>

        <div className="IntroResume">
          <h2>Resume</h2>
          <a href={resume} download>
            Download Here
          </a>
        </div>
      </div>
    </div>
  )
}

export default IntroSection
