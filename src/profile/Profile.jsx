// import {BsArrow90DegRight} from 'react-icons/bs'
import ReplyIcon from '@mui/icons-material/Reply';
import IMG1 from '../assets/profile-img.png'
import './profile.css'

const Profile = () => {
  return (
    <header>
      <div className="header_icon">
        <ReplyIcon/>
        {/* <BsArrow90DegRight/> */}
      </div>
      <div className="profile">
        <img src={IMG1} alt="" />
      </div>
      <h2>Oyabkin Temitope</h2>
    </header>
  )
}

export default Profile