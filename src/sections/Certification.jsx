import React, { useEffect, useRef, useState } from 'react';
import { FaEye } from 'react-icons/fa';

const certificateData = [
    {
        id: 1,
        title: "MERN Stack Development",
        issuer: "Microsoft & GNC",
        image: "mern.png", 
    },
    {
        id: 2,
        title: "Intro to Retrieval Augmented Generation",
        issuer: "IBM SkillsBuild",
        image: "rag.png",
    },
    {
        id: 3,
        title: "Techinertia 3.0 Hackathon",
        issuer: "Unstop",
        image: "unstop.png",
    },
    {
        id: 4,
        title: "Data Science Seminar",
        issuer: "Appwars Technologies",
        image: "appwars.png",
    },
    {
        id: 5,
        title: "Machine Learning using Python",
        issuer: "SkillCircle",
        image: "skillcircle.png",
    }
];

const Certifications = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Scroll animation observer for the section header
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

    // Duplicate the array so the infinite scroll loops seamlessly
    const duplicatedCertificates = [...certificateData, ...certificateData];

    return (
        <section 
            id="certifications" 
            ref={sectionRef}
            className="relative w-full py-24 bg-transparent text-gray-900 dark:text-white overflow-hidden scroll-mt-24 transition-colors duration-300"
        >
            {/* Embedded CSS for the Infinite Marquee Animation */}
            <style>
                {`
                    @keyframes scrollX {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); } 
                    }
                    .animate-marquee {
                        display: flex;
                        width: max-content;
                        animation: scrollX 50s linear infinite; 
                    }
                    /* Pause animation when user hovers over the track */
                    .animate-marquee:hover {
                        animation-play-state: paused;
                    }
                `}
            </style>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl mb-16">
                
                {/* Section Header */}
                <div className={`text-center transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    <h2 className="text-sm font-semibold text-[#38bdf8] tracking-widest uppercase mb-3">Milestones</h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight transition-colors duration-300">
                        Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#2563eb]">Achievements</span>
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#38bdf8] to-[#2563eb] mx-auto mt-6 rounded-full"></div>
                </div>
            </div>

            {/* Marquee Track Container (Full Width) */}
            <div className="relative w-full overflow-hidden flex">
                
                {/* Fade Gradients on the left and right edges */}
                <div className="absolute top-0 left-0 w-24 md:w-40 h-full bg-gradient-to-r from-white dark:from-[#050914] to-transparent z-10 pointer-events-none transition-colors duration-300"></div>
                <div className="absolute top-0 right-0 w-24 md:w-40 h-full bg-gradient-to-l from-white dark:from-[#050914] to-transparent z-10 pointer-events-none transition-colors duration-300"></div>

                {/* The Scrolling Element */}
                <div className="animate-marquee py-6">
                    {duplicatedCertificates.map((cert, index) => (
                        <div 
                            key={`${cert.id}-${index}`} 
                            /* Decreased card width: w-[280px] md:w-[360px] */
                            className="w-[280px] md:w-[360px] mx-3 md:mx-4 flex-shrink-0 group"
                        >
                            <div className="flex flex-col h-full bg-white/60 dark:bg-[#0c162d]/40 backdrop-blur-md border border-gray-200 dark:border-[#1e2d4a]/50 rounded-2xl p-5 md:p-6 hover:border-[#38bdf8] dark:hover:border-[#38bdf8]/60 transition-all duration-300 hover:bg-white/90 dark:hover:bg-[#0c162d]/80 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]">
                                
                                {/* Image Container - Decreased Height: h-48 md:h-64 */}
                                <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden relative border border-gray-200 dark:border-[#1e2d4a]/50 bg-gray-50 dark:bg-black/40 flex items-center justify-center transition-colors duration-300">
                                    
                                    <img 
                                        src={cert.image} 
                                        alt={cert.title} 
                                        className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500 p-1"
                                    />

                                    {/* Hover Overlay with View Button */}
                                    <div className="absolute inset-0 bg-white/80 dark:bg-[#050914]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm z-10">
                                        <a 
                                            href={cert.image} 
                                            target="_blank" 
                                            rel="noreferrer"
                                            className="px-5 py-2.5 bg-[#38bdf8] text-gray-900 dark:text-[#050914] rounded-full font-bold text-sm flex items-center gap-2 hover:bg-blue-600 dark:hover:bg-white hover:text-white dark:hover:text-[#050914] transition-colors duration-300 hover:scale-105 transform shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                                        >
                                            <FaEye className="text-base" /> View Full
                                        </a>
                                    </div>
                                </div>

                                {/* Text Details */}
                                <div className="mt-4 text-center">
                                    <h4 className="text-base md:text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-[#38bdf8] transition-colors duration-300 line-clamp-1">
                                        {cert.title}
                                    </h4>
                                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-1 font-medium transition-colors duration-300">
                                        {cert.issuer}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;