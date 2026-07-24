import React, { useEffect, useRef, useState } from 'react';
import { FaGraduationCap, FaMapMarkerAlt, FaCode } from 'react-icons/fa';

// 1. IMPORT YOUR IMAGE HERE (Make sure the spelling and capitalization match exactly)
import profileImg from '../assets/ashraf.png';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Scroll animation observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.15 }
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

    const quickFacts = [
        { icon: <FaGraduationCap />, text: "B.Tech in Computer Science at GN Group (AKTU) 2023-2027" },
        { icon: <FaMapMarkerAlt />, text: "Based in Delhi, India" },
        { icon: <FaCode />, text: "Specialized in MERN Stack & Java" },
    ];

    return (
        <section 
            id="about" 
            ref={sectionRef}
            className="relative w-full py-24 bg-transparent text-gray-900 dark:text-white overflow-hidden transition-colors duration-300"
        >
            {/* Background ambient glows */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-300 dark:bg-[#2563eb] rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-[128px] opacity-30 dark:opacity-20 pointer-events-none transition-colors duration-300"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200 dark:bg-[#38bdf8] rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-[128px] opacity-40 dark:opacity-10 pointer-events-none transition-colors duration-300"></div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                
                {/* Section Header */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    <h2 className="text-sm font-semibold text-[#38bdf8] tracking-widest uppercase mb-3">Discover</h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight transition-colors duration-300">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#2563eb]">Me</span>
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#38bdf8] to-[#2563eb] mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left Column: Image (Takes up 5 columns on large screens) */}
                    <div className={`lg:col-span-5 flex justify-center transform transition-all duration-1000 delay-300 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                        <div className="relative group w-72 h-72 md:w-96 md:h-96">
                            
                            {/* Animated Gradient Border Behind Image */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#38bdf8] to-[#2563eb] rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
                            
                            {/* Image Container */}
                            <div className="relative h-full w-full bg-gray-100 dark:bg-[#0c162d] rounded-2xl overflow-hidden border border-gray-300 dark:border-[#1e2d4a] transition-colors duration-300">
                                
                                {/* 2. USE THE IMPORTED VARIABLE HERE */}
                                <img 
                                    src={profileImg} 
                                    alt="Ashraf Mansoori" 
                                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                                />
                                
                                {/* Overlay effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#050914] via-transparent to-transparent opacity-60 transition-colors duration-300"></div>
                            </div>
                            
                            {/* Floating decorative elements */}
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/90 dark:bg-[#0c162d]/80 backdrop-blur-md rounded-xl border border-gray-200 dark:border-[#1e2d4a] p-4 flex flex-col items-center justify-center shadow-lg group-hover:-translate-y-2 transition-all duration-300">
                                <span className="text-[#38bdf8] font-bold text-2xl">MERN</span>
                                <span className="text-xs text-gray-600 dark:text-gray-400 font-medium transition-colors duration-300">Developer</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Text Content (Takes up 7 columns on large screens) */}
                    <div className={`lg:col-span-7 transform transition-all duration-1000 delay-500 ease-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
                        <h4 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300">
                            Hi, I'm <span className="text-[#38bdf8]">Ashraful Haq Aamir</span>
                        </h4>
                        
                        <div className="space-y-4 text-gray-700 dark:text-gray-400 text-base md:text-lg leading-relaxed transition-colors duration-300">
                            <p>
                                I am a passionate Computer Science undergraduate with a strong focus on Full-Stack Web Development. I love turning complex problems into beautiful, intuitive, and highly functional web applications.
                            </p>
                            <p>
                                Beyond building full-stack projects, I actively engage in advanced algorithmic problem-solving and software engineering coursework. I also have a deep interest in artificial intelligence, computer vision, and sharing my journey by creating digital tech education content.
                            </p>
                        </div>

                        {/* Quick Facts Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 mb-8">
                            {quickFacts.map((fact, index) => (
                                <div key={index} className="flex items-center gap-3 bg-gray-50 dark:bg-[#0c162d]/40 border border-gray-200 dark:border-[#1e2d4a]/50 p-3 rounded-lg hover:border-[#38bdf8] dark:hover:border-[#38bdf8]/50 transition-colors duration-300">
                                    <div className="text-[#38bdf8] text-xl">
                                        {fact.icon}
                                    </div>
                                    <span className="text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">{fact.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <a 
                                href="#projects" 
                                className="px-8 py-3.5 bg-gradient-to-r from-[#38bdf8] to-[#2563eb] text-white rounded-full font-bold hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] transition-all duration-300 transform hover:-translate-y-1"
                            >
                                View My Work
                            </a>
                            <a 
                                href="#contact" 
                                className="px-8 py-3.5 bg-transparent border-2 border-gray-300 dark:border-[#1e2d4a] text-gray-700 dark:text-gray-300 rounded-full font-bold hover:border-[#38bdf8] dark:hover:border-[#38bdf8] hover:text-[#38bdf8] dark:hover:text-[#38bdf8] hover:bg-blue-50 dark:hover:bg-transparent transition-all duration-300 transform hover:-translate-y-1"
                            >
                                Let's Connect
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default About;