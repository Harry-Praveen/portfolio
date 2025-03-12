import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import About from '../../Components/About/About'


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h2>Hey, My Name is</h2>
        <h1><span>Praveen Kumar</span></h1>
        <p>I'm a passionate web developer with a strong focus on creating responsive, user-friendly, and high-performance websites. I specialize in MERN stack development.</p>
        <br />
        {/* <h3 onClick={About} id="aboutmore">About Me →</h3> */}
        <div className="hero-action">
            <div className="hero-connect">
              <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me
              </AnchorLink>
              </div>
            <div className="hero-resume"><a id="cvStyle"  href="https://drive.google.com/file/d/1ckR37FqSpyx2jsXNb04c-igrcwhS9TpU/view?usp=sharing">My Resume</a></div>
        </div>
    </div>
  )
}

export default Hero