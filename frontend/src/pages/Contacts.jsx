import React from 'react'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMapLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Contacts({contactsRef}) {
  return (
    <div ref={contactsRef} className='w-full flex flex-col items-center'>
      <div className='w-[50rem] flex flex-col items-start md:flex-col md:w-full md:items-start mb-[4rem] p-[1.2rem]'>
        <h6 className='text-[#097FFF] font-extrabold mb-[1.2rem] md:px-[2rem]'>CONTACT</h6>
        <h2 className='font-extrabold text-[1.5rem] mb-[2.5rem] md:px-[2rem]'>Don't be shy! Hit me up!</h2>
        <div className='flex md:flex-col md:px-[2rem]'>
          <div className='flex items-center mr-[6rem] md:mr-0 md:mb-[2rem]'>
            <FontAwesomeIcon icon={faMapLocation} className='text-[1.8rem] hover:scale-110 transition-all duration-200 ease-linear text-[#097FFF] mr-[2rem]'/>
            <div>
              <div className='font-bold'>Location</div>
              <div>Dehradun, India</div>
            </div>
          </div>
          <div className='flex items-center'>
            <FontAwesomeIcon icon={faEnvelope} className='text-[1.8rem] hover:scale-110 transition-all duration-200 ease-linear text-[#097FFF] mr-[2rem]'/>
            <div>
              <div className='font-bold'>Mail</div>
              <div><a href="mailto:abhishekchauhan85805@gmail.com">abhishekchauhan85805@gmail.com</a></div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-black w-full text-white h-[80px] flex justify-around items-center md:flex-col-reverse'>
        <p>Copyright &copy; 2023. All rights are reserved</p>
        <div>
          <a href="https://github.com/Abhishek85805"><FontAwesomeIcon icon={faGithub} className='text-[1.8rem] hover:scale-110 transition-all duration-200 ease-linear mr-[1.8rem]'/></a>
          <a href="https://github.com/Abhishek85805"><FontAwesomeIcon icon={faLinkedin} className='text-[1.8rem] hover:scale-110 transition-all duration-200 ease-linear'/></a>
        </div>
      </div>

    </div>
  )
}

export default Contacts