import React from 'react';
import ProjectComponent from '../components/ProjectComponent';
import fieldFusion from '../assets/fieldFusion.jpg';
import movieRecommenderSystem from '../assets/movieRecommenderSystem.jpg'
import secureCompact from '../assets/secureCompact.jpg';
import chatApp from '../assets/chatApp.jpg'

function Projects({ projectsRef }) {
  const data = [
    {
      imageSrc: fieldFusion,
      name: "Field Fusion",
      disc: "Field Fusion is a football ground booking platform built with React, Tailwind CSS, Express, and MongoDB, offering real-time availability updates. Administrators can efficiently manage bookings with comprehensive validations, ensuring a seamless user experience.",
      tags: ["React", "Tailwind", "JavaScript", "Node.js", "MongoDB"],
      githubLink: "https://github.com/Abhishek85805/FieldFusion",
      liveLink: "https://github.com/Abhishek85805/FieldFusion"
    },
    {
      imageSrc: movieRecommenderSystem,
      name: "Movie Recommender System",
      disc: "Created a movie recommender system in Python that uses text-based features and cosine similarity to suggest similar films based on genres, keywords, cast, and crew.",
      tags: ["NLP", "Python", "Scikit-Learn"],
      githubLink: "https://github.com/Abhishek85805/MovieRecommenderSystem",
      liveLink: "https://github.com/Abhishek85805/MovieRecommenderSystem"
    },
    {
      imageSrc: secureCompact,
      name: "Secure Compact",
      disc: "Developed SecureCompact in C++ with Huffman coding for compression and Caesar cipher for encryption. Implemented secure storage, encrypted zip files, and password management, demonstrating expertise in data security.",
      tags: ["C++", "Huffman Coding", "File Compression"],
      githubLink: "https://github.com/Abhishek85805/Minor-Project",
      liveLink: "https://github.com/Abhishek85805/Minor-Project"
    },
    {
      imageSrc: chatApp,
      name: "Chat App",
      disc: "Built a real-time chat application using the MERN stack and Socket.IO, providing instant messaging, live updates, and interactive features for seamless user communication.",
      tags: ["React", "Tailwind", "Socket.io", "Node.js", "MongoDB"],
      githubLink: "https://github.com/Abhishek85805/Chat-Application",
      liveLink: "https://github.com/Abhishek85805/Chat-Application"
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
