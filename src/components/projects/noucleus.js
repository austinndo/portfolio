import noucleusLanding from '../../assets/noucleus-asset1.png'
import noucleusDesigns from '../../assets/noucleus-asset2.png'
import noucleusAnalytics from '../../assets/noucleus-asset3.png'
import { ReactOriginalIcon, DjangoOriginalIcon } from 'react-devicons'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { GoPrimitiveDot } from 'react-icons/go'
import { MdOutlineLaunch } from 'react-icons/md'
import { useState } from 'react'

const Noucleus = () => {
  const [noucleusSlide, setNoucleusSlide] = useState('first')

  return (
    <div className="ProjectComponent">
      <h2 className="ProjectTitle">Noucleus</h2>
      <div className="ProjectPicAndParaContainer" id="reverseProjectOrder">
      <div className="CarouselContainer">
          <div className="MyCarousel">
            <div className="CarouselArrowContainer">
              <FaChevronLeft
                className="LeftCarouselArrow"
                onClick={() => {
                  if (noucleusSlide === 'second') {
                    setNoucleusSlide('first')
                  }
                  if (noucleusSlide === 'third') {
                    setNoucleusSlide('second')
                  }
                }}
              />
            </div>
            <img
              src={
                noucleusSlide === 'first'
                  ? noucleusLanding
                  : noucleusSlide === 'second'
                  ? noucleusDesigns
                  : noucleusAnalytics
              }
              alt="promoto-project"
            />
            <div className="CarouselArrowContainer">
              <FaChevronRight
                className="RightCarouselArrow"
                onClick={() => {
                  if (noucleusSlide === 'first') {
                    setNoucleusSlide('second')
                  }
                  if (noucleusSlide === 'second') {
                    setNoucleusSlide('third')
                  }
                }}
              />
            </div>
          </div>
          <div className="ProjectImageIndicator">
            <div
              className={
                noucleusSlide === 'first'
                  ? 'CarouselImageOn'
                  : 'CarouselImageOff'
              }
            >
              <GoPrimitiveDot />
            </div>
            <div
              className={
                noucleusSlide === 'second'
                  ? 'CarouselImageOn'
                  : 'CarouselImageOff'
              }
            >
              <GoPrimitiveDot />
            </div>
            <div
              className={
                noucleusSlide === 'third'
                  ? 'CarouselImageOn'
                  : 'CarouselImageOff'
              }
            >
              <GoPrimitiveDot />
            </div>
          </div>
        </div>

        <div className="ProjectDescriptionB">
          <p>
            Full stack app that allows users to create a profile, upload sgRNA
            designs, and visualize data regarding the efficiency of their edits.
          </p>
        </div>
       
      </div>
      <div className="ProjectTechandLinks">
        <div className="ProjectTech">
          <h5 className="ProjectTechTitle">Tech Used:</h5>
          <ul>
            <li className="ProjectDevIconsB">
              <ReactOriginalIcon size={28} />
              <DjangoOriginalIcon size={28} />
            </li>
          </ul>
        </div>
        <div className="ProjectLinksB">
          <a
            href="https://github.com/austinndo/Noucleus"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Front-end Repo <MdOutlineLaunch />
          </a>

          <a
            href="https://github.com/austinndo/Noucleus_db"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Back-end Repo <MdOutlineLaunch />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Noucleus
