import rabidoFeed from '../../assets/rabido-asset1.png'
import rabidoCategories from '../../assets/rabido-asset2.png'
import {
  ReactOriginalIcon,
  PostgresqlOriginalIcon,
  NodejsOriginalIcon,
  ExpressOriginalIcon
} from 'react-devicons'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { GoPrimitiveDot } from 'react-icons/go'
import { MdOutlineLaunch } from 'react-icons/md'
import { useState } from 'react'

const Rabido = () => {
  const [rabidoSlide, setRabidoSlide] = useState('first')

  return (
    <div>
      <h2 className="ProjectTitle">Rabido</h2>
      <div div className="ProjectPicAndParaContainer">
        <div className="CarouselContainer">
          <div className="MyCarousel">
            <div className="CarouselArrowContainer">
              <FaChevronLeft
                className="LeftCarouselArrow"
                onClick={() => {
                  setRabidoSlide('first')
                }}
              />
            </div>
            <img
              src={rabidoSlide === 'first' ? rabidoFeed : rabidoCategories}
              alt="rabido-project"
            />
            <div className="CarouselArrowContainer">
              <FaChevronRight
                className="RightCarouselArrow"
                onClick={() => {
                  setRabidoSlide('second')
                }}
              />
            </div>
          </div>
          <div className="ProjectImageIndicator">
            <div
              className={
                rabidoSlide === 'first' ? 'CarouselImageOn' : 'CarouselImageOff'
              }
            >
              <GoPrimitiveDot />
            </div>

            <div
              className={
                rabidoSlide === 'first' ? 'CarouselImageOff' : 'CarouselImageOn'
              }
            >
              <GoPrimitiveDot />
            </div>
          </div>
        </div>
        <p className="ProjectDescriptionA">
          Website that connects freelancers offering a variety of services with
          businesses and individuals.{' '}
        </p>
      </div>
      <div className="ProjectTechandLinks">
        <div className="ProjectLinks">
          <a
            href="https://rabido.herokuapp.com/feed"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Site <MdOutlineLaunch />
          </a>
          <a
            href="https://github.com/phicov/Rabido"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo <MdOutlineLaunch />
          </a>
        </div>
        <div>
          <h4 className="ProjectTechTitle">Tech Used:</h4>
          <ul>
            <li className="ProjectDevIcons">
              <ReactOriginalIcon /> <PostgresqlOriginalIcon />{' '}
              <ExpressOriginalIcon />
              <NodejsOriginalIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Rabido
