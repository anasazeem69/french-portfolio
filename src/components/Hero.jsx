import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Award, Star, CheckCircle } from 'lucide-react';
import heroImage from '../assets/professor.png';
import './Hero.css';

const MagneticButton = ({ children, href, className }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const xPos = clientX - (left + width / 2);
        const yPos = clientY - (top + height / 2);
        x.set(xPos * 0.3);
        y.set(yPos * 0.3);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.a
            ref={ref}
            href={href}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: mouseXSpring, y: mouseYSpring }}
        >
            {children}
        </motion.a>
    );
};

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const languages = ["English", "Urdu", "Punjabi", "Hindi"];

    // Parallax Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springConfig = { damping: 25, stiffness: 100 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const moveX1 = useTransform(springX, [-0.5, 0.5], [-30, 30]);
    const moveY1 = useTransform(springY, [-0.5, 0.5], [-30, 30]);
    const moveX2 = useTransform(springX, [-0.5, 0.5], [30, -30]);
    const moveY2 = useTransform(springY, [-0.5, 0.5], [30, -30]);
    const moveX3 = useTransform(springX, [-0.5, 0.5], [-20, 20]);
    const moveY3 = useTransform(springY, [-0.5, 0.5], [20, -20]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            const xPct = e.clientX / innerWidth - 0.5;
            const yPct = e.clientY / innerHeight - 0.5;
            x.set(xPct);
            y.set(yPct);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [x, y]);

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % languages.length;
            const fullText = `Learn in ${languages[i]}`;

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 50 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000); // Pause at end
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(500); // Pause before starting new word
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <section id="home" className="hero-section">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="hero-headline">
                        Your Gateway to <br />
                        <span className="text-primary">French Mastery</span> & <br />
                        <span className="text-secondary">Global Communication</span>
                    </h1>

                    <h2 className="hero-subheadline">
                        Learn French in <em>Your</em> Native Language. <br />
                        Boost your Canada Immigration score (CLB 7+).
                    </h2>

                    <div className="typing-container">
                        <span className="typing-text">{text}</span>
                        <span className="cursor">|</span>
                    </div>

                    <div className="hero-ctas">
                        <MagneticButton href="#register" className="btn btn-primary">Join Free Sunday Demo</MagneticButton>
                        <MagneticButton href="#courses" className="btn btn-secondary">View Courses</MagneticButton>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image-container"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="image-wrapper">
                        <img src={heroImage} alt="Aamir Hussain - French Expert" className="hero-image" />

                        {/* Floating Badges with Parallax */}
                        <motion.div
                            className="badge badge-left"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            style={{ x: moveX1, y: moveY1 }}
                        >
                            <div className="badge-icon bg-gold">
                                <Star size={20} className="text-white" />
                            </div>
                            <div className="badge-text">
                                <span className="font-bold">10+ Years</span>
                                <span className="text-xs text-gray-500">Experience</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="badge badge-right"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                            style={{ x: moveX2, y: moveY2 }}
                        >
                            <div className="badge-icon bg-primary">
                                <Award size={20} className="text-white" />
                            </div>
                            <div className="badge-text">
                                <span className="font-bold">CLB 7+</span>
                                <span className="text-xs text-gray-500">Expert Coach</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="badge badge-bottom"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4, duration: 0.5 }}
                            style={{ x: moveX3, y: moveY3 }}
                        >
                            <div className="badge-icon bg-secondary">
                                <CheckCircle size={20} className="text-white" />
                            </div>
                            <div className="badge-text">
                                <span className="font-bold">Certified</span>
                                <span className="text-xs text-gray-500">Translator</span>
                            </div>
                        </motion.div>
                    </div>
                    <div className="hero-blob"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
