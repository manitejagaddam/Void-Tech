import React, { useState } from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, category, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative overflow-hidden rounded-xl group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/70 to-transparent flex flex-col justify-end p-6">
        <div className={`transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-90'}`}>
          <div className="text-blue-400 text-sm font-semibold mb-2">{category}</div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className={`text-blue-100/80 text-sm transition-all duration-300 ${isHovered ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'} overflow-hidden`}>
            {description}
          </p>
          <button className={`mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-sm transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      title: "Quantum Analytics Platform",
      category: "Data Analytics",
      description: "A comprehensive data analytics platform for enterprise clients, featuring real-time insights and predictive modeling capabilities."
    },
    {
      image: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
      title: "NexusConnect IoT Ecosystem",
      category: "Internet of Things",
      description: "An integrated IoT solution for smart manufacturing facilities, improving efficiency and reducing downtime through predictive maintenance."
    },
    {
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      title: "Secure Cloud Infrastructure",
      category: "Cloud Computing",
      description: "A highly secure and scalable cloud infrastructure solution for financial institutions with strict compliance requirements."
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Orbitron',sans-serif] tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 inline-block">
            Our Portfolio
          </h2>
          <p className="text-blue-100/90 text-lg">
            Explore our recent projects and see how we've helped businesses achieve their goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              image={project.image}
              title={project.title}
              category={project.category}
              description={project.description}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-transparent hover:bg-blue-900/50 text-white border border-blue-500 px-6 py-3 rounded-full font-semibold transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;