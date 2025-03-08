import React from 'react'
import './About.css'
import profile from './image1.jpg'
import { Fade } from "react-awesome-reveal";



const About = () => {
  return (
    <>
        <Fade>
          <div className='about' id='about'>
              <div className="row">
                  <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
                    <img src={profile} alt="Face" />
                  </div> 
                  <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'>
                    <h1>About Me</h1>
                    <p>
                      Welcome to my portfolio! I am passionate about technology, innovation, and solving real-world problems through creative solutions. With a background in Electrical and Information Engineering, I specialize in software development, cybersecurity, cloud computing, and telecommunications. My journey has been fueled by a deep curiosity to explore emerging technologies and apply them to practical challenges.
                      I have worked on various projects, including database systems, 3D modeling, circuit design, and web development. Whether it's crafting efficient algorithms, optimizing system performance, or designing intuitive user experiences, I enjoy turning ideas into reality.
                      Beyond technical work.
                    </p>
                  </div>
              </div>
          </div>
        </Fade>
    </>
  )
}

export default About;