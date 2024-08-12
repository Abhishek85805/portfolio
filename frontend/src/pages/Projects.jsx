import React from 'react';
import ProjectComponent from '../components/ProjectComponent';
import fieldFusion from '../assets/fieldFusion.jpg';

function Projects({ projectsRef }) {
  const data = [
    {
      imageSrc: fieldFusion,
      name: "Field Fusion",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, incidunt ullam quia necessitatibus debitis accusamus dolores, obcaecati architecto cumque voluptas quasi labore!",
      tags: ["React", "Node.js", "MongoDB"],
      githubLink: "https://github.com/Abhishek85805/FieldFusion",
      liveLink: "https://github.com/Abhishek85805/FieldFusion"
    },
    {
      imageSrc: fieldFusion,
      name: "Field Fusion",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, incidunt ullam quia necessitatibus debitis accusamus dolores, obcaecati architecto cumque voluptas quasi labore!",
      tags: ["React", "Node.js", "MongoDB"],
      githubLink: "https://github.com/Abhishek85805/FieldFusion",
      liveLink: "https://github.com/Abhishek85805/FieldFusion"
    },
    {
      imageSrc: fieldFusion,
      name: "Field Fusion",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, incidunt ullam quia necessitatibus debitis accusamus dolores, obcaecati architecto cumque voluptas quasi labore!",
      tags: ["React", "Node.js", "MongoDB"],
      githubLink: "https://github.com/Abhishek85805/FieldFusion",
      liveLink: "https://github.com/Abhishek85805/FieldFusion"
    },
    {
      imageSrc: fieldFusion,
      name: "Field Fusion",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, incidunt ullam quia necessitatibus debitis accusamus dolores, obcaecati architecto cumque voluptas quasi labore!",
      tags: ["React", "Node.js", "MongoDB"],
      githubLink: "https://github.com/Abhishek85805/FieldFusion",
      liveLink: "https://github.com/Abhishek85805/FieldFusion"
    }
  ];

  return (
    <div ref={projectsRef} className='min-h-full pt-[8rem] flex flex-col items-center p-[1.2rem]'>
      <div>
        <h6 className='text-[#097FFF] font-extrabold mb-[1rem] md:px-[2rem]'>PORTFOLIO</h6>
        <h2 className='font-extrabold text-[1.5rem] mb-[6rem] md:px-[2rem]'>Each project is a unique piece of development</h2>
        {
          data.map((project, index) => <ProjectComponent index={index} project={project} key={index} />)
        }
      </div>
    </div>
  );
}

export default Projects;
