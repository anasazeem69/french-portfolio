import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Star, Globe, Award } from 'lucide-react';
import instructorImage from '../assets/professor.png';
import './Instructor.css';

const Instructor = () => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section id="instructor" className="section-padding instructor-section">
            <div className="container" style={{ perspective: 1000 }}>
                <motion.div
                    ref={ref}
                    className="instructor-card glass-effect"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d",
                    }}
                >
                    <motion.div
                        className="instructor-image-wrapper"
                        initial={{ opacity: 0, scale: 0.9, z: 0 }}
                        whileInView={{ opacity: 1, scale: 1, z: 50 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        style={{ transform: "translateZ(50px)" }}
                    >
                        <img src={instructorImage} alt="Aamir Hussain" className="instructor-image" />
                    </motion.div>

                    <div className="instructor-content" style={{ transform: "translateZ(30px)" }}>
                        <motion.h2
                            className="text-3xl font-bold text-white mb-4"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            Meet Your Mentor
                        </motion.h2>
                        <motion.h3
                            className="text-4xl font-bold text-gold mb-8"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            Aamir Hussain
                        </motion.h3>

                        <motion.p
                            className="text-blue-100 mb-10 text-lg leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            With over a decade of experience in teaching French and translation services,
                            Aamir Hussain has helped hundreds of students achieve their immigration and career goals.
                        </motion.p>

                        <div className="stats-grid">
                            {[
                                { icon: Star, value: "10+ Years", label: "Experience" },
                                { icon: Globe, value: "Global", label: "Expert Reach" },
                                { icon: Award, value: "Certified", label: "Translation Specialist" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="stat-item"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.7 + (index * 0.1) }}
                                    style={{ transform: "translateZ(20px)" }}
                                >
                                    <stat.icon className="stat-icon" />
                                    <div>
                                        <h4 className="stat-value">{stat.value}</h4>
                                        <p className="stat-label">{stat.label}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Instructor;
