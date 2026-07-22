import React, { useState, useEffect } from 'react';
import { FaLinkedinIn, FaGithub, FaCheck, FaArrowRight, FaInstagram, FaFolderOpen, FaUserTie, FaMicrochip } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { BsDownload } from 'react-icons/bs';
import { BiCodeAlt } from 'react-icons/bi';
import { SiReact, SiNodedotjs, SiLeetcode, SiGmail } from 'react-icons/si';

// --- Custom Hook/Component for Smooth Number Counting ---
const AnimatedCounter = ({ end, duration = 2000, suffix = "+" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime;
        let animationFrameId;

        const updateCount = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            
            if (progress < duration) {
                // Easing function for smooth deceleration at the end
                const easeOutExpo = 1 - Math.pow(2, -10 * (progress / duration));
                setCount(Math.floor(easeOutExpo * end));
                animationFrameId = requestAnimationFrame(updateCount);
            } else {
                setCount(end);
            }
        };

        animationFrameId = requestAnimationFrame(updateCount);
        return () => cancelAnimationFrame(animationFrameId);
    }, [end, duration]);

    return <>{count}{suffix}</>;
};

// Array of words for the typing animation
const TYPING_PHRASES = [
    "Web Developer",
    "Full Stack MERN Developer",
    "Problem Solver",
    "Tech Enthusiast"
];

