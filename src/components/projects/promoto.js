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
        <div className="ProjectDescriptionB">
          <p className="tempFontSize">
            Full-stack MERN app that allows users to share and post content
            about their favorite artist or genre.
          </p>
          <p className="tempFontSize">
            *Database previously supported by Heroku. No create/edit
            capabilities for now. Enter site by clicking the play button without
            any login or password.
          </p>
        </div>
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
              <ReactOriginalIcon size={28} />
              <MongodbOriginalIcon size={28} />
              <ExpressOriginalIcon size={28} />
              <NodejsOriginalIcon size={28} />
            </li>
          </ul>
        </div>
        <div className="ProjectLinksB">
          <a
            href="https://promoto2.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Promoto v2 <MdOutlineLaunch />
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
    </div>
  )
}

export default Promoto
