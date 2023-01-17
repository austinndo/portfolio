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
    <div className="ProjectComponent">
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
        <div className="ProjectLinksA">
          {/* <a
            href="https://rabido.herokuapp.com/feed"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Site <MdOutlineLaunch />
          </a> */}
          <h5 className="temporaryHeroku">
            Live Site Moving to Another Platform
          </h5>
          <a
            href="https://github.com/phicov/Rabido"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo <MdOutlineLaunch />
          </a>
        </div>
        <div className="ProjectTech">
          <h5 className="ProjectTechTitle">Tech Used:</h5>
          <ul>
            <li className="ProjectDevIconsA">
              <ReactOriginalIcon size={28} />{' '}
              <PostgresqlOriginalIcon size={28} />{' '}
              <ExpressOriginalIcon size={28} />
              <NodejsOriginalIcon size={28} />
            </li>
          </ul>
        </div>
      </div>
      <div className="ProjectDividerContainer">
        <div className="ProjectDivider"></div>
      </div>
    </div>
  )
}

export default Rabido
