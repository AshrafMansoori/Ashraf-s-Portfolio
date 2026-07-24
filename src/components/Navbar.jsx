import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsDownload } from 'react-icons/bs';
import ThemeToggle from './Theme';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const timer = window.setTimeout(() => setIsVisible(true), 100);
        return () => window.clearTimeout(timer);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Certification', href: '#certifications' },
        { name: 'Contact', href: '#contact' }
    ];

    useEffect(() => {
        const sectionIds = navLinks.map((link) => link.href.replace('#', ''));

        const updateActiveSection = () => {
            const scrollPosition = window.scrollY + 140;
            let currentSection = 'home';

            sectionIds.forEach((id) => {
                const element = document.getElementById(id);
                if (!element) return;

                const top = element.offsetTop;
                const bottom = top + element.offsetHeight;

                if (scrollPosition >= top && scrollPosition < bottom) {
                    currentSection = id;
                }
            });

            setActiveSection(currentSection);
        };

        updateActiveSection();
        window.addEventListener('scroll', updateActiveSection, { passive: true });
        window.addEventListener('resize', updateActiveSection);

        return () => {
            window.removeEventListener('scroll', updateActiveSection);
            window.removeEventListener('resize', updateActiveSection);
        };
    }, [navLinks]);

    const handleNavClick = (href) => {
        const sectionId = href.replace('#', '');
        setActiveSection(sectionId);
        setIsOpen(false);
    };

    // Prevent background scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Top Navigation Bar */}
            <nav 
                className={`fixed top-0 left-0 w-full z-[60] transition-all duration-300 ease-out ${
                    scrolled || isOpen
                        ? 'bg-white/90 dark:bg-[#050914]/90 backdrop-blur-md border-b border-gray-200 dark:border-[#1e2d4a] py-4 shadow-lg' 
                        : 'bg-transparent border-b border-transparent py-6'
                }`}
            >
                <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center relative">
                    
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <a href="#home" className="text-2xl font-bold tracking-tighter cursor-pointer">
                            <span className="text-gray-800 dark:text-gray-100 transition-colors">&lt;</span>
                            <span className="bg-gradient-to-r from-[#38bdf8] to-[#2563eb] text-transparent bg-clip-text">Ashraf</span>
                            <span className="text-gray-800 dark:text-gray-100 transition-colors"> /&gt;</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <ul className="flex space-x-8">
                            {navLinks.map((link, index) => (
                                <li
                                    key={index}
                                    className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}
                                    style={{ transitionDelay: `${index * 120}ms` }}
                                >
                                    <a 
                                        href={link.href} 
                                        onClick={() => handleNavClick(link.href)}
                                        className={`text-sm font-medium transition-all duration-300 relative group ${
                                            activeSection === link.href.replace('#', '')
                                                ? 'text-[#38bdf8]'
                                                : 'text-gray-600 dark:text-gray-300 hover:text-[#38bdf8] dark:hover:text-[#38bdf8]'
                                        }`}
                                    >
                                        {link.name}
                                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#38bdf8] transition-all duration-300 ${
                                            activeSection === link.href.replace('#', '') ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                        
                        <div className="flex items-center space-x-6">
                            {/* THEME TOGGLE ADDED HERE */}
                            <div 
                                className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}
                                style={{ transitionDelay: '150ms' }}
                            >
                                <ThemeToggle />
                            </div>

                            {/* ANIMATED DESKTOP RESUME BUTTON */}
                            <a 
                                href="/Ashraful_Haq_Aamir_Resume.pdf"
                                download="Ashraf_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`relative overflow-hidden flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#38bdf8] to-[#2563eb] rounded-full text-sm font-semibold text-white group transition-all duration-200 ease-out hover:scale-105 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] active:scale-95 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}`}
                                style={{ transitionDelay: '180ms' }}
                            >
                                {/* Fast Shine Effect */}
                                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-300 ease-out"></span>
                                
                                <BsDownload className="text-lg relative z-10" />
                                <span className="relative z-10">View Resume</span>
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle & Theme Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <ThemeToggle />
                        <button 
                            onClick={toggleMenu} 
                            className="text-gray-800 dark:text-gray-300 hover:text-[#38bdf8] focus:outline-none transition-transform duration-300 transform active:scale-90"
                        >
                            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Overlay Backdrop */}
            <div 
                className={`md:hidden fixed inset-0 h-screen w-screen bg-gray-900/60 dark:bg-[#050914]/60 backdrop-blur-sm transition-opacity duration-300 z-[50] ${
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setIsOpen(false)}
            />

            {/* Mobile Side Drawer */}
            <div 
                className={`md:hidden fixed top-0 right-0 h-screen w-[260px] bg-white dark:bg-[#0c162d] shadow-2xl border-l border-gray-200 dark:border-[#1e2d4a] z-[55] flex flex-col pt-24 transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <ul className="flex flex-col px-8 space-y-6">
                    {navLinks.map((link, index) => (
                        <li
                            key={index}
                            className={`transition-all duration-500 ease-out ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <a 
                                href={link.href} 
                                onClick={() => handleNavClick(link.href)}
                                className={`block text-lg font-medium transition-all duration-300 ${
                                    activeSection === link.href.replace('#', '')
                                        ? 'text-[#38bdf8] translate-x-1'
                                        : 'text-gray-600 dark:text-gray-300 hover:text-[#38bdf8] hover:translate-x-2'
                                }`}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li className="pt-6 mt-4 border-t border-gray-200 dark:border-[#1e2d4a]">
                        
                        {/* ANIMATED MOBILE RESUME BUTTON */}
                        <a 
                            href="/Ashraful_Haq_Aamir_Resume.pdf"
                            download="Ashraf_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative overflow-hidden flex justify-center items-center gap-3 w-full px-4 py-3 bg-gradient-to-r from-[#38bdf8] to-[#2563eb] rounded-xl text-lg font-semibold text-white group transition-all duration-200 ease-out active:scale-95"
                        >
                            {/* Fast Shine Effect */}
                            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full active:translate-x-full transition-transform duration-300 ease-out"></span>
                            
                            <BsDownload className="text-xl relative z-10" />
                            <span className="relative z-10">View Resume</span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;