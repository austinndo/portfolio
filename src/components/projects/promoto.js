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
import { useState } from 'react'

const Promoto = () => {
  const [promotoSlide, setPromotoSlide] = useState('first')

  const carouselLeftSwitch = (promotoSlide) => {
    switch (promotoSlide) {
      case 'first':
        break
      case 'second':
        setPromotoSlide('first')
        break
      case 'third':
        setPromotoSlide('second')
        break
      default:
        break
    }
  }

  const carouselRightSwitch = (promotoSlide) => {
    switch (promotoSlide) {
      case 'first':
        setPromotoSlide('second')
        console.log('setting to second')
        break
      case 'second':
        setPromotoSlide('third')
        break
      case 'third':
        break
      default:
        break
    }
  }

  return (
    <div>
      <h2>Promoto</h2>
      <div className="CarouselContainer">
        <div className="MyCarousel">
          <div>
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
            alt="promoto-project image"
          />
          <div>
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
              promotoSlide === 'first' ? 'CarouselImageOn' : 'CarouselImageOff'
            }
          >
            <GoPrimitiveDot />
          </div>
          <div
            className={
              promotoSlide === 'second' ? 'CarouselImageOn' : 'CarouselImageOff'
            }
          >
            <GoPrimitiveDot />
          </div>
          <div
            className={
              promotoSlide === 'third' ? 'CarouselImageOn' : 'CarouselImageOff'
            }
          >
            <GoPrimitiveDot />
          </div>
        </div>
      </div>
      <p>
        Full-stack MERN app that allows users to share and post content about
        their favorite artist or genre.
      </p>
      <h3>Tech Used:</h3>
      <ul>
        <li>
          <ReactOriginalIcon /> <MongodbOriginalIcon /> <ExpressOriginalIcon />
          <NodejsOriginalIcon />
        </li>
      </ul>
      <div className="ProjectLinks">
        <a
          href="https://promoto.herokuapp.com/promoto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Site
        </a>
        <a
          href="https://github.com/austinndo/promoto"
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

export default Promoto
