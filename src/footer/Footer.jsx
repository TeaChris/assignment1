import IMG1 from '../assets/I4G.png'
import IMG2 from '../assets/Vector.png'
import './footer.css'

const Footer = () => {
  return (
    <footer>

      <div className="hng_logo">
        <img src={IMG2} alt="Zuri Logo" />
      </div>

      <div className="text">
        <small>HNG Intenship 9 Frontend Task</small>
      </div>

      <div className="i4g_logo">
          <img src={IMG1} alt="I4G Logo" />
      </div>
    </footer>
  )
}

export default Footer