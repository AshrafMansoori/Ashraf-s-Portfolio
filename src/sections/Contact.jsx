import React, { useEffect, useRef, useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode, SiGmail } from 'react-icons/si';

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Form state (optional, for handling inputs)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here (e.g., EmailJS, Formspree, or your backend)
        console.log('Form Submitted', formData);
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section 
            id="contact" 
            ref={sectionRef}
            className="relative w-full py-24 bg-transparent text-gray-900 dark:text-white overflow-hidden transition-colors duration-300"
        >
            {/* Background ambient glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200 dark:bg-[#38bdf8] rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-[128px] opacity-40 dark:opacity-10 pointer-events-none transition-colors duration-300"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 dark:bg-[#2563eb] rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-[128px] opacity-40 dark:opacity-10 pointer-events-none transition-colors duration-300"></div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                
                {/* Section Header */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    <h2 className="text-sm font-semibold text-[#38bdf8] tracking-widest uppercase mb-3">Get In Touch</h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight transition-colors duration-300">
                        Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#2563eb]">Me</span>
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#38bdf8] to-[#2563eb] mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    
                    {/* Left Column: Contact Information */}
                    <div className={`space-y-8 transform transition-all duration-1000 delay-300 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                        <div>
                            <h4 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300">Let's Talk!</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors duration-300">
                                Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
                            </p>
                        </div>

                        <div className="space-y-6 mt-8">
                            {/* Contact Info Cards */}
                            <div className="flex items-center gap-6 p-4 rounded-2xl bg-gray-50/50 dark:bg-[#0c162d]/40 border border-gray-200 dark:border-[#1e2d4a]/50 hover:border-[#38bdf8] dark:hover:border-[#38bdf8]/50 transition-colors duration-300 group">
                                <div className="w-14 h-14 rounded-full bg-white dark:bg-[#050914] border border-gray-200 dark:border-[#1e2d4a] flex items-center justify-center text-[#38bdf8] text-xl group-hover:scale-110 group-hover:bg-[#38bdf8] group-hover:text-white dark:group-hover:text-[#050914] transition-all duration-300">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h5 className="text-gray-500 dark:text-gray-400 text-sm font-medium transition-colors duration-300">Email</h5>
                                    <p className="text-gray-900 dark:text-gray-100 font-semibold text-lg transition-colors duration-300">mansooriashraf354@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 p-4 rounded-2xl bg-gray-50/50 dark:bg-[#0c162d]/40 border border-gray-200 dark:border-[#1e2d4a]/50 hover:border-[#38bdf8] dark:hover:border-[#38bdf8]/50 transition-colors duration-300 group">
                                <div className="w-14 h-14 rounded-full bg-white dark:bg-[#050914] border border-gray-200 dark:border-[#1e2d4a] flex items-center justify-center text-[#38bdf8] text-xl group-hover:scale-110 group-hover:bg-[#38bdf8] group-hover:text-white dark:group-hover:text-[#050914] transition-all duration-300">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h5 className="text-gray-500 dark:text-gray-400 text-sm font-medium transition-colors duration-300">Location</h5>
                                    <p className="text-gray-900 dark:text-gray-100 font-semibold text-lg transition-colors duration-300">Delhi, India</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 p-4 rounded-2xl bg-gray-50/50 dark:bg-[#0c162d]/40 border border-gray-200 dark:border-[#1e2d4a]/50 hover:border-[#38bdf8] dark:hover:border-[#38bdf8]/50 transition-colors duration-300 group">
                                <div className="w-14 h-14 rounded-full bg-white dark:bg-[#050914] border border-gray-200 dark:border-[#1e2d4a] flex items-center justify-center text-[#38bdf8] text-xl group-hover:scale-110 group-hover:bg-[#38bdf8] group-hover:text-white dark:group-hover:text-[#050914] transition-all duration-300">
                                    <FaPhoneAlt />
                                </div>
                                <div>
                                    <h5 className="text-gray-500 dark:text-gray-400 text-sm font-medium transition-colors duration-300">Phone</h5>
                                    <p className="text-gray-900 dark:text-gray-100 font-semibold text-lg transition-colors duration-300">+91 98185 74725</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-6">
                            <h5 className="text-gray-900 dark:text-gray-100 font-semibold mb-4 transition-colors duration-300">Connect with me</h5>
                            <div className="flex gap-4 flex-wrap">
                                {[
                                    { icon: <FaGithub />, link: "https://github.com/AshrafMansoori" },
                                    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/ashraful-haq-aamir-ba1635313/" },
                                    { icon: <FaXTwitter />, link: "https://x.com/AshrafM34193907" },
                                    { icon: <FaInstagram />, link: "https://www.instagram.com/ashrafmansoori_1126?igsh=MXZtcDRoOGpwZHpsNA%3D%3D" },
                                    { icon: <SiLeetcode />, link: "https://leetcode.com/u/AshrafMansoori/" },
                                    { icon: <SiGmail />, link: "mailto:mansooriashhraf354@gmail.com" },
                                ].map((social, index) => (
                                    <a 
                                        key={index} 
                                        href={social.link} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="w-12 h-12 rounded-full bg-gray-50 dark:bg-[#0c162d] border border-gray-200 dark:border-[#1e2d4a] flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#38bdf8] dark:hover:text-[#38bdf8] hover:border-[#38bdf8] hover:bg-white dark:hover:bg-transparent hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-300"
                                    >
                                        <span className="text-xl">{social.icon}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className={`transform transition-all duration-1000 delay-500 ease-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
                        <form 
                            onSubmit={handleSubmit}
                            className="bg-white/60 dark:bg-[#0c162d]/60 backdrop-blur-md border border-gray-200 dark:border-[#1e2d4a]/50 rounded-3xl p-8 shadow-2xl relative overflow-hidden transition-colors duration-300"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#38bdf8] to-[#2563eb]"></div>

                            <div className="space-y-6">
                                {/* Name Input */}
                                <div className="group">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400 mb-2 block group-focus-within:text-[#38bdf8] transition-colors duration-300">Your Name</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-gray-50 dark:bg-[#050914] border border-gray-300 dark:border-[#1e2d4a] rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all duration-300"
                                        placeholder="Enter your Name..."
                                    />
                                </div>

                                {/* Email Input */}
                                <div className="group">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400 mb-2 block group-focus-within:text-[#38bdf8] transition-colors duration-300">Your Email</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-gray-50 dark:bg-[#050914] border border-gray-300 dark:border-[#1e2d4a] rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all duration-300"
                                        placeholder="abc@example.com"
                                    />
                                </div>

                                {/* Subject Input */}
                                <div className="group">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400 mb-2 block group-focus-within:text-[#38bdf8] transition-colors duration-300">Subject</label>
                                    <input 
                                        type="text" 
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-gray-50 dark:bg-[#050914] border border-gray-300 dark:border-[#1e2d4a] rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all duration-300"
                                        placeholder="Project Inquiry"
                                    />
                                </div>

                                {/* Message Input */}
                                <div className="group">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400 mb-2 block group-focus-within:text-[#38bdf8] transition-colors duration-300">Message</label>
                                    <textarea 
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full bg-gray-50 dark:bg-[#050914] border border-gray-300 dark:border-[#1e2d4a] rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all duration-300 resize-none"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button 
                                    type="submit"
                                    className="w-full py-4 bg-gradient-to-r from-[#38bdf8] to-[#2563eb] text-white rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 overflow-hidden relative group"
                                >
                                    <span className="relative z-10">Send Message</span>
                                    {/* Shine effect on hover */}
                                    <div className="absolute inset-0 h-full w-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shine z-0"></div>
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

            {/* Custom CSS for the button shine animation */}
            <style>
                {`
                    @keyframes shine {
                        100% { transform: translateX(100%) skew(-12deg); }
                    }
                    .animate-shine {
                        animation: shine 0.75s ease-out;
                    }
                `}
            </style>
        </section>
    );
};

export default Contact;