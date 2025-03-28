import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full bg-gray-900 text-white shadow-md z-50">
            <div className="container mx-auto flex justify-between items-center px-6 py-3">
                {/* Logo Section */}
                <div className="flex-shrink-0">
                    <img
                        src="/assets/index_page_images/header_images/senu_logo.png"
                        alt="senu logo"
                        className="w-16 h-8 md:w-32 md:h-16"
                    />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 text-lg font-mono">
                    <a href="#home" className="hover:text-yellow-400">Home</a>
                    <a href="#whoami" className="hover:text-yellow-400">About</a>
                    <a href="#skills" className="hover:text-yellow-400">Skills</a>
                    <a href="#projects" className="hover:text-yellow-400">Projects</a>
                    <a href="#education" className="hover:text-yellow-400">Education</a>
                    <a href="#feedback" className="hover:text-yellow-400">Contact</a>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        className="text-white focus:outline-none p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} absolute top-16 right-0 bg-white text-black w-48 shadow-lg rounded-lg md:hidden`}>
                <a href="#home" className="block px-4 py-2 hover:bg-yellow-400" onClick={() => setIsOpen(false)}>Home</a>
                <a href="#whoami" className="block px-4 py-2 hover:bg-yellow-400" onClick={() => setIsOpen(false)}>About</a>
                <a href="#skills" className="block px-4 py-2 hover:bg-yellow-400" onClick={() => setIsOpen(false)}>Skills</a>
                <a href="#projects" className="block px-4 py-2 hover:bg-yellow-400" onClick={() => setIsOpen(false)}>Projects</a>
                <a href="#education" className="block px-4 py-2 hover:bg-yellow-400" onClick={() => setIsOpen(false)}>Education</a>
                <a href="#feedback" className="block px-4 py-2 hover:bg-yellow-400" onClick={() => setIsOpen(false)}>Contact</a>
            </div>
        </header>
    );
}

export default Header;
