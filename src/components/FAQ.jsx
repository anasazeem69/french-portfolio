import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Can I learn French without knowing English?",
            answer: "Yes! We specialize in teaching French through Urdu, Hindi, and Punjabi. Our instructors explain complex grammar concepts in your native language to ensure 100% understanding."
        },
        {
            question: "How long does it take to reach CLB 7 for TEF Canada?",
            answer: "With our intensive TEF track and consistent practice, most students achieve CLB 7+ within 8-12 months. We provide a structured roadmap to help you get there efficiently."
        },
        {
            question: "Do you offer demo classes?",
            answer: "Yes, we conduct a free demo class every Sunday. It's a great way to meet the instructor and understand our teaching methodology before enrolling."
        },
        {
            question: "Are classes online or physical?",
            answer: "We offer both options! You can join our flexible online classes from anywhere in the world via Zoom, or attend face-to-face classes at our center in Islamabad/Rawalpindi."
        },
        {
            question: "What is the fee structure?",
            answer: "Our group classes start at $50/month. We also offer individual one-on-one sessions. Please contact us on WhatsApp for a detailed fee schedule tailored to your needs."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="section-padding bg-white">
            <div className="container max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-600">Everything you need to know about Francogate.</p>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                            <button
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={activeIndex === index}
                            >
                                <span className="font-bold text-lg text-left">{faq.question}</span>
                                {activeIndex === index ? <Minus className="text-primary" /> : <Plus className="text-gray-400" />}
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="faq-answer-wrapper"
                                    >
                                        <div className="faq-answer">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
