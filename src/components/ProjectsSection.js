import Rabido from './projects/rabido'
import Promoto from './projects/promoto'
import Seafood from './projects/seafood'

const ProjectsSection = ({ id }) => {
  return (
    <div className="SectionContent" id={id}>
      <div className="ProjectsSection">
        <h2 className="ProjectsHeader">Projects</h2>

        <Rabido />
        <Promoto />
        <Seafood />
      </div>
    </div>
  )
}

export default ProjectsSection
