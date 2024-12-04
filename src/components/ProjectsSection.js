import React from 'react';
import Card from './Card';
import '../App.css';

const Projects = () => {
  const projectList = [
    { id: 1, title: 'Project One', description: 'A cool project.', imageUrl: 'path/to/image1.png' },
    { id: 2, title: 'Project Two', description: 'Another cool project.', imageUrl: 'path/to/image2.png' },
    { id: 3, title: 'Project Three', description: 'More cool stuff.' }, // No imageUrl provided
    { id: 4, title: 'Project Four', description: 'Even more cool stuff.', imageUrl: 'path/to/image4.png' },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectList.map(project => (
          <Card key={project.id} title={project.title} description={project.description} imageUrl={project.imageUrl} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