const HeroSection = () => {
    const [downloaded, setDownloaded] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // Typing Animation States
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [phraseIndex, setPhraseIndex] = useState(0);

    // Trigger on-load animations
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Typing Effect Logic
    useEffect(() => {
        const currentPhrase = TYPING_PHRASES[phraseIndex];
        let typingTimeout;

        if (isDeleting) {
            typingTimeout = setTimeout(() => {
                setCurrentText((prev) => prev.slice(0, -1));
            }, 50); 
        } else {
            typingTimeout = setTimeout(() => {
                setCurrentText((prev) => currentPhrase.slice(0, prev.length + 1));
            }, 100); 
        }

        if (!isDeleting && currentText === currentPhrase) {
            typingTimeout = setTimeout(() => setIsDeleting(true), 1500); 
        } else if (isDeleting && currentText === "") {
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
        }

        return () => clearTimeout(typingTimeout);
    }, [currentText, isDeleting, phraseIndex]);

    const handleDownloadResume = () => {
        const fileUrl = "/Ashraful_Haq_Aamir_Resume.pdf";
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "Ashraful_Haq_Aamir_Resume.pdf";
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setDownloaded(true);
        setTimeout(() => {
            setDownloaded(false);
        }, 2000);
    };

    // Helper function for staggered fade-up animations
    const fadeUp = (delayClass) => 
        `transform transition-all duration-1000 ease-out ${isMounted ? `opacity-100 translate-y-0 ${delayClass}` : 'opacity-0 translate-y-8'}`;

    return (
        <>
            {/* Inline styles for custom floating animation on the code box */}
            <style>{`
                @keyframes float-smooth {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }
                .animate-float-smooth {
                    animation: float-smooth 5s ease-in-out infinite;
                }
            `}</style>

            {/* ================= HERO SECTION ================= */}
            <section id="home" className="relative w-full min-h-screen bg-transparent text-gray-900 dark:text-white flex items-center justify-center overflow-hidden font-sans pt-24 md:pt-28 pb-12 scroll-mt-24 transition-colors duration-300">

                {/* --- Background Elements --- */}
                <div className={`absolute inset-0 z-0 opacity-5 dark:opacity-10 transition-opacity duration-1000 bg-[radial-gradient(#000000_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:40px_40px] ${isMounted ? 'opacity-5 dark:opacity-10' : 'opacity-0'}`}></div>
                
                <div className={`absolute top-1/2 right-[15%] -translate-y-1/2 w-[600px] h-[600px] bg-blue-200 dark:bg-[#1a3673] rounded-full blur-[120px] transition-opacity duration-1000 delay-500 z-0 pointer-events-none ${isMounted ? 'opacity-40 dark:opacity-60' : 'opacity-0'}`}></div>

                <div className="container mx-auto px-6 py-8 md:py-12 mt-0 md:-mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 max-w-7xl">

                    {/* --- LEFT COLUMN: TEXT & ACTIONS --- */}
                    <div className="flex flex-col space-y-7">
                        
                        <div className={`inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-blue-200 dark:border-[#1e2d4a] bg-blue-50/50 dark:bg-[#0c162d]/50 text-sm text-gray-700 dark:text-gray-300 w-fit backdrop-blur-sm transition-colors duration-300 ${fadeUp('delay-100')}`}>
                            <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8] animate-pulse"></span>
                            Available for Opportunities
                        </div>

                        <div className={`space-y-2 ${fadeUp('delay-200')}`}>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-wide transition-colors duration-300">Hi, I'm</h2>
                            <h1 className="text-5xl md:text-7xl font-extrabold flex items-center flex-wrap">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#2563eb]">
                                    Ashraful Haq Aamir
                                </span>
                            </h1>
                        </div>

                        {/* --- Dynamic Typing Animation Section --- */}
                        <div className={`text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium min-h-[36px] flex items-center transition-colors duration-300 ${fadeUp('delay-300')}`}>
                            <span className="mr-2">A passionate</span>
                            <span className="text-[#38bdf8] font-bold">
                                {currentText}
                            </span>
                            <span className="text-[#38bdf8] animate-pulse ml-0.5">|</span>
                        </div>

                        <p className={`text-gray-600 dark:text-gray-400 max-w-lg text-base leading-relaxed transition-colors duration-300 ${fadeUp('delay-400')}`}>
                            I build responsive and scalable web applications and love solving real-world problems through clean and efficient code.
                        </p>

                        {/* Buttons */}
                        <div className={`flex flex-wrap gap-4 pt-4 ${fadeUp('delay-500')}`}>
                            <button
                                onClick={handleDownloadResume}
                                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-medium transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] hover:-translate-y-1"
                            >
                                {downloaded ? (
                                    <FaCheck className="text-lg text-green-300 animate-bounce" />
                                ) : (
                                    <BsDownload className="text-lg" />
                                )}
                                {downloaded ? "Downloaded!" : "Download Resume"}
                            </button>
                            
                            <a 
                                href="#projects" 
                                className="group flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 dark:border-[#1e2d4a] hover:border-[#38bdf8] dark:hover:border-[#38bdf8] hover:text-[#38bdf8] text-gray-800 dark:text-white font-medium transition-all duration-300 bg-transparent hover:bg-blue-50 dark:hover:bg-[#38bdf8]/5 hover:-translate-y-1"
                            >
                                View Projects
                                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className={`flex items-center gap-4 pt-6 ${fadeUp('delay-[600ms]')}`}>
                            <span className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-300">Find me on</span>
                            <a href="https://www.linkedin.com/in/ashraful-haq-aamir-ba1635313/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gray-200 dark:bg-[#1e2d4a]/50 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#38bdf8] dark:hover:text-[#38bdf8] hover:scale-110 transition-all duration-300"><FaLinkedinIn /></a>
                            <a href="https://x.com/AshrafM34193907" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gray-200 dark:bg-[#1e2d4a]/50 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#38bdf8] dark:hover:text-[#38bdf8] hover:scale-110 transition-all duration-300"><FaXTwitter /></a>
                            <a href="https://github.com/AshrafMansoori" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gray-200 dark:bg-[#1e2d4a]/50 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#38bdf8] dark:hover:text-[#38bdf8] hover:scale-110 transition-all duration-300"><FaGithub /></a>
                            <a href="https://www.instagram.com/ashrafmansoori_1126?igsh=MXZtcDRoOGpwZHpsNA%3D%3D" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gray-200 dark:bg-[#1e2d4a]/50 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#38bdf8] dark:hover:text-[#38bdf8] hover:scale-110 transition-all duration-300"><FaInstagram /></a>
                            <a href="mailto:mansooriashhraf354@gmail.com" className="w-8 h-8 rounded-full bg-gray-200 dark:bg-[#1e2d4a]/50 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#38bdf8] dark:hover:text-[#38bdf8] hover:scale-110 transition-all duration-300"><SiGmail /></a>
                            <a href="https://leetcode.com/u/AshrafMansoori/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gray-200 dark:bg-[#1e2d4a]/50 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#38bdf8] dark:hover:text-[#38bdf8] hover:scale-110 transition-all duration-300">< SiLeetcode /></a>
                        </div>
                    </div>

                    {/* --- RIGHT COLUMN: VISUALS --- */}
                    <div className={`relative flex justify-center items-center h-full w-full mt-16 lg:mt-0 group transition-all duration-1000 delay-[500ms] ease-out ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>

                        {/* Profile Image */}
                        <div className="relative z-10 w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-2 border-gray-300 dark:border-[#1e2d4a] shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-colors duration-300">
                            <img
                                src="ashraf.png"
                                alt="Ashraful Haq Aamir"
                                className="w-full h-full object-cover object-[center_25%] scale-110 transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Complex Rotating HUD Rings */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none flex items-center justify-center">
                            <div className="absolute w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full border border-gray-200 dark:border-[#1e2d4a] border-t-[#38bdf8] border-b-[#2563eb] animate-[spin_4s_linear_infinite] group-hover:[animation-play-state:paused] transition-all duration-300"></div>
                            <div className="absolute w-[370px] h-[370px] md:w-[460px] md:h-[460px] rounded-full border-[2px] border-dashed border-[#2563eb]/40 animate-[spin_8s_linear_infinite_reverse] group-hover:[animation-play-state:paused] transition-all duration-300"></div>
                            <div className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full border-[3px] border-transparent border-l-[#38bdf8] border-r-[#38bdf8] opacity-60 blur-[1px] shadow-[0_0_30px_rgba(56,189,248,0.3)] animate-[spin_12s_linear_infinite] group-hover:[animation-play-state:paused] transition-all duration-300"></div>
                            <div className="absolute w-[430px] h-[430px] md:w-[540px] md:h-[540px] rounded-full border border-dotted border-[#38bdf8]/30 animate-[spin_20s_linear_infinite_reverse] group-hover:[animation-play-state:paused] transition-all duration-300"></div>
                        </div>

                        {/* Floating Tech Icons */}
                        <div className="absolute top-[20%] left-[5%] z-20 w-12 h-12 rounded-xl border border-gray-200 dark:border-[#1e2d4a] bg-white/80 dark:bg-[#0c162d]/80 backdrop-blur-md flex items-center justify-center shadow-lg transform rotate-12 animate-bounce hover:scale-110 transition-all duration-300 cursor-pointer">
                            <SiReact className="text-3xl text-[#38bdf8] animate-[spin_6s_linear_infinite]" />
                        </div>
                        <div className="absolute top-[15%] right-[10%] z-20 w-14 h-14 rounded-xl border border-gray-200 dark:border-[#1e2d4a] bg-white/80 dark:bg-[#0c162d]/80 backdrop-blur-md flex items-center justify-center shadow-lg animate-pulse hover:scale-110 transition-all duration-300 cursor-pointer" style={{ animationDuration: '3s' }}>
                            <span className="text-2xl font-bold text-[#f7df1e]">JS</span>
                        </div>
                        <div className="absolute top-[55%] left-[0%] z-20 w-12 h-12 rounded-xl border border-gray-200 dark:border-[#1e2d4a] bg-white/80 dark:bg-[#0c162d]/80 backdrop-blur-md flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer" style={{ animation: 'bounce 4s infinite' }}>
                            <SiNodedotjs className="text-2xl text-[#68a063]" />
                        </div>
                        <div className="absolute top-[60%] right-[0%] z-20 w-12 h-12 rounded-xl border border-gray-200 dark:border-[#1e2d4a] bg-white/80 dark:bg-[#0c162d]/80 backdrop-blur-md flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer" style={{ animation: 'pulse 4s infinite' }}>
                            <BiCodeAlt className="text-2xl text-[#38bdf8]" />
                        </div>
                        <div className="absolute top-[75%] right-[5%] z-20 w-10 h-10 rounded-xl border border-gray-200 dark:border-[#1e2d4a] bg-white/80 dark:bg-[#0c162d]/80 backdrop-blur-md flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer" style={{ animation: 'bounce 5s infinite' }}>
                            <span className="text-xl font-bold text-[#38bdf8]">~</span>
                        </div>

                        {/* Code Window - Hidden on mobile/tablet (hidden lg:block) so it never overlaps the stats banner */}
                        <div className={`absolute -bottom-[5%] right-[24%] md:right-[18%] lg:right-[12%] z-30 w-[340px] hidden lg:block transition-all duration-1000 delay-[800ms] ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <div className="rounded-xl border border-gray-700 dark:border-[#1e2d4a] bg-[#0d1117] shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden animate-float-smooth transition-colors duration-300">
                                <div className="flex items-center gap-2 px-4 py-3 bg-[#0d1117] border-b border-gray-700 dark:border-[#1e2d4a]/50">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                                </div>
                                <div className="p-4 bg-[#0d1117]">
                                    <pre className="font-mono text-[13px] leading-relaxed text-[#c9d1d9] whitespace-pre-wrap">
                                        <span className="text-[#79c0ff]">const</span> <span className="text-[#d2a8ff]">developer</span> <span className="text-[#ff7b72]">=</span> {'{'}
                                        <br />
                                        &nbsp;&nbsp;<span className="text-[#79c0ff]">name</span>: <span className="text-[#a5d6ff]">"Ashraful Haq Aamir"</span>,
                                        <br />
                                        &nbsp;&nbsp;<span className="text-[#79c0ff]">passion</span>: <span className="text-[#a5d6ff]">"Building Scalable Web Apps"</span>,
                                        <br />
                                        &nbsp;&nbsp;<span className="text-[#79c0ff]">stack</span>: [<span className="text-[#a5d6ff]">"MERN"</span>, <span className="text-[#a5d6ff]">"Java"</span>, <span className="text-[#a5d6ff]">"SQL"</span>],
                                        <br />
                                        &nbsp;&nbsp;<span className="text-[#79c0ff]">focus</span>: <span className="text-[#a5d6ff]">"Clean Code. Real Impact."</span>
                                        <br />
                                        {'}'};
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= STATS BANNER SECTION ================= */}
            <section className="w-full bg-transparent pb-16 pt-8 relative z-20 transition-colors duration-300">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        
                        {/* 10+ Projects */}
                        <div className={fadeUp('delay-[700ms]')}>
                            <div className="h-full flex flex-col items-center justify-center p-6 rounded-2xl bg-white/60 dark:bg-[#0c162d]/60 backdrop-blur-md border border-gray-200 dark:border-[#1e2d4a] hover:border-[#38bdf8]/60 dark:hover:border-[#38bdf8]/60 hover:bg-white/90 dark:hover:bg-[#0c162d]/90 transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] shadow-lg group cursor-pointer">
                                <FaFolderOpen className="text-4xl text-gray-400 dark:text-gray-400 group-hover:text-[#38bdf8] mb-4 transition-colors duration-300 group-hover:scale-110 transform" />
                                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-1 group-hover:text-[#38bdf8] transition-colors duration-300">
                                    {isMounted ? <AnimatedCounter end={10} duration={2000} /> : "0+"}
                                </h3>
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-300">Projects Built</p>
                            </div>
                        </div>
                        
                        {/* 2+ Internships */}
                        <div className={fadeUp('delay-[800ms]')}>
                            <div className="h-full flex flex-col items-center justify-center p-6 rounded-2xl bg-white/60 dark:bg-[#0c162d]/60 backdrop-blur-md border border-gray-200 dark:border-[#1e2d4a] hover:border-[#38bdf8]/60 dark:hover:border-[#38bdf8]/60 hover:bg-white/90 dark:hover:bg-[#0c162d]/90 transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] shadow-lg group cursor-pointer">
                                <FaUserTie className="text-4xl text-gray-400 dark:text-gray-400 group-hover:text-[#38bdf8] mb-4 transition-colors duration-300 group-hover:scale-110 transform" />
                                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-1 group-hover:text-[#38bdf8] transition-colors duration-300">
                                    {isMounted ? <AnimatedCounter end={2} duration={2000} /> : "0+"}
                                </h3>
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-300">Internships</p>
                            </div>
                        </div>

                        {/* 190+ Leetcode */}
                        <div className={fadeUp('delay-[900ms]')}>
                            <div className="h-full flex flex-col items-center justify-center p-6 rounded-2xl bg-white/60 dark:bg-[#0c162d]/60 backdrop-blur-md border border-gray-200 dark:border-[#1e2d4a] hover:border-[#f89f1b]/60 dark:hover:border-[#f89f1b]/60 hover:bg-white/90 dark:hover:bg-[#0c162d]/90 transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-[0_0_30px_rgba(248,159,27,0.15)] shadow-lg group cursor-pointer">
                                <SiLeetcode className="text-4xl text-gray-400 dark:text-gray-400 group-hover:text-[#f89f1b] mb-4 transition-colors duration-300 group-hover:scale-110 transform" />
                                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-1 group-hover:text-[#f89f1b] transition-colors duration-300">
                                    {isMounted ? <AnimatedCounter end={190} duration={2500} /> : "0+"}
                                </h3>
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-300">LeetCode Solved</p>
                            </div>
                        </div>

                        {/* 12+ Technologies */}
                        <div className={fadeUp('delay-[1000ms]')}>
                            <div className="h-full flex flex-col items-center justify-center p-6 rounded-2xl bg-white/60 dark:bg-[#0c162d]/60 backdrop-blur-md border border-gray-200 dark:border-[#1e2d4a] hover:border-[#38bdf8]/60 dark:hover:border-[#38bdf8]/60 hover:bg-white/90 dark:hover:bg-[#0c162d]/90 transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] shadow-lg group cursor-pointer">
                                <FaMicrochip className="text-4xl text-gray-400 dark:text-gray-400 group-hover:text-[#38bdf8] mb-4 transition-colors duration-300 group-hover:scale-110 transform" />
                                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-1 group-hover:text-[#38bdf8] transition-colors duration-300">
                                    {isMounted ? <AnimatedCounter end={12} duration={2000} /> : "0+"}
                                </h3>
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-300">Technologies</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;