import React from 'react'
import { faLinkedin, faGithub, faHtml5, faCss3Alt, faSquareJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import profileImage from '../assets/passportSizePhoto.jpeg'

function HomeComponent() {
  return (
    <div className='w-[45rem] p-[2rem] md:w-full md:mt-[2.5rem] md:p-[2.2rem]'>
        <div className='flex justify-between w-full md:items-center md:flex-col md:mb-[1.4rem]'>
            <div className='w-[65%] md:w-full md:mb-[1.4rem]'>
                <h1 className='text-[2.5rem] font-extrabold md:text-center'>Software Developer</h1>
                <p className='text-[#868686] text-[1rem] mb-[1rem] md:text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero incidunt enim sapiente facere accusantium aspernatur?</p>
                <div className='md:text-center'>
                    <a href="https://www.linkedin.com/in/abhishek-chauhan-b0801622a/">
                        <FontAwesomeIcon icon={faLinkedin} className='text-[1.8rem] mr-[0.8rem] hover:scale-110 transition-all duration-200 ease-linear' />
                    </a>
                    <a href="https://github.com/Abhishek85805"><FontAwesomeIcon icon={faGithub} className='text-[1.8rem] hover:scale-110 transition-all duration-200 ease-linear'/></a>
                </div>
            </div>
            <div className='w-[15rem] h-[15rem] rounded-full shadow-lg border-black border-2'>
                <img src={profileImage} alt="profilePic" className='w-[15rem] h-[15rem] rounded-full object-cover'/>
            </div>
        </div>
        <div className='flex gap-[1.2rem] md:justify-center'>
            <div className='font-semibold text-[1.2rem]'>Tech Stack |</div>
            <div className='text-[1.5rem] flex flex-row gap-[1rem]'>
                <FontAwesomeIcon icon={faHtml5} className='hover:scale-110 transition-all duration-200 ease-linear'/>
                <FontAwesomeIcon icon={faCss3Alt} className='hover:scale-110 transition-all duration-200 ease-linear'/>
                <FontAwesomeIcon icon={faSquareJs} className='hover:scale-110 transition-all duration-200 ease-linear'/>
                <FontAwesomeIcon icon={faReact} className='hover:scale-110 transition-all duration-200 ease-linear'/>
            </div>
        </div>
    </div>
  )
}

export default HomeComponent