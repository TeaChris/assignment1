import IMG1 from '../assets/profile-img.png'
import IMG2 from '../assets/share.png'
import IMG3 from '../assets/share-moile.png'
import './profile.css'

const Profile = () => {
  return (
    <header>
      {/* <div className="header_image">
        <a href="#">
          <img src={IMG2} alt="Share button" />
        </a>
      </div> */}
      <div className="profile">
        <img src={IMG1} alt="Profile Photo" className='profile_photo'/>
        <a href="#"><img src={IMG2} alt="Share button" className='share'/></a>
        <a href="#"><img src={IMG3} alt="Share button" className='share_mobile'/></a>
      </div>
      <h2>Oyabkin Temitope</h2>
    </header>
  )
}

export default Profile