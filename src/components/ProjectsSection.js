// import Rabido from './projects/rabido'
import Noucleus from './projects/noucleus'
import Promoto from './projects/promoto'
import Seafood from './projects/seafood'

const ProjectsSection = ({ id }) => {
  return (
    <div className="SectionContent" id={id}>
      <div className="ProjectsSection">
        <p className="ProjectsHeader">Projects</p>

        <Noucleus />
        <Promoto />
        <Seafood />
      </div>
    </div>
  )
}

export default ProjectsSection
