import rabidoFeed from '../assets/rabido-asset1.png'
import rabidoCategories from '../assets/rabido-asset2.png'
import promotoLanding from '../assets/promoto-asset3.png'
import promotoFeed from '../assets/promoto-asset1.png'
import promotoForm from '../assets/promoto-asset2.png'
import seafoodSearch from '../assets/sustainable-seafood-asset1.png'
import seafoodList from '../assets/sustainable-seafood-asset2.png'
import {
  ReactOriginalIcon,
  Html5OriginalIcon,
  Css3OriginalIcon,
  JavascriptOriginalIcon,
  PostgresqlOriginalIcon,
  NodejsOriginalIcon,
  ExpressOriginalIcon,
  MongodbOriginalIcon
} from 'react-devicons'

const ProjectsSection = ({ id }) => {
  return (
    <div className="SectionContent" id={id}>
      <div className="ProjectsSection">
        <h1>Projects</h1>
        <div className="ProjectsSectionContainer">
          <div className="ProjectItem">
            <h2>Rabido</h2>
            <a href="https://powerful-retreat-33440.herokuapp.com/feed">
              Live Site
            </a>
            <a href="https://github.com/phicov/Rabido">GitHub Repo</a>
            <br></br>
            <img src={rabidoFeed} alt="rabido-feed" />
            <img src={rabidoCategories} alt="rabido-categories" />
            <h4>
              Website that connects freelancers offering a variety of services
              with businesses and individuals.{' '}
            </h4>
            <h3>Tech Used:</h3>
            <ul>
              <li>
                <ReactOriginalIcon /> <PostgresqlOriginalIcon />{' '}
                <ExpressOriginalIcon />
                <NodejsOriginalIcon />
              </li>
            </ul>
          </div>

          <div className="ProjectItem">
            <h2>Promoto</h2>
            <a href="https://mighty-dusk-67064.herokuapp.com/promoto">
              Live Site
            </a>
            <a href="https://github.com/austinndo/promoto">GitHub Repo</a>
            <br></br>
            <img src={promotoLanding} alt="promoto-landing" />
            <img src={promotoFeed} alt="promoto-feed" />
            <img src={promotoForm} alt="promoto-form" />
            <h4>
              Full-stack MERN app that allows users to share and post content
              about their favorite artist or genre.
            </h4>
            <h3>Tech Used:</h3>
            <ul>
              <li>
                <ReactOriginalIcon /> <MongodbOriginalIcon />{' '}
                <ExpressOriginalIcon />
                <NodejsOriginalIcon />
              </li>
            </ul>
          </div>

          <div className="ProjectItem">
            <h2>Sustainable Seafood</h2>
            <a href="https://sustainable_seafood.surge.sh/">Live Site</a>
            <a href="https://github.com/austinndo/sustainable_seafood">
              GitHub Repo
            </a>
            <br></br>
            <img src={seafoodSearch} alt="sustainable-seafood-search" />
            <img src={seafoodList} alt="sustainable-seafood-list" />
            <h4>
              Utilizing the fishwatch API to present data on different species
              of fish including source, population, and a short description of
              the fish.
            </h4>
            <h3>Tech Used:</h3>
            <ul>
              <li>
                <JavascriptOriginalIcon /> <Html5OriginalIcon />{' '}
                <Css3OriginalIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsSection
