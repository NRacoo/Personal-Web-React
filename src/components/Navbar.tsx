import { useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Projects",
        path: "#projects"
    }
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="mb-6">
            <div className="flex flex-wrap items-center justify-between mx-auto p-8">
                <a href="#" className="text-2xl font-semibold text-white">AR</a>
                
                {/* Hamburger button (shown only on mobile) */}
                <button 
                    className="md:hidden flex flex-col space-y-1.5"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <motion.span 
                        className="block w-6 h-0.5 bg-white" 
                        animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                    />
                    <motion.span 
                        className="block w-6 h-0.5 bg-white" 
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                    />
                    <motion.span 
                        className="block w-6 h-0.5 bg-white" 
                        animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                    />
                </button>
                
                {/* Desktop menu */}
                <div className="hidden md:block md:w-auto" id="navbar">
                    <ul className="flex flex-row space-x-5">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a 
                                    href={link.path} 
                                    className='text-white block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 hover:text-slate-300'
                                >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Mobile menu - shown when isOpen is true */}
                {isOpen && (
                    <motion.div 
                        className="md:hidden absolute top-20 left-0 right-0 bg-blue-900 p-5"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className="flex flex-col space-y-3">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <a 
                                        href={link.path} 
                                        className='text-white block py-2 text-xl hover:text-slate-300'
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;