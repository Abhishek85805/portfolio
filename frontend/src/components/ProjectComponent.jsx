import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function ProjectComponent({ index, project }) {
  return (
    <div className={`w-[50rem] flex ${index%2===0 ? 'flex-row': 'flex-row-reverse'} justify-between items-start md:flex-col md:w-full md:items-center mb-[8rem]`} key={index}>
      <div className='w-[25rem] md:w-full md:h-[20rem] h-[16rem] mr-[3rem] md:mr-0 md:mb-[1.2rem] md:px-[2rem]'>
        <img src={project.imageSrc} alt={project.name} className='w-full h-full rounded-lg bg-center bg-cover' />
      </div>
      <div className='flex-1 min-h-[16rem] md:text-left md:p-[2rem]'>
        <h4 className='text-[#097FFF] font-extrabold mb-[1rem]'>{project.name}</h4>
        <p className='text-[#868686] mb-[1rem]'>{project.disc}</p>
        <div className='font-bold mb-[1rem]'>
          {
            project.tags.map((tag, index) => <span key={index} className='mr-[0.8rem]'>{tag}</span>)
          }
        </div>
        <div className='flex gap-[2rem]'>
          <div>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className='flex justify-center items-center'>
              <span className='mr-[0.5rem] cursor-pointer'>Code</span>
              <FontAwesomeIcon icon={faGithub} className='text-[1.5rem] hover:scale-110 transition-all duration-200 ease-linear' />
            </a>
          </div>
          <div>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className='flex justify-center items-center'>
              <span className='mr-[0.5rem] cursor-pointer'>Live Demo</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-[1.3rem] hover:scale-110 transition-all duration-200 ease-linear' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectComponent;
