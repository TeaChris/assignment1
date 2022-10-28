import IMG1 from '../assets/Icon.png'
import IMG2 from '../assets/Icon2.png'
import './links.css'

const Links = () => {
  return (
     <section className='links'>
        <button className='link_btn'><a href="" id='' target='_blank' className='twitter'>Twitter Link</a></button>
        <button className='link_btn'><a href="" id='' target='_blank'>Zuri Team</a></button>
        <button className='link_btn'><a href="" id='' target='_blank'>Zuri Books</a></button>
        <button className='link_btn'><a href="" id='' target='_blank'>Python Books</a></button>
        <button className='link_btn'><a href="" id='' target='_blank'>Background check for coders</a></button>
        <button className='link_btn'><a href="" id='' target='_blank'>Design Books</a></button>
        <div className="social_icon">
          <a href="#"><img src={IMG2} alt="Github Logo" className='slack'/></a>
          <a href="#"><img src={IMG1} alt="Github Logo" /></a>
        </div>
    </section>
  )
}

export default Links