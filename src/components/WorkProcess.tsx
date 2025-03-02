import React from 'react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, isLast = false }) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-blue-900 border-2 border-blue-500 flex items-center justify-center text-xl font-bold text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10">
          {number}
        </div>
        {!isLast && (
          <div className="h-24 w-0.5 bg-gradient-to-b from-blue-500 to-blue-900/30 mt-2"></div>
        )}
      </div>
      <div className="ml-6 pb-12">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-blue-100/80">{description}</p>
      </div>
    </div>
  );
};

const WorkProcess: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Discovery & Research",
      description: "We begin by understanding your business, goals, and challenges through in-depth research and stakeholder interviews."
    },
    {
      number: 2,
      title: "Strategy & Planning",
      description: "Based on our findings, we develop a comprehensive strategy and roadmap tailored to your specific needs and objectives."
    },
    {
      number: 3,
      title: "Design & Development",
      description: "Our team of experts designs and develops innovative solutions using cutting-edge technologies and methodologies."
    },
    {
      number: 4,
      title: "Testing & Refinement",
      description: "We rigorously test all aspects of the solution to ensure quality, performance, and security meet our high standards."
    },
    {
      number: 5,
      title: "Deployment & Launch",
      description: "Once approved, we carefully deploy the solution and provide comprehensive training and documentation."
    },
    {
      number: 6,
      title: "Ongoing Support",
      description: "Our relationship doesn't end at launch. We provide continuous support, maintenance, and optimization services."
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxZTNhOGEiIHN0cm9rZS13aWR0aD0iMC41Ii8+CiAgPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Orbitron',sans-serif] tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 inline-block">
            How We Work
          </h2>
          <p className="text-blue-100/90 text-lg">
            Our proven methodology ensures successful outcomes for every project we undertake.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <ProcessStep 
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;