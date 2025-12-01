import React from 'react';
import { Award, Languages, GraduationCap, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import './WhyUs.css';

const WhyUs = () => {
    const features = [
        {
            icon: <Award size={40} />,
            title: "TEF Canada Expert",
            description: "Achieve CLB 7+ in just one year. Specialized curriculum designed for immigration success.",
            className: "bento-large"
        },
        {
            icon: <Languages size={40} />,
            title: "Native Instruction",
            description: "Learn in English, Urdu, Hindi, & Punjabi. We break language barriers.",
            className: "bento-small"
        },
        {
            icon: <GraduationCap size={40} />,
            title: "Exam Focus",
            description: "Comprehensive preparation for DELF A1-B2 exams with proven strategies.",
            className: "bento-small"
        },
        {
            icon: <Globe size={40} />,
            title: "Global Reach",
            description: "Flexible online classes accessible from anywhere in the world.",
            className: "bento-large"
        }
    ];

    return (
        <section id="why-us" className="section-padding bg-gray-50">
            <div className="container">
                <div className="section-header text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Francogate?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We combine expert instruction with a personalized approach to help you master French faster.
                    </p>
                </div>

                <div className="bento-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={`bento-card ${feature.className}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="icon-wrapper mb-4 text-secondary">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
