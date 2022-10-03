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
import Carousel from 'react-bootstrap/Carousel'

const ProjectsSection = ({ id }) => {
  return (
    <div className="SectionContent" id={id}>
      <div className="ProjectsSection">
        <h1>Projects</h1>

        <h2>Rabido</h2>
        <Carousel interval={null}>
          <Carousel.Item>
            <img className="d-block w-100" src={rabidoFeed} alt="rabido-feed" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={rabidoCategories}
              alt="rabido-categories"
            />
          </Carousel.Item>
        </Carousel>
        <p>
          Website that connects freelancers offering a variety of services with
          businesses and individuals.{' '}
        </p>
        <h3>Tech Used:</h3>
        <ul>
          <li>
            <ReactOriginalIcon /> <PostgresqlOriginalIcon />{' '}
            <ExpressOriginalIcon />
            <NodejsOriginalIcon />
          </li>
        </ul>
        <div className="ProjectLinks">
          <a href="https://powerful-retreat-33440.herokuapp.com/feed">
            Live Site
          </a>
          <a href="https://github.com/phicov/Rabido">GitHub Repo</a>
          <br></br>
        </div>

        <h2>Promoto</h2>
        <Carousel interval={null}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={promotoLanding}
              alt="promoto-landing"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={promotoFeed}
              alt="promoto-feed"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={promotoForm}
              alt="promoto-form"
            />
          </Carousel.Item>
        </Carousel>
        <p>
          Full-stack MERN app that allows users to share and post content about
          their favorite artist or genre.
        </p>
        <h3>Tech Used:</h3>
        <ul>
          <li>
            <ReactOriginalIcon /> <MongodbOriginalIcon />{' '}
            <ExpressOriginalIcon />
            <NodejsOriginalIcon />
          </li>
        </ul>
        <div className="ProjectLinks">
          <a href="https://mighty-dusk-67064.herokuapp.com/promoto">
            Live Site
          </a>
          <a href="https://github.com/austinndo/promoto">GitHub Repo</a>
          <br></br>
        </div>

        <h2>Sustainable Seafood</h2>
        <Carousel interval={null}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={seafoodSearch}
              alt="sustainable-seafood-search"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={seafoodList}
              alt="sustainable-seafood-list"
            />
          </Carousel.Item>
        </Carousel>

        <p>
          Utilizing the fishwatch API to present data on different species of
          fish including source, population, and a short description of the
          fish.
        </p>
        <h3>Tech Used:</h3>
        <ul>
          <li>
            <JavascriptOriginalIcon /> <Html5OriginalIcon />{' '}
            <Css3OriginalIcon />
          </li>
        </ul>
        <div className="ProjectLinks">
          <a href="https://sustainable_seafood.surge.sh/">Live Site</a>
          <a href="https://github.com/austinndo/sustainable_seafood">
            GitHub Repo
          </a>
          <br></br>
        </div>
      </div>
    </div>
  )
}

export default ProjectsSection
