import IMG1 from '../assets/profile-img.png'
import IMG2 from '../assets/share.png'
import IMG3 from '../assets/share-moile.png'
import './profile.css'

const Profile = () => {
  return (
    <header>
      <div className="profile">
      <a href="#"><img src={IMG3} alt="Share button" className='share_mobile'/></a>
        <img src={IMG1} alt="Profile Photo" className='profile_photo' id='profile__img'/>
        <a href="#"><img src={IMG2} alt="Share button" className='share'/></a>
      </div>
      <h2>Thee_tech</h2>
      <h3 id='slack'>bermuda</h3>
    </header>
  )
}

export default Profile