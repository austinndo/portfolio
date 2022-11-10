import Rabido from './projects/rabido'
import Promoto from './projects/promoto'
import Seafood from './projects/seafood'

const ProjectsSection = ({ id }) => {
  return (
    <div className="SectionContent" id={id}>
      <div className="ProjectsSection">
        <p className="ProjectsHeader">Projects</p>

        <Rabido />
        <Promoto />
        <Seafood />
      </div>
    </div>
  )
}

export default ProjectsSection
