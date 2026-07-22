import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const resolveLink = (link) => {
    if (!link || link === '#') return link;
    return link.startsWith('http://') || link.startsWith('https://') ? link : `https://${link}`;
};

const projectData = [
    {
        title: "Currency Converter",
        description: "A simple yet effective currency conversion application with a clean and intuitive user interface.",
        techStack: ["React", "JavaScript", "CSS3"],
        image: "currency.png", 
        githubLink: "https://github.com/AshrafMansoori/Currency",
        liveLink: "currencyconverter-ashraf321.vercel.app",
    },
    {
        title: "ShopHub",
        description: "A comprehensive full-stack capstone web application. Built with a robust backend architecture, seamless database integration, and deployed live on the Render platform.",
        techStack: ["React", "Node.js", "MongoDB", "Render"],
        image: "shophub.png",
        githubLink: "https://github.com/AshrafMansoori/Capstone-Project_Shop_hub",
        liveLink: "https://capstone-project-shop-hub.onrender.com",
    },
    {
        title: "Weather App",
        description: "A dynamic weather application that fetches real-time weather data from an API and displays it in a user-friendly interface.",
        techStack: ["MERN Stack", "Tailwind CSS", "Git"],
        image: "weather.png",
        githubLink: "https://github.com/AshrafMansoori/WeatherApp",
        liveLink: "https://weather-app-xi-ten-20.vercel.app/",
    },
    {
        title: "HealthCare Connect",
        description: "A full-stack healthcare management system that allows patients to book appointments, view medical records, and communicate with healthcare providers.",
        techStack: ["React", "JavaScript", "HTML/CSS"],
        image: "health.png",
        githubLink: "https://github.com/AshrafMansoori/HealthTracker",
        liveLink: "health-tracker-n1el.vercel.app",
    }
];

const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 } 
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section 
            id="projects" 
            ref={sectionRef}
            className="relative w-full py-24 bg-transparent text-gray-900 dark:text-white overflow-hidden transition-colors duration-300"
        >
            
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 right-0 w-[800px] h-[600px] bg-blue-200 dark:bg-[#1a3673] rounded-full blur-[180px] opacity-40 dark:opacity-15 z-0 pointer-events-none translate-x-1/3 -translate-y-1/2 transition-opacity duration-300"></div>
            
            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                
                {/* Section Header */}
                <div className={`text-center mb-20 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    <h2 className="text-sm font-semibold text-[#38bdf8] tracking-widest uppercase mb-3">Portfolio</h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight transition-colors duration-300">
                        Featured Work
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#38bdf8] to-[#2563eb] mx-auto mt-6 rounded-full"></div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {projectData.map((project, index) => (
                        <div 
                            key={index} 
                            className={`transform transition-all duration-1000 ease-out ${
                                isVisible 
                                    ? 'translate-y-0 opacity-100' 
                                    : 'translate-y-32 opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="flex flex-col h-full bg-white/60 dark:bg-[#0c162d]/40 backdrop-blur-md border border-gray-200 dark:border-[#38bdf8]/10 rounded-3xl p-6 hover:border-[#38bdf8] dark:hover:border-[#38bdf8]/60 transition-all duration-300 ease-out hover:bg-white/90 dark:hover:bg-[#0c162d]/70 hover:-translate-y-3 hover:scale-105 hover:shadow-[0_0_35px_rgba(56,189,248,0.4)] shadow-xl group">
                                
                                {/* Project Image Box */}
                                <div className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden mb-6 relative border border-gray-200 dark:border-[#1e2d4a]/50 group-hover:border-[#38bdf8]/30 dark:group-hover:border-[#38bdf8]/30 transition-colors duration-300">
                                    <div className="absolute inset-0 bg-[#38bdf8]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
                                    />
                                </div>

                                {/* Title & Description */}
                                <div className="flex-grow">
                                    <h4 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-[#38bdf8] transition-colors duration-300">
                                        {project.title}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-sm sm:text-base transition-colors duration-300">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tech Stack Pills */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.techStack.map((tech, techIndex) => (
                                        <span 
                                            key={techIndex} 
                                            className="px-3 py-1 bg-gray-50 dark:bg-[#050914] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-[#1e2d4a] rounded-lg text-xs font-medium group-hover:border-[#38bdf8] dark:group-hover:border-[#38bdf8]/50 group-hover:text-[#38bdf8] transition-colors duration-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons (GitHub & Live) */}
                                <div className="flex items-center gap-4 mt-auto">
                                    <a 
                                        href={resolveLink(project.liveLink)} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="flex-1 flex justify-center items-center gap-2 py-3 bg-gradient-to-r from-[#38bdf8] to-[#2563eb] text-white rounded-xl font-semibold text-sm hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:-translate-y-1 transition-all duration-300"
                                    >
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                    <a 
                                        href={resolveLink(project.githubLink)} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="flex-1 flex justify-center items-center gap-2 py-3 bg-transparent border border-gray-300 dark:border-[#1e2d4a] text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-sm hover:border-[#38bdf8] dark:hover:border-[#38bdf8] hover:text-[#38bdf8] dark:hover:text-[#38bdf8] hover:bg-blue-50 dark:hover:bg-[#38bdf8]/5 hover:-translate-y-1 transition-all duration-300"
                                    >
                                        <FaGithub className="text-lg" /> Source Code
                                    </a>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {/* View More on GitHub Button (Added Below Grid) */}
                <div className={`mt-16 text-center transform transition-all duration-1000 ease-out delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    <a 
                        href="https://github.com/AshrafMansoori" 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[#38bdf8] text-[#38bdf8] rounded-full font-bold uppercase tracking-wider hover:bg-[#38bdf8] hover:text-white dark:hover:text-[#050914] transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:-translate-y-1"
                    >
                        View More on GitHub <FaGithub className="text-xl" />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Projects;