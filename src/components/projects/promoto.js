import promotoLanding from '../../assets/promoto-asset3.png'
import promotoFeed from '../../assets/promoto-asset1.png'
import promotoForm from '../../assets/promoto-asset2.png'
import {
  ReactOriginalIcon,
  NodejsOriginalIcon,
  ExpressOriginalIcon,
  MongodbOriginalIcon
} from 'react-devicons'
import { useState } from 'react'

const Promoto = () => {
  const [promotoSlide, setPromotoSlide] = useState('first')

  return (
    <div>
      <h2>Promoto</h2>

      <img src={promotoLanding} alt="promoto-landing" />

      <img src={promotoFeed} alt="promoto-feed" />

      <img src={promotoForm} alt="promoto-form" />

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
