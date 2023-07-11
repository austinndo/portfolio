import weatherHome from '../../assets/my-weather-asset-1.png'
import mainCard from '../../assets/my-weather-asset-2.png'
import forecastCards from '../../assets/my-weather-asset-3.png'
import {
  ReactOriginalIcon,
  Html5OriginalIcon,
  Css3OriginalIcon
} from 'react-devicons'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { GoPrimitiveDot } from 'react-icons/go'
import { MdOutlineLaunch } from 'react-icons/md'
import { useState } from 'react'

const MyWeather = () => {
  const [weatherSlide, setWeatherSlide] = useState('first')

  return (
    <div className="ProjectComponent">
      <h2 className="ProjectTitle">My Weather</h2>
      <div className="ProjectPicAndParaContainer" id="reverseProjectOrder">
        <div className="CarouselContainer">
          <div className="MyCarousel">
            <div className="CarouselArrowContainer">
              <FaChevronLeft
                className="LeftCarouselArrow"
                onClick={() => {
                  if (weatherSlide === 'third') {
                    setWeatherSlide('second')
                  }
                  else {
                    setWeatherSlide('first')
                  }
                }}
              />
            </div>
            <img
              src={weatherSlide === 'first' ?  weatherHome : weatherSlide === 'second' ? mainCard : forecastCards}
              alt="weather-project"
            />
            <div className="CarouselArrowContainer">
              <FaChevronRight
                className="RightCarouselArrow"
                onClick={() => {
                  if (weatherSlide === 'first') {
                    setWeatherSlide('second')
                  }
                  if (weatherSlide === 'second') {
                    setWeatherSlide('third')
                  }
                }}
              />
            </div>
          </div>
          <div className="ProjectImageIndicator">
            <div
              className={
                weatherSlide === 'first'
                  ? 'CarouselImageOn'
                  : 'CarouselImageOff'
              }
            >
              <GoPrimitiveDot />
            </div>

            <div
              className={
                weatherSlide === 'second'
                  ? 'CarouselImageOn'
                  : 'CarouselImageOff'
              }
            >
              <GoPrimitiveDot />
            </div>
            <div
              className={
                weatherSlide === 'third'
                  ? 'CarouselImageOn'
                  : 'CarouselImageOff'
              }
            >
              <GoPrimitiveDot />
            </div>
          </div>
        </div>
        <p className="ProjectDescriptionA">
        Simple React app to pull data from a weather api. Determines user's location using react-geolocated. Provides current weather and a three day forecast. User can click on the forecast day for more information including UV index, chance of rain, etc.
        </p>
      </div>
      <div className="ProjectTechandLinks">
      <div className="ProjectTech">
          <h5 className="ProjectTechTitle">Tech Used:</h5>
          <ul>
            <li className="ProjectDevIconsA">
              <ReactOriginalIcon size={28} />{' '}
              <Html5OriginalIcon size={28} /> <Css3OriginalIcon size={28} />
            </li>
          </ul>
        </div>
        <div className="ProjectLinksA">
          <a
            href="https://my-weather-3.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Site <MdOutlineLaunch />
          </a>
          <a
            href="https://github.com/austinndo/react_weather_app"
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

export default MyWeather