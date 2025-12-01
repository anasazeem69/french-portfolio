import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h3 className="text-2xl font-bold text-white mb-4">Francogate</h3>
                        <p className="text-blue-200 mb-6">
                            Your gateway to French mastery and global opportunities.
                            Learn from the best, in your own language.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link"><Facebook size={20} /></a>
                            <a href="#" className="social-link"><Instagram size={20} /></a>
                            <a href="#" className="social-link"><Youtube size={20} /></a>
                            <a href="#" className="social-link"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#courses">Courses</a></li>
                            <li><a href="#instructor">Instructor</a></li>
                            <li><a href="#testimonials">Success Stories</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4 className="footer-heading">Contact Us</h4>
                        <ul className="contact-list">
                            <li>
                                <Mail size={18} className="text-gold" />
                                <span>francogateconnect@gmail.com</span>
                            </li>
                            <li>
                                <Phone size={18} className="text-gold" />
                                <span>+92 345 5943732</span>
                            </li>
                            <li>
                                <MapPin size={18} className="text-gold" />
                                <span>Islamabad / Rawalpindi, Pakistan</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2024 Francogate. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
