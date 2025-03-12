import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.png'



const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <h2>I'm <span>Praveen kumar</span>, student of JNU</h2>
                        <p>I am a MERN Stack developer. I am familier with JavaScript. I am also familier with frontend technologies like HTML, CSS, ReactJs. I have done MCA from Jawaharlal Nehru University (2023-2025). </p>
                        <p>I'm passionate about problem solving, learning new technology and create user-friendly websites and applications, and trying my best to learn and grow as a developer.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>DSA</p><hr style={{ width: "82%" }} /> </div>
                        <div className="about-skill"><p>MySQL</p><hr style={{ width: "78%" }} /> </div>
                        <div className="about-skill"><p>Java</p><hr style={{ width: "86%" }} /> </div>
                        <div className="about-skill"><p>Python</p><hr style={{ width: "70%" }} /> </div>
                        <div className="about-skill"><p>C/C++</p><hr style={{ width: "65%" }} /> </div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: "85%" }} /> </div>
                        <div className="about-skill"><p>ReactJS</p><hr style={{ width: "70%" }} /> </div>
                        <div className="about-skill"><p>NodeJS</p><hr style={{ width: "72%" }} /> </div>
                        <div className="about-skill"><p>ExpressJS</p><hr style={{ width: "68%" }} /> </div>
                        <div className="about-skill"><p>MongoDB</p><hr style={{ width: "62%" }} /> </div>
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "92%" }} /> </div>

                        <br />




                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>Years of Experience</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>6+</h1>
                    <p>Projects completed</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>26+</h1>
                    <p>Happy Client</p>
                </div>

            </div>

        </div>
    )
}

export default About