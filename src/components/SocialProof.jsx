import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './SocialProof.css';

const SocialProof = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    const testimonials = [
        {
            name: "Sarah Ahmed",
            role: "TEF Canada Aspirant",
            text: "I passed my TEF Canada exam with CLB 7 in just 4 months! The structured approach and personalized feedback were game-changers.",
            initials: "SA"
        },
        {
            name: "Bilal Khan",
            role: "immigration Candidate",
            text: "From zero French to B1 level. The classes are interactive and the instructor is extremely patient. Highly recommended for beginners.",
            initials: "BK"
        },
        {
            name: "Ayesha Malik",
            role: "Student",
            text: "The best French learning experience in Islamabad. I cleared my DELF B2 exam and now I'm applying for universities in France.",
            initials: "AM"
        },
        {
            name: "Usman Ali",
            role: "Professional",
            text: "I needed translation services for my legal documents. Fast, accurate, and certified. Francogate is my go-to for all French needs.",
            initials: "UA"
        },
        {
            name: "Fatima Z.",
            role: "Online Learner",
            text: "Taking classes from home was so convenient. The online platform is smooth, and it felt just like a physical classroom.",
            initials: "FZ"
        },
        {
            name: "Hassan Raza",
            role: "TEF Candidate",
            text: "Sir Aamir's tips for the Speaking and Listening modules helped me boost my score significantly. Thank you Francogate!",
            initials: "HR"
        }
    ];



    return (
        <section id="testimonials" className="section-padding bg-gray-50 overflow-hidden">
            <div className="container mb-12 text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-primary mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Student Success Stories
                </motion.h2>
                <motion.p
                    className="text-gray-600 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Join hundreds of satisfied students who have achieved their language goals with Francogate.
                    <br />
                    <span className="text-sm text-primary font-semibold mt-2 inline-block">(Drag to explore more stories)</span>
                </motion.p>
            </div>

            <div className="container">
                <motion.div
                    ref={carousel}
                    className="carousel"
                    whileTap={{ cursor: "grabbing" }}
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className="inner-carousel"
                    >
                        {testimonials.map((item, index) => (
                            <motion.div key={index} className="testimonial-card-carousel">
                                <div className="testimonial-header">
                                    <div className="avatar">
                                        {item.initials}
                                    </div>
                                    <div className="user-info">
                                        <h4 className="user-name">{item.name}</h4>
                                        <p className="user-role">{item.role}</p>
                                    </div>
                                </div>
                                <div className="testimonial-body">
                                    <p>"{item.text}"</p>
                                </div>
                                <div className="testimonial-footer">
                                    <span className="text-gold">★★★★★</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default SocialProof;
