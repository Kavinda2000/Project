import React from 'react'
import './Menu.css'
import profile from '../Pictures/avatar.png'
import { IoHomeSharp } from "react-icons/io5";
import { RiMessageFill } from "react-icons/ri";
import { FaSchool } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { Link} from 'react-scroll';
import Zoom from 'react-reveal/Zoom';
import { Slide } from "react-awesome-reveal";


const Menu = ({toggle}) => {
  return (
    <>
    {toggle ? (
        <>
        <Zoom >
        <div className="navbar-profile-pic">
                <img src={profile} alt="Profile Pic" className="sidebar-avatar" />
        </div>
        </Zoom>
        <Slide direction="left" duration={500}>
            <div className='nav-items'>
                <div className='nav-item'>
                    <div  className='nav-link'>
                        <Link to='home' 
                            spy={true}
                            smooth={true} 
                            offset={-100} 
                            duration={10}>
                            <IoHomeSharp />
                                Home
                        </Link>
                    </div>
                    <div  className='nav-link'>
                        <Link to='about' 
                            spy={true}
                            smooth={true} 
                            offset={-100} 
                            duration={10}>
                            <RiMessageFill />
                            About
                        </Link>
                        
                    </div>
                    <div  className='nav-link'>
                        <Link to='education' 
                            spy={true}
                            smooth={true} 
                            offset={-100} 
                            duration={10}>
                            <FaSchool />
                            Education
                        </Link>
                    </div>
                    <div  className='nav-link'>
                        <Link to='skills' 
                            spy={true}
                            smooth={true} 
                            offset={-100} 
                            duration={10}>
                            <FaLightbulb />
                            Skills
                        </Link>                    
                    </div>
                    <div  className='nav-link'>
                        <Link to='project' 
                            spy={true}
                            smooth={true} 
                            offset={-100} 
                            duration={10}>
                            <IoCheckmarkDoneCircleSharp />
                            Projects
                        </Link>                   
                    </div>
                    <div  className='nav-link'>
                        <Link to='work' 
                            spy={true}
                            smooth={true} 
                            offset={-100} 
                            duration={10}>
                            <MdWork />
                            Work Experience
                        </Link> 
                    </div>
                    <div  className='nav-link'>
                        <Link to='contact' 
                            spy={true}
                            smooth={true} 
                            offset={-100} 
                            duration={10}>
                            <RiContactsFill />
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </Slide>
        </>
    ) : (
        <>
          <div className='nav-items'>
            <div className='nav-item'>
                <div  className='nav-link'>
                <Link to='home' 
                        spy={true}
                        smooth={true} 
                        offset={-100} 
                        duration={10}>
                        <IoHomeSharp />
                    </Link>
                    
                </div>
                <div  className='nav-link'>
                <Link to='about' 
                        spy={true}
                        smooth={true} 
                        offset={-100} 
                        duration={10}>
                        <RiMessageFill />
                    </Link>
                    
                </div>
                <div  className='nav-link'>
                <Link to='education' 
                        spy={true}
                        smooth={true} 
                        offset={-100} 
                        duration={10}>
                        <FaSchool />
                    </Link>
                    
                </div>
                <div  className='nav-link'>
                <Link to='skills' 
                        spy={true}
                        smooth={true} 
                        offset={-100} 
                        duration={10}>
                        <FaLightbulb />
                    </Link>
                    
                </div>
                <div  className='nav-link'>
                <Link to='project' 
                        spy={true}
                        smooth={true} 
                        offset={-100} 
                        duration={10}>
                        <IoCheckmarkDoneCircleSharp />
                    </Link> 
                    
                </div>
                <div  className='nav-link'>
                <Link to='work' 
                        spy={true}
                        smooth={true} 
                        offset={-100} 
                        duration={10}>
                        <MdWork />
                    </Link> 
                     
                </div>
                <div  className='nav-link'>
                <Link to='contact' 
                        spy={true}
                        smooth={true} 
                        offset={-100} 
                        duration={10}>
                        <RiContactsFill />
                    </Link>
                </div>
            </div>
        </div>  
        </>
    )}




    </>
  )
}

export default Menu