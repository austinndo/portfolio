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
import { useState } from 'react'

const Rabido = () => {
  const [rabidoSlide, setRabidoSlide] = useState('first')

  return (
    <div>
      <h2>Rabido</h2>
      <div div className="ProjectInfoContainer">
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
        <p>
          Website that connects freelancers offering a variety of services with
          businesses and individuals.{' '}
        </p>
      </div>
      <h3>Tech Used:</h3>
      <ul>
        <li>
          <ReactOriginalIcon /> <PostgresqlOriginalIcon />{' '}
          <ExpressOriginalIcon />
          <NodejsOriginalIcon />
        </li>
      </ul>
      <div className="ProjectLinks">
        <a
          href="https://rabido.herokuapp.com/feed"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rabido Live Site
        </a>
        <a
          href="https://github.com/phicov/Rabido"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo
        </a>
      </div>
    </div>
  )
}

export default Rabido
