import React from 'react'
import { useTheme } from '../../context/ThemeContext'; 
import './Home.css'
import Typewriter from 'typewriter-effect';
import { BsMoonStarsFill } from "react-icons/bs";
import { IoSunny } from "react-icons/io5";
import { Slide } from "react-awesome-reveal";
import Zoom from 'react-reveal/Zoom';

const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme= ()=> {
    setTheme((prevState)=>(prevState ==='light' ? 'dark' : 'light'));
  };
  return (
    <>
        <div className='container-fluid home-container' id='home'>
          <div className='theme-btn' onClick={handleTheme}>
            {theme === 'light' ? 
            (<BsMoonStarsFill/>

            ):(
              <IoSunny/>
            )}
          </div>
          <div className='container home-content'>
            <Slide direction='down' duration={500}>
              <h1>Hi I'm a </h1>
              <h2>
                <Typewriter
                options={{
                strings: ['Electrical Engineer!', 
                            'Mern Stack Developer!',
                            'Full Stack Developer!'],
                autoStart: true,
                loop: true,
                }}
                />
              </h2>
            </Slide>
            <Zoom>
            <div className='home-buttons'>
              <a className='btn btn-hire' 
              href='https://api.whatsapp.com/send?phone=94111111111' /* Add My number*/
              rel = 'noreference'
              target='_blank'
              >

                Hire Me
              </a>
              <button className='btn btn-cv'>My Resume</button>
            </div>
            </Zoom>
          </div>
        </div>
    </>
  )
}

export default Home