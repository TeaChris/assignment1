import {BsArrow90DegRight} from 'react-icons/bs'
import IMG1 from '../assets/profile-img.png'
import './profile.css'

const Profile = () => {
  return (
    <header>
      <div className="header_icon">
        <BsArrow90DegRight/>
      </div>
      <div className="profile">
        <img src={IMG1} alt="" />
      </div>
      <h2>Olasunkanmi Boluwatife</h2>
    </header>
  )
}

export default Profile