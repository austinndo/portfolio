import profile_photo from '../assets/profile_photo.png'

const AboutSection = ({ id }) => {
  return (
    <div className="SectionContent" id={id}>
      <div className="AboutSection">
        <h2>About Me</h2>
        <div className="AboutSplitOne">
          <div className="AboutParagraphOne">
            <p>
              Hi, I'm Austin Do. I'm a software engineer with a background in
              biology and analytics. I first began coding in college where I
              used <span>R</span> to analyze biological data. After graduation I
              joined a biotech startup where I worked cross-functionally with
              Sales, Software, and Operations.
            </p>
          </div>

          <div className="AboutImageContainer">
            <div className="AboutImage">
              <img src={profile_photo} alt="profile_photo" />
            </div>
          </div>
        </div>

        <div className="AboutSplitTwo">
          <p>
            In my role as a planner at this startup I helped develop a{' '}
            <span>Python</span> algorithm with our Dev Ops team to automate
            order processing. It was at this time that I fully realized my
            interest in software engineering.
          </p>

          <p>
            I'm excited to continue developing my software engineering skills!
            Most recently I've worked with <span>Javascript</span> to create a
            handful of full stack <span>React</span> apps. Check out a few of my
            projects below!
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
