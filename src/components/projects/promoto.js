import promotoLanding from '../../assets/promoto-asset3.png'
import promotoFeed from '../../assets/promoto-asset1.png'
import promotoForm from '../../assets/promoto-asset2.png'
import {
  ReactOriginalIcon,
  NodejsOriginalIcon,
  ExpressOriginalIcon,
  MongodbOriginalIcon
} from 'react-devicons'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { GoPrimitiveDot } from 'react-icons/go'
import { MdOutlineLaunch } from 'react-icons/md'
import { useState } from 'react'

const Promoto = () => {
  const [promotoSlide, setPromotoSlide] = useState('first')

  return (
    <div className="ProjectComponent">
      <h2 className="ProjectTitle">Promoto</h2>
      <div div className="ProjectPicAndParaContainer">
        <p className="ProjectDescriptionB">
          Full-stack MERN app that allows users to share and post content about
          their favorite artist or genre.
        </p>
        <div className="CarouselContainer">
          <div className="MyCarousel">
            <div className="CarouselArrowContainer">
              <FaChevronLeft
                className="LeftCarouselArrow"
                onClick={() => {
                  if (promotoSlide === 'second') {
                    setPromotoSlide('first')
                  }
                  if (promotoSlide === 'third') {
                    setPromotoSlide('second')
                  }
                }}
              />
            </div>
            <img
              src={
                promotoSlide === 'first'
                  ? promotoLanding
                  : promotoSlide === 'second'
                  ? promotoFeed
                  : promotoForm
              }
              alt="promoto-project"
            />
            <div className="CarouselArrowContainer">
              <FaChevronRight
                className="RightCarouselArrow"
                onClick={() => {
                  if (promotoSlide === 'first') {
                    setPromotoSlide('second')
                  }
                  if (promotoSlide === 'second') {
                    setPromotoSlide('third')
                  }
                }}
              />
            </div>
          </div>
          <div className="ProjectImageIndicator">
            <div
              className={
                promotoSlide === 'first'
                  ? 'CarouselImageOn'
                  : 'CarouselImageOff'
              }
            >
              <GoPrimitiveDot />
            </div>
            <div
              className={
                promotoSlide === 'second'
                  ? 'CarouselImageOn'
                  : 'CarouselImageOff'
              }
            >
              <GoPrimitiveDot />
            </div>
            <div
              className={
                promotoSlide === 'third'
                  ? 'CarouselImageOn'
                  : 'CarouselImageOff'
              }
            >
              <GoPrimitiveDot />
            </div>
          </div>
        </div>
      </div>
      <div className="ProjectTechandLinks">
        <div className="ProjectTech">
          <h5 className="ProjectTechTitle">Tech Used:</h5>
          <ul>
            <li className="ProjectDevIconsB">
              <ReactOriginalIcon /> <MongodbOriginalIcon />
              <ExpressOriginalIcon />
              <NodejsOriginalIcon />
            </li>
          </ul>
        </div>
        <div className="ProjectLinksB">
          <a
            href="https://promoto.herokuapp.com/promoto"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Site <MdOutlineLaunch />
          </a>
          <a
            href="https://github.com/austinndo/promoto"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo <MdOutlineLaunch />
          </a>
        </div>
      </div>
      <div className="ProjectDivider"></div>
    </div>
  )
}

export default Promoto
