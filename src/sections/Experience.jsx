import React, { useState, useEffect, useRef } from 'react';
import { FaRocket } from 'react-icons/fa';

const Experience = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Scroll animation observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.15 } // Triggers when 15% of the section is visible
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

    const experiences = [
        {
            id: 1,
            role: "Google Student Ambassador",
            company: "Google",
            duration: "March - Present",
            logo: "google.png",
            description: [
                "Evangelizing Google technologies and fostering a strong developer culture on campus.",
                "Organizing technical workshops and hackathons for student developers.",
                "Acting as a liaison between the university and Google's developer ecosystem."
            ]
        },
        {
            id: 2,
            role: "Software Development Intern",
            company: "Technical Crooks",
            duration: "May - July",
            logo: "tc.png",
            description: [
                "Collaborated on building robust web applications and optimizing frontend performance.",
                "Wrote clean, maintainable code and participated in daily stand-ups and code reviews.",
                "Assisted in debugging and deploying new features to production environments."
            ]
        }
    ];

    return (
        <section id="experience" ref={sectionRef} className="py-24 bg-transparent relative overflow-hidden scroll-mt-24 transition-colors duration-300">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-200 dark:bg-[#1a3673] rounded-full blur-[180px] opacity-40 dark:opacity-20 pointer-events-none transition-colors duration-300"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight transition-colors duration-300">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#2563eb]">Experience</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg transition-colors duration-300">
                        My professional journey, roles, and the communities I actively contribute to.
                    </p>
                </div>

                {/* Horizontal Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    {experiences.map((exp, index) => (
                        <div 
                            key={exp.id} 
                            className={`w-full p-8 bg-white/60 dark:bg-[#0c162d]/60 backdrop-blur-md border border-gray-200 dark:border-[#1e2d4a] rounded-2xl group transition-all duration-500 ease-out hover:border-[#38bdf8] dark:hover:border-[#38bdf8]/50 hover:bg-white/90 dark:hover:bg-[#0c162d]/80 hover:shadow-[0_10px_40px_rgba(56,189,248,0.15)] hover:-translate-y-2 flex flex-col ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                            style={{ transitionDelay: `${index * 200 + 100}ms` }}
                        >
                            
                            {/* Card Header */}
                            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-200 dark:border-[#1e2d4a]/50 transition-colors duration-300">
                                <div className="flex items-center gap-5">
                                    {/* Company Logo */}
                                    <div className="w-16 h-16 rounded-xl bg-gray-50 dark:bg-white/5 p-2 border border-gray-200 dark:border-[#1e2d4a] flex items-center justify-center overflow-hidden group-hover:scale-110 group-hover:border-[#38bdf8] dark:group-hover:border-[#38bdf8]/50 transition-all duration-300 shrink-0">
                                        <img 
                                            src={exp.logo} 
                                            alt={`${exp.company} logo`} 
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-white transition-colors duration-300">{exp.role}</h3>
                                        <p className="text-blue-600 dark:text-[#38bdf8] font-medium text-base mt-1 transition-colors duration-300">{exp.company}</p>
                                    </div>
                                </div>
                                
                                {/* Duration Badge */}
                                <div className="inline-flex items-center justify-center px-4 py-2 bg-gray-100 dark:bg-[#1e2d4a]/50 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-full border border-gray-200 dark:border-[#1e2d4a] whitespace-nowrap w-fit transition-colors duration-300">
                                    {exp.duration}
                                </div>
                            </div>

                            {/* Job Description List */}
                            <ul className="space-y-4 text-gray-700 dark:text-gray-400 flex-grow transition-colors duration-300">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#38bdf8] shrink-0 shadow-[0_0_8px_rgba(56,189,248,0.8)]"></span>
                                        <span className="leading-relaxed text-sm md:text-base group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors duration-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Open to Opportunities Banner */}
                <div 
                    className={`mt-16 w-full transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} 
                    style={{ transitionDelay: '500ms' }}
                >
                    <div className="relative overflow-hidden p-8 md:p-10 bg-gradient-to-r from-blue-50 to-white dark:from-[#0c162d] dark:to-[#111f3d] border border-blue-200 dark:border-[#38bdf8]/30 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_0_30px_rgba(56,189,248,0.1)] group w-full transition-colors duration-300">
                        
                        {/* Shimmer Effect */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 dark:via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>

                        <div className="flex items-center gap-6 z-10">
                            <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-[#38bdf8]/20 flex items-center justify-center border border-blue-200 dark:border-[#38bdf8]/30 shrink-0 transition-colors duration-300">
                                <FaRocket className="text-3xl text-blue-500 dark:text-[#38bdf8] animate-pulse transition-colors duration-300" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Open to New Opportunities!</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl transition-colors duration-300">
                                    Currently seeking software engineering internships and full-time roles. Let's build something amazing together.
                                </p>
                            </div>
                        </div>
                        
                        <a 
                            href="#contact" 
                            className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-bold text-white bg-gradient-to-r from-[#38bdf8] to-[#2563eb] rounded-full transition-all duration-200 ease-out hover:scale-105 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] active:scale-95 whitespace-nowrap z-10 text-lg"
                        >
                            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-300 ease-out"></span>
                            Hire Me
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;