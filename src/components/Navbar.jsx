import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Courses', href: '#courses' },
        { name: 'Instructor', href: '#instructor' },
        { name: 'Services', href: '#services' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="#" className="logo">Francogate</a>

                {/* Desktop Menu */}
                <div className="nav-links">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="nav-link"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#register" className="btn btn-primary" style={{ backgroundColor: 'var(--color-secondary)', border: 'none' }}>
                        Book Free Demo
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mobile-menu">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="nav-link"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#register"
                            className="btn btn-primary"
                            style={{ backgroundColor: 'var(--color-secondary)', width: '100%' }}
                            onClick={() => setIsOpen(false)}
                        >
                            Book Free Demo
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
