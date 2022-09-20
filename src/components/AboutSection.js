import resume from '../assets/Austin_Do_Resume.docx.pdf'

const AboutSection = ({ id }) => {
  return (
    <div className="SectionContent" id={id}>
      <div className="AboutSection">
        <h2>About Me</h2>
        <h4>
          I'm a solutions focused software engineer with experience developing
          and managing LIMS applications. My involvement at the intersection of
          operations and sales inspired me to continuously improve user systems
          and has taught me to value open communication and active
          collaboration.
        </h4>
        <h3>Resume</h3>
        <a href={resume} download>
          Download Here
        </a>
      </div>
    </div>
  )
}

export default AboutSection
