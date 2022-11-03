import seafoodSearch from '../../assets/sustainable-seafood-asset1.png'
import seafoodList from '../../assets/sustainable-seafood-asset2.png'
import {
  Html5OriginalIcon,
  Css3OriginalIcon,
  JavascriptOriginalIcon
} from 'react-devicons'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { GoPrimitiveDot } from 'react-icons/go'
import { MdOutlineLaunch } from 'react-icons/md'
import { useState } from 'react'

const Seafood = () => {
  const [seafoodSlide, setSeafoodSlide] = useState('first')

  return (
    <div>
      <h2 className="ProjectTitle">Sustainable Seafood</h2>
      <div div className="ProjectPicAndParaContainer">
        <div className="CarouselContainer">
          <div className="MyCarousel">
            <div className="CarouselArrowContainer">
              <FaChevronLeft
                className="LeftCarouselArrow"
                onClick={() => {
                  setSeafoodSlide('first')
                }}
              />
            </div>
            <img
              src={seafoodSlide === 'first' ? seafoodSearch : seafoodList}
              alt="seafood-project"
            />
            <div className="CarouselArrowContainer">
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
                seafoodSlide === 'first'
                  ? 'CarouselImageOn'
                  : 'CarouselImageOff'
              }
            >
              <GoPrimitiveDot />
            </div>

            <div
              className={
                seafoodSlide === 'first'
                  ? 'CarouselImageOff'
                  : 'CarouselImageOn'
              }
            >
              <GoPrimitiveDot />
            </div>
          </div>
        </div>

        <p className="ProjectDescriptionA">
          Utilizing the fishwatch API to present data on different species of
          fish including source, population, and a short description of the
          fish.
        </p>
      </div>
      <div className="ProjectTechandLinks">
        <div className="ProjectLinks">
          <a
            href="https://sustainable-seafood.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Site <MdOutlineLaunch />
          </a>
          <a
            href="https://github.com/austinndo/sustainable_seafood"
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
              <JavascriptOriginalIcon /> <Html5OriginalIcon />{' '}
              <Css3OriginalIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Seafood
