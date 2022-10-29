import IMG1 from '../assets/Icon.png'
import IMG2 from '../assets/Icon2.png'
import './links.css'

const Links = () => {
  return (
     <section className='links'>
        <a href="https://training.zuri.team/" id='btn__zuri' target='_blank' className='link'>Zuri Team</a>
        <a href="qhttp://books.zuri.team" id='books' target='_blank' className='link'>Books</a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>" id='book__python' target='_blank' className='link'>Buy Now</a>
        <a href="https://background.zuri.team" id='pitch' target='_blank' className='link'>Pitch</a>
        <a href="https://github.com/TeaChris/assignment1" id='code' target='_blank' className='link'>Background check for coders</a>
        <a href="https://books.zuri.team/design-rules" id='book__design' target='_blank' className='link'>Design Books</a>
        <div className="social_icon">
          <a href="#"><img src={IMG2} alt="Github Logo" className='slack'/></a>
          <a href="#"><img src={IMG1} alt="Github Logo" /></a>
        </div>
    </section>
  )
}

export default Links