import palmerHome from '../../assets/palmer-homepage.png'
import palmerBodyMass from '../../assets/palmer-bodymass.png'
import palmerFlipper from '../../assets/palmer-flipperlength.png'
import { SiPython, SiPlotly } from 'react-icons/si'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { GoPrimitiveDot } from 'react-icons/go'
import { MdOutlineLaunch } from 'react-icons/md'
import { useState } from 'react'

const Palmer = () => {
  const [palmerSlide, setpalmerSlide] = useState('first')

  return (
    <div className="ProjectComponent">
      <h2 className="ProjectTitle">Palmer Penguins</h2>
      <div div className="ProjectPicAndParaContainer">
        <div className="ProjectDescriptionB">
          <p>
            Dash app visualizing Palmer penguin data from Kaggle
          </p>
        </div>
        <div className="CarouselContainer">
          <div className="MyCarousel">
            <div className="CarouselArrowContainer">
              <FaChevronLeft
                className="LeftCarouselArrow"
                onClick={() => {
                  if (palmerSlide === 'second') {
                    setpalmerSlide('first')
                  }
                  if (palmerSlide === 'third') {
                    setpalmerSlide('second')
                  }
                }}
              />
            </div>
            <img
              src={
                palmerSlide === 'first'
                  ? palmerHome
                  : palmerSlide === 'second'
                  ? palmerBodyMass
                  : palmerFlipper
              }
              alt="palmerPenguins"
            />
            <div className="CarouselArrowContainer">
              <FaChevronRight
                className="RightCarouselArrow"
                onClick={() => {
                  if (palmerSlide === 'first') {
                    setpalmerSlide('second')
                  }
                  if (palmerSlide === 'second') {
                    setpalmerSlide('third')
                  }
                }}
              />
            </div>
          </div>
          <div className="ProjectImageIndicator">
            <div
              className={
                palmerSlide === 'first'
                  ? 'CarouselImageOn'
                  : 'CarouselImageOff'
              }
            >
              <GoPrimitiveDot />
            </div>
            <div
              className={
                palmerSlide === 'second'
                  ? 'CarouselImageOn'
                  : 'CarouselImageOff'
              }
            >
              <GoPrimitiveDot />
            </div>
            <div
              className={
                palmerSlide === 'third'
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
              <SiPython size={28} />
              <SiPlotly size={28} />
            </li>
          </ul>
        </div>
        <div className="ProjectLinksB">
          <a
            href="https://palmer-penguin-data.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Palmer Penguin Data <MdOutlineLaunch />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Palmer