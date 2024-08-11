import { faBars, faX} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

function Navbar() {
    const [crossIcon, setCrossIcon] = useState(false);
  return (
    <div className='flex flex-row justify-between items-center px-[2rem] py-[1.5rem] h-[80px] w-full fixed md:bg-white shadow-sm'>
        <h1 className='font-extrabold text-[1.2rem]'>Abhishek.dev</h1>
        <div className={`flex flex-row list-none gap-[1rem] md:fixed md:w-full md:top-[80px] md:left-0 md:flex-col md:items-center ${crossIcon?'md:flex':'md:hidden'} md:bg-white md:pb-3 md:shadow-lg font-bold`}>
            <li className='hover:scale-110 transition-all duration-200 ease-linear'>Home</li>
            <li className='hover:scale-110 transition-all duration-200 ease-linear'>About</li>
            <li className='hover:scale-110 transition-all duration-200 ease-linear'>Projects</li>
            <li className='hover:scale-110 transition-all duration-200 ease-linear'>Contact</li>
        </div>
        <FontAwesomeIcon icon={faBars} 
        className={`text-[1.3rem] hidden ${crossIcon?'md:hidden':'md:block'}`}
        onClick={()=>setCrossIcon(true)}
        />
        <FontAwesomeIcon icon={faX} 
        className={`text-[1.3rem] hidden ${crossIcon? 'md:block': 'md:hidden'}`}
        onClick={()=>setCrossIcon(false)}
        />
    </div>
  )
}

export default Navbar