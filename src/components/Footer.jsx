import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <FaGithub />, link: "https://github.com/AshrafMansoori", label: "GitHub" },
        { icon: <FaLinkedin />, link: "https://linkedin.com/", label: "LinkedIn" },
        { icon: <FaTwitter />, link: "https://twitter.com/", label: "Twitter" },
        { icon: <FaInstagram />, link: "https://www.instagram.com/ashrafmansoori_1126?igsh=MXZtcDRoOGpwZHpsNA%3D%3D", label: "Instagram" },
    ];

    const navLinks = ['Home', 'About', 'Experience', 'Projects', 'Contact'];

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="relative bg-gray-50 dark:bg-[#050914] pt-16 pb-8 border-t border-gray-200 dark:border-[#1e2d4a]/60 flex flex-col items-center justify-center overflow-hidden transition-colors duration-300">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-cyan-200 dark:bg-[#38bdf8] rounded-[100%] mix-blend-multiply dark:mix-blend-normal filter blur-[100px] opacity-30 dark:opacity-10 pointer-events-none transition-colors duration-300"></div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                
                {/* Brand / Name */}
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 tracking-tight mb-4 transition-colors duration-300">
                    Ashraf<span className="text-[#38bdf8]">.</span>
                </h2>

                {/* Tagline */}
                <p className="text-gray-600 dark:text-gray-400 text-sm max-w-md mb-8 transition-colors duration-300">
                    Building robust, full-stack applications with clean code and intuitive user experiences.
                </p>

                {/* Center Aligned Navigation Links */}
                <ul className="flex flex-wrap justify-center gap-6 mb-8">
                    {navLinks.map((item) => (
                        <li key={item}>
                            <a 
                                href={`#${item.toLowerCase()}`}
                                onClick={(e) => scrollToSection(e, item.toLowerCase())}
                                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-[#38bdf8] text-sm font-medium transition-colors duration-300"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Social Icons */}
                <div className="flex justify-center gap-5 mb-10">
                    {socialLinks.map((social, index) => (
                        <a 
                            key={index} 
                            href={social.link} 
                            target="_blank" 
                            rel="noreferrer"
                            aria-label={social.label}
                            className="w-10 h-10 rounded-full bg-white dark:bg-[#0c162d] border border-gray-200 dark:border-[#1e2d4a] flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white dark:hover:text-[#050914] hover:bg-[#38bdf8] hover:border-[#38bdf8] dark:hover:bg-[#38bdf8] dark:hover:border-[#38bdf8] hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(56,189,248,0.4)] transition-all duration-300"
                        >
                            <span className="text-lg">{social.icon}</span>
                        </a>
                    ))}
                </div>

                {/* Copyright */}
                <div className="w-full max-w-2xl border-t border-gray-200 dark:border-[#1e2d4a]/50 pt-6 transition-colors duration-300">
                    <p className="text-gray-500 dark:text-gray-500 text-sm transition-colors duration-300">
                        &copy; {currentYear} Ashraf Mansoori. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;