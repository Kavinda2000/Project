import React from 'react'
import './WorkEx.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaReact } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const WorkEx = () => {
  return (
    <>
       <div className='container WorkEx' id='work'>
            <div className='work-exp'>
                <Fade>

                <h2 className="WorkEx-heading">
                    WORK EXPERIENCE DETAILS
                <hr />
                </h2>
                </Fade>
                <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                     contentStyle={{ background: 'white', color: 'white' }}
                    contentArrowStyle={{ borderRight: '7px solid white' }}
                    date="2018-2019"
                    iconStyle={{ background: '#7e057e', color: 'white' }}
                    icon={<FaReact />}
                    >
                    <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
                    <h5 className="vertical-timeline-element-subtitle" >XYZ, Pvt Ltd</h5>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                     contentStyle={{ background: 'white', color: 'white' }}
                    contentArrowStyle={{ borderRight: '7px solid white' }}
                    date="2019-Present"
                    iconStyle={{ background: '#7e057e', color: 'white' }}
                    icon={<FaFileCode />}
                    >
                    <h3 className="vertical-timeline-element-title">MERN Stack Developer</h3>
                    <h5 className="vertical-timeline-element-subtitle" >GG & PG, Pvt</h5>
                </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
       </div>
    </>
  )
}

export default WorkEx