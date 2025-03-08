import React,{useState} from 'react'
import './contact.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";
import { toast, ToastContainer} from 'react-toastify'
import axios from 'axios';

const Contact = () => {
    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
  
    //handle submit button
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        if (!name || !email || !msg) {
          toast.error("PLease Provide all fields");
        }
        const res = await axios.post("http://localhost:8080/api/v1/portfolio/sendEmail", {
          name,
          email,
          msg,
        });
        //validation success
        if (res.data.success) {
          toast.success(res.data.message);
          setname("");
          setEmail("");
          setMsg("");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
  return (  
    <>
       <Fade duration={500}>
        <div className=' contact' id='contact'>
            <div className='card card0 border-0'>
                <div className='row'>
                    <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                        <div className='card1'>
                            <div className='row border-line'>
                                <img src='https://www.aeccglobal.lk/images/2021/06/08/contact-us-copy-100.jpg' alt='contact' className='image'/>
                            </div>
                        </div>
                    </div>
                        <div className='col-lg-6 col-md-6'>
                            <div className='card d-flex card border-0 px-4 py-3'>
                                <div className='row'>
                                    <div className='row'>
                                    <h6>Contact With 
                                        <a href="https://www.linkedin.com/in/kavinda-dilshan-57a610241/" target="_blank" rel="noopener noreferrer" style={{ cursor: "pointer" }}>
                                            <FaLinkedin color="blue" size={25} className="ms-4" />
                                        </a>
                                        <a href="https://github.com/Kavinda2000" target="_blank" rel="noopener noreferrer" style={{ cursor: "pointer" }}>
                                            <FaGithub color="black" size={25} className="ms-3" />
                                        </a>
                                        <a href="https://www.facebook.com/kavinda.dilshan.3766/" target="_blank" rel="noopener noreferrer" style={{ cursor: "pointer" }}>
                                            <FaFacebook color="blue" size={25} className="ms-3" />
                                        </a>
                                    </h6>
                                    </div>
                                
                                <div className='row px-3 mb-4'>
                                    <div className='line'/>
                                        <small className='or text-center'>OR</small>
                                    <div className='line'/> 
                                </div>
                                <div className='row px-3'>
                                    <input type='text' 
                                    name='name' 
                                    placeholder='Enter Your Name?' 
                                    className='mb-3' 
                                    value={name}
                                    onChange={(e) => setname(e.target.value)}/>
                                    
                                </div>
                                <div className='row px-3'>
                                    <input type='email' 
                                    name='email' 
                                    placeholder='Enter Your Email Address?' 
                                    className='mb-3' 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <div className='row px-3'>
                                    <textarea type='text' 
                                    name='msg' 
                                    placeholder='Write Your Message?' 
                                    className='mb-3' 
                                    value={msg}
                                    onChange={(e) => setMsg(e.target.value)}/>
                                </div>
                                <div className='row px-3'>
                                    <button className='button'  onClick={handleSubmit}>
                                        SEND MESSAGE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Fade>
    </>
  )
}

export default Contact
