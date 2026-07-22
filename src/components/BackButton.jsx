import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
            <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="p-3 rounded-full bg-[#38bdf8] text-[#050914] shadow-[0_0_15px_rgba(56,189,248,0.5)] hover:bg-[#7dd3fc] hover:shadow-[0_0_25px_rgba(56,189,248,0.8)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
            >
                <FaArrowUp className="text-xl" />
            </button>
        </div>
    );
};

export default BackToTop;