import React from 'react'
import {arrow} from "../assets/icons"
import { Link } from 'react-router-dom'

const InfoBox  = ({text, link, btnText}) =>(
    <div className="infoBox sm:text-xl sm:leading-snug text-center neo-brutalism-blue pb-10 pt-4 px-8 text-white mx-5">
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
    1 : (<h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">Hi, I am <span className='font-semibold'>Sameer 👋</span>
    <br />
    A Computer Information System Engineer From Pakistan
    </h1>),
    2 : (
    <InfoBox 
        text ="Worked with Many Companies and picked up many Skills along the way"
        link = "/about"
        btnText = "Learn More"
    />),
    3 : (<InfoBox 
        text ="Led Multiple Projects to Success over the years. Curious about the impact?"
        link = "/projects"
        btnText = "Visit my portfolio"
    />),
    4 : (<InfoBox 
        text ="Need a project done or looking for a dev? I am just a few seconds away"
        link = "/contact"
        btnText = "Let's talk"
    />)
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null
}

export default HomeInfo
