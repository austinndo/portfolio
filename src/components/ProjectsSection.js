// import Rabido from './projects/rabido'
import Noucleus from './projects/noucleus'
import Promoto from './projects/promoto'
import Seafood from './projects/seafood'

const ProjectsSection = ({ id }) => {
  return (
    <div className="SectionContent" id={id}>
      <div className="ProjectsSection">
        <p className="ProjectsHeader">Projects</p>
        <div className="ProjectDividerContainer">
          <div className="ProjectDivider"></div>
        </div>
        <Noucleus />
        <div className="ProjectDividerContainer">
          <div className="ProjectDivider"></div>
        </div>
        <Promoto />
        <div className="ProjectDividerContainer">
          <div className="ProjectDivider"></div>
        </div>
        <Seafood />
        <div className="ProjectDividerContainer">
          <div className="ProjectDivider"></div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsSection
