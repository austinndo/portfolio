import seafoodSearch from '../../assets/sustainable-seafood-asset1.png'
import seafoodList from '../../assets/sustainable-seafood-asset2.png'
import {
  Html5OriginalIcon,
  Css3OriginalIcon,
  JavascriptOriginalIcon
} from 'react-devicons'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { GoPrimitiveDot } from 'react-icons/go'
import { useState } from 'react'

const Seafood = () => {
  const [seafoodSlide, setSeafoodSlide] = useState('first')

  return (
    <div>
      <h2>Sustainable Seafood</h2>
      <div className="CarouselContainer">
        <div className="MyCarousel">
          <div>
            <FaChevronLeft
              className="LeftCarouselArrow"
              onClick={() => {
                setSeafoodSlide('first')
              }}
            />
          </div>
          <img
            src={seafoodSlide === 'first' ? seafoodSearch : seafoodList}
            alt="seafood-project image"
          />
          <div>
            <FaChevronRight
              className="RightCarouselArrow"
              onClick={() => {
                setSeafoodSlide('second')
              }}
            />
          </div>
        </div>
        <div className="ProjectImageIndicator">
          <div
            className={
              seafoodSlide === 'first' ? 'CarouselImageOn' : 'CarouselImageOff'
            }
          >
            <GoPrimitiveDot />
          </div>

          <div
            className={
              seafoodSlide === 'first' ? 'CarouselImageOff' : 'CarouselImageOn'
            }
          >
            <GoPrimitiveDot />
          </div>
        </div>
      </div>

      <p>
        Utilizing the fishwatch API to present data on different species of fish
        including source, population, and a short description of the fish.
      </p>
      <h3>Tech Used:</h3>
      <ul>
        <li>
          <JavascriptOriginalIcon /> <Html5OriginalIcon /> <Css3OriginalIcon />
        </li>
      </ul>
      <div className="ProjectLinks">
        <a
          href="https://sustainable-seafood.surge.sh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Site
        </a>
        <a
          href="https://github.com/austinndo/sustainable_seafood"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo
        </a>
        <br></br>
      </div>
    </div>
  )
}

export default Seafood
