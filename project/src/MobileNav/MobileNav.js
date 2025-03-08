import React,{useState} from 'react'
import './MobileNav.css'
import { CgMenu } from "react-icons/cg";
import { IoHomeSharp } from "react-icons/io5";
import { RiMessageFill } from "react-icons/ri";
import { FaSchool } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { Link} from 'react-scroll';
import { HiMenuAlt1 } from "react-icons/hi";


const MobileNav = () => {
    const [open,setOpen] = useState(false)

    //handle open
    const handleOpen = () =>{
      setOpen(!open)
    }

    //handle menu clicks
    const handleMenuClick = ()=> {
      setOpen(false)
    }



  return (
    <>
        <div className='mobile-nav'>
            <div className='mobile-nav-header'>
                {open ? (<HiMenuAlt1 size={30} className='mobile-nav-icon' onClick={handleOpen}/>) 
                : (<CgMenu size={30} className='mobile-nav-icon' onClick={handleOpen}/>)}
                <span className='mobile-nav-title'>My Portfolio App</span>
            </div>
            {open && (<div className='mobile-nav-menu'>
              <div className='nav-items'>
                              <div className='nav-item'>
                                  <div  className='nav-link'>
                                      <Link to='home' 
                                          spy={true}
                                          smooth={true} 
                                          offset={-100} 
                                          duration={10}
                                          onClick={handleMenuClick}>
                                          <IoHomeSharp />
                                              Home
                                      </Link>
                                  </div>
                                  <div  className='nav-link'>
                                      <Link to='about' 
                                          spy={true}
                                          smooth={true} 
                                          offset={-100} 
                                          duration={10}
                                          onClick={handleMenuClick}>
                                          <RiMessageFill />
                                          About
                                      </Link>
                                      
                                  </div>
                                  <div  className='nav-link'>
                                      <Link to='education' 
                                          spy={true}
                                          smooth={true} 
                                          offset={-100} 
                                          duration={10}
                                          onClick={handleMenuClick}>
                                          <FaSchool />
                                          Education
                                      </Link>
                                  </div>
                                  <div  className='nav-link'>
                                      <Link to='skills' 
                                          spy={true}
                                          smooth={true} 
                                          offset={-100} 
                                          duration={10}
                                          onClick={handleMenuClick}>
                                          <FaLightbulb />
                                          Skills
                                      </Link>                    
                                  </div>
                                  <div  className='nav-link'>
                                      <Link to='project' 
                                          spy={true}
                                          smooth={true} 
                                          offset={-100} 
                                          duration={10}
                                          onClick={handleMenuClick}>
                                          <IoCheckmarkDoneCircleSharp />
                                          Projects
                                      </Link>                   
                                  </div>
                                  <div  className='nav-link'>
                                      <Link to='work' 
                                          spy={true}
                                          smooth={true} 
                                          offset={-100} 
                                          duration={10}
                                          onClick={handleMenuClick}>
                                          <MdWork />
                                          Work Experience
                                      </Link> 
                                  </div>
                                  <div  className='nav-link'>
                                      <Link to='contact' 
                                          spy={true}
                                          smooth={true} 
                                          offset={-100} 
                                          duration={10}
                                          onClick={handleMenuClick}>
                                          <RiContactsFill />
                                          Contact
                                      </Link>
                                  </div>
                              </div>
                          </div>
            </div>
          )}
            
        </div>
    </>
  )
}

export default MobileNav