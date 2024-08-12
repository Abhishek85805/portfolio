import React from 'react'
import aboutPic from '../assets/about.jpg';

function About({aboutRef}) {
  return (
    <div ref={aboutRef} className='min-h-full w-full flex justify-center items-center'>
        <div className='w-[50rem] flex flex-row justify-between items-start p-[1.2rem] md:flex-col md:w-full md:items-center md:ju'>
            <div className=' w-[16rem] md:w-full md:h-[20rem] h-[16rem] mr-[3rem] md:mr-0 md:mb-[2rem] md:px-[2rem]'>
                <img src={aboutPic} alt="About pic" className='w-full h-full rounded-lg bg-cover bg-center'/>
            </div>
            <div className='flex-1 min-h-[16rem] md:text-left md:p-[2rem]'>
                <h6 className='text-[#097FFF] font-extrabold'>About Me</h6>
                <h2 className='font-extrabold text-[1.5rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                <p className='text-[#868686]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi maxime distinctio dolores adipisci mollitia! Facilis debitis qui perferendis eos aperiam quia aliquid sed placeat pariatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nihil totam sunt cum illum. </p>
            </div>
        </div>
    </div>
  )
}

export default About