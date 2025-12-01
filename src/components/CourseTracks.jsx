import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './CourseTracks.css';

const CourseTracks = () => {
    const [activeTab, setActiveTab] = useState('full');

    const tracks = {
        full: {
            title: "Full Course (A1-C2)",
            description: "Complete French mastery from beginner to advanced. Structured curriculum following CEFR standards.",
            features: ["Complete Grammar & Vocabulary", "Reading, Writing, Listening, Speaking", "Official Certification Prep", "Lifetime Access to Materials"],
            price: "Starting from $50/mo"
        },
        tef: {
            title: "TEF Canada",
            description: "Specialized training for Canada immigration. Focus on CLB 7+ in all four modules.",
            features: ["Boost Immigration Points", "Exam-Specific Strategies", "Mock Tests & Feedback", "CLB 7+ Guarantee Program"],
            price: "Intensive Coaching"
        },
        delf: {
            title: "DELF Prep",
            description: "Preparation for official French diplomas valid for life. A1 to B2 levels.",
            features: ["Official Exam Pattern", "Past Paper Practice", "Oral Exam Simulation", "Diplomas Valid for Life"],
            price: "Level-based Pricing"
        },
        spoken: {
            title: "Spoken French",
            description: "Focus on conversation and fluency. Learn to speak confidently in real-life situations.",
            features: ["Daily Conversation Practice", "Pronunciation Workshops", "Role-play Scenarios", "Cultural Immersion"],
            price: "Flexible Schedule"
        }
    };

    return (
        <section id="courses" className="section-padding bg-white">
            <div className="container">
                <div className="section-header text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Choose Your Path</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Whether you want to immigrate to Canada or just learn a new language, we have the right course for you.
                    </p>
                </div>

                <div className="tabs-container">
                    <div className="tabs-header">
                        {Object.keys(tracks).map((key) => (
                            <button
                                key={key}
                                className={`tab-btn ${activeTab === key ? 'active' : ''}`}
                                onClick={() => setActiveTab(key)}
                            >
                                {tracks[key].title}
                            </button>
                        ))}
                    </div>

                    <div className="tab-content-wrapper">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="tab-content"
                            >
                                <div className="course-details">
                                    <h3 className="text-2xl font-bold text-primary mb-2">{tracks[activeTab].title}</h3>
                                    <p className="text-gray-600 mb-6 text-lg">{tracks[activeTab].description}</p>

                                    <ul className="features-list mb-8">
                                        {tracks[activeTab].features.map((feature, index) => (
                                            <li key={index} className="feature-item">
                                                <Check className="text-secondary" size={20} />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="course-footer">
                                        <span className="price-tag">{tracks[activeTab].price}</span>
                                        <a href="#register" className="btn btn-primary">
                                            Enroll Now <ArrowRight size={18} className="ml-2" />
                                        </a>
                                    </div>
                                </div>

                                <div className="course-image-placeholder">
                                    {/* Placeholder for course image */}
                                    <div className={`course-pattern pattern-${activeTab}`}></div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseTracks;
