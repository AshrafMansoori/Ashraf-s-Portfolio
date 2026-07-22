import React, { useEffect, useRef, useState } from 'react';
import { 
    SiReact, SiJavascript, SiNodedotjs, SiMongodb, 
    SiTailwindcss, SiExpress, SiMysql, SiTensorflow, SiRender,
    SiPython, SiC, SiCplusplus
} from 'react-icons/si';
import { 
    FaJava, FaGitAlt, FaBrain, FaHtml5, FaCss3Alt, 
    FaRobot, FaProjectDiagram, FaPenNib, FaVideo, FaServer 
} from 'react-icons/fa';
import { BiCodeAlt, BiNetworkChart } from 'react-icons/bi';

const skillCategories = [
    {
        title: "Frontend Development",
        description: "Building responsive, interactive user interfaces.",
        skills: [
            { name: "React.js", color: "text-[#61DAFB]", shadow: "group-hover/skill:drop-shadow-[0_0_8px_#61DAFB]", icon: <SiReact /> },
            { name: "JavaScript", color: "text-[#F7DF1E]", shadow: "group-hover/skill:drop-shadow-[0_0_8px_#F7DF1E]", icon: <SiJavascript /> },
            { name: "Tailwind", color: "text-[#38bdf8]", shadow: "group-hover/skill:drop-shadow-[0_0_8px_#38bdf8]", icon: <SiTailwindcss /> },
            { name: "HTML5", color: "text-[#E34F26]", shadow: "group-hover/skill:drop-shadow-[0_0_8px_#E34F26]", icon: <FaHtml5 /> },
            { name: "CSS3", color: "text-[#1572B6]", shadow: "group-hover/skill:drop-shadow-[0_0_8px_#1572B6]", icon: <FaCss3Alt /> }
        ]
    },
    {
        title: "Backend & Databases",
        description: "Architecting robust server-side logic and managing data.",
        skills: [
            { name: "Node.js", color: "text-[#339933]", shadow: "group-hover/skill:drop-shadow-[0_0_8px_#339933]", icon: <SiNodedotjs /> },
            // Changed Express color so it's visible in light mode
            { name: "Express", color: "text-gray-500 dark:text-gray-300", shadow: "group-hover/skill:drop-shadow-[0_0_8px_#9CA3AF]", icon: <SiExpress /> },
            { name: "Python", color: "text-[#3776AB]", shadow: "group-hover/skill:drop-shadow-[0_0_8px_#3776AB]", icon: <SiPython /> },
            { name: "Java", color: "text-[#5382a1]", shadow: "group-hover/skill:drop-shadow-[0_0_8px_#5382a1]", icon: <FaJava /> },
            { name: "MongoDB", color: "text-[#47A248]", shadow: "group-hover/skill:drop-shadow-[0_0_8px_#47A248]", icon: <SiMongodb /> },
            { name: "SQL", color: "text-[#4479A1]", shadow: "group-hover/skill:drop-shadow-[0_0_8px_#4479A1]", icon: <SiMysql /> }
        ]
    },
    {
        title: "AI & Computer Vision",
        description: "Integrating intelligent features and visual processing.",
        skills: [
            { name: "TensorFlow.js", color: "text-[#FF6F00]", shadow: "group-hover/skill:drop-shadow-[0_0_8px_#FF6F00]", icon: <SiTensorflow /> },
            { name: "Prompt Eng.", color: "text-[#38bdf8] dark:text-[#a5d6ff]", shadow: "group-hover/skill:drop-shadow-[0_0_8px_#a5d6ff]", icon: <FaRobot /> },
            { name: "Vision Apps", color: "text-[#2563eb] dark:text-[#38bdf8]", shadow: "group-hover/skill:drop-shadow-[0_0_8px_#38bdf8]", icon: <BiNetworkChart /> }
        ]
    },
    {
        title: "Core Computer Science",
        description: "Strong foundation in algorithms and architecture.",
        skills: [
            { name: "C++", color: "text-[#00599C]", shadow: "group-hover/skill:drop-shadow-[0_0_8px_#00599C]", icon: <SiCplusplus /> },
            { name: "C", color: "text-[#A8B9CC]", shadow: "group-hover/skill:drop-shadow-[0_0_8px_#A8B9CC]", icon: <SiC /> },
            { name: "DSA", color: "text-[#ff7b72]", shadow: "group-hover/skill:drop-shadow-[0_0_8px_#ff7b72]", icon: <FaBrain /> },
            { name: "OOP", color: "text-[#2563eb] dark:text-[#a5d6ff]", shadow: "group-hover/skill:drop-shadow-[0_0_8px_#a5d6ff]", icon: <BiCodeAlt /> },
            { name: "SDLC", color: "text-[#27c93f]", shadow: "group-hover/skill:drop-shadow-[0_0_8px_#27c93f]", icon: <FaProjectDiagram /> },
            // Changed Networks color so it's visible in light mode
            { name: "Networks", color: "text-gray-500 dark:text-gray-400", shadow: "group-hover/skill:drop-shadow-[0_0_8px_#9CA3AF]", icon: <FaServer /> }
        ]
    },
    {
        title: "Tools & Deployment",
        description: "Version control and pushing applications to production.",
        skills: [
            { name: "Git/GitHub", color: "text-[#F05032]", shadow: "group-hover/skill:drop-shadow-[0_0_8px_#F05032]", icon: <FaGitAlt /> },
            { name: "Render", color: "text-[#46E3B7]", shadow: "group-hover/skill:drop-shadow-[0_0_8px_#46E3B7]", icon: <SiRender /> },
            { name: "REST APIs", color: "text-[#2563eb] dark:text-[#38bdf8]", shadow: "group-hover/skill:drop-shadow-[0_0_8px_#38bdf8]", icon: <BiCodeAlt /> }
        ]
    },
    {
        title: "Technical Communication",
        description: "Researching, writing, and educating on tech concepts.",
        skills: [
            { name: "Tech Writing", color: "text-[#eab308] dark:text-[#ffbd2e]", shadow: "group-hover/skill:drop-shadow-[0_0_8px_#ffbd2e]", icon: <FaPenNib /> },
            { name: "Video Ed.", color: "text-[#ef4444] dark:text-[#ff5f56]", shadow: "group-hover/skill:drop-shadow-[0_0_8px_#ff5f56]", icon: <FaVideo /> }
        ]
    }
];

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Intersection Observer to trigger EVERY time you scroll into view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Toggles true when in view, false when out of view
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 } // Triggers when 10% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Cleanup observer on unmount
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section id="skills" ref={sectionRef} className="relative w-full py-24 bg-transparent text-gray-900 dark:text-white overflow-hidden border-t border-gray-200 dark:border-[#1e2d4a]/30 scroll-mt-24 transition-colors duration-300">
            
            {/* Background Ambient Glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-200 dark:bg-[#1a3673] rounded-full blur-[180px] opacity-40 dark:opacity-15 z-0 pointer-events-none transition-opacity duration-300"></div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                
                {/* Section Header */}
                <div className={`text-center mb-20 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    <h2 className="text-sm font-semibold text-[#38bdf8] tracking-widest uppercase mb-3">My Arsenal</h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight transition-colors duration-300">
                        Technologies & Capabilities
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#38bdf8] to-[#2563eb] mx-auto mt-6 rounded-full"></div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                    {skillCategories.map((category, index) => (
                        /* Outer DIV handles ONLY the scroll-in entrance delay */
                        <div 
                            key={index} 
                            className={`transform transition-all duration-1000 ease-out ${
                                isVisible 
                                    ? 'translate-y-0 opacity-100' 
                                    : 'translate-y-32 opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            {/* Inner DIV handles the Hover Effects (Scale, Glow, Lift) Instantly! */}
                            <div className="flex flex-col h-full bg-white/60 dark:bg-[#0c162d]/40 backdrop-blur-md border border-gray-200 dark:border-[#38bdf8]/10 rounded-3xl p-8 hover:border-[#38bdf8] dark:hover:border-[#38bdf8]/60 transition-all duration-300 ease-out hover:bg-white/90 dark:hover:bg-[#0c162d]/70 hover:-translate-y-3 hover:scale-105 hover:shadow-[0_0_35px_rgba(56,189,248,0.4)] shadow-xl cursor-default group">
                                
                                {/* Card Header */}
                                <div className="mb-8">
                                    <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-[#38bdf8] transition-colors duration-300">
                                        {category.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
                                        {category.description}
                                    </p>
                                </div>

                                {/* Large Interactive Skill Blocks */}
                                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-4 mt-auto">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div 
                                            key={skillIndex}
                                            className="group/skill flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-[#050914]/90 border border-gray-200 dark:border-[#38bdf8]/20 rounded-2xl hover:bg-blue-50 dark:hover:bg-[#111f3d] hover:border-[#38bdf8] dark:hover:border-[#38bdf8]/80 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(56,189,248,0.22)] scale-100"
                                        >
                                            <div className={`text-4xl sm:text-5xl mb-3 ${skill.color} ${skill.shadow} transition-all duration-300 ease-out group-hover/skill:scale-110`}>
                                                {skill.icon}
                                            </div>
                                            <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 group-hover/skill:text-gray-900 dark:group-hover/skill:text-gray-100 transition-colors duration-300 text-center">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;