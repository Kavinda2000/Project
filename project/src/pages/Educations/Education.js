import React from 'react'
import './Education.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchool } from "react-icons/io5";
import { Fade } from "react-awesome-reveal";


const Education = () => {
    return (
    <>
        
        <div className='container education' id='education'>
            <Fade>
            <h2 className="education-heading">
                EDUCATION DETAILS
            </h2>
            </Fade>  
            <hr />
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element-work"
                    contentStyle={{ background: 'white', color: 'white' }}
                    contentArrowStyle={{ borderRight: '7px solid white' }}
                    date="2019-2023"
                    iconStyle={{ background: '#7e057e', color: 'white' }}
                    icon={<IoSchool />}
                    >
                    <h3 className="vertical-timeline-element-title">Electrical and Information Undergraduate</h3>
                    <h5 className="vertical-timeline-element-subtitle" >UOR, SL</h5>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element-work"
                     contentStyle={{ background: 'white', color: 'white' }}
                    contentArrowStyle={{ borderRight: '7px solid white' }}
                    date="2023-present"
                    iconStyle={{ background: '#7e057e', color: 'white'}}
                    icon={<IoSchool />}
                    >
                    <h3 className="vertical-timeline-element-title">BCA</h3>
                    <h5 className="vertical-timeline-element-subtitle" >IIT Mumbai. IN</h5>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
        
    </>
  )
}

export default Education