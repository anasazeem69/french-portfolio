import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Scale, Stethoscope, Mic, FileCheck, MapPin } from 'lucide-react';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: <Scale size={32} />,
            title: "Legal Translation",
            description: "Affidavits, Contracts, Court Documents"
        },
        {
            icon: <Stethoscope size={32} />,
            title: "Medical Translation",
            description: "Reports, Prescriptions, Medical History"
        },
        {
            icon: <Mic size={32} />,
            title: "Voice-over",
            description: "Professional French voice-overs for media"
        },
        {
            icon: <FileCheck size={32} />,
            title: "Certified Translation",
            description: "Official documents for Immigration/Visa"
        }
    ];

    return (
        <section id="services" className="section-padding bg-gray-50">
            <div className="container">
                <div className="section-header text-center mb-12">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-primary mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        More Than Just Teaching
                    </motion.h2>
                    <motion.p
                        className="text-gray-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        We provide professional translation and interpretation services for all your needs.
                    </motion.p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <SpotlightCard key={index} service={service} index={index} />
                    ))}
                </div>

                <div className="location-banner">
                    <MapPin size={24} />
                    <p className="font-medium">
                        Available Remote & Face-to-Face in Islamabad / Rawalpindi
                    </p>
                </div>
            </div>
        </section>
    );
};

const SpotlightCard = ({ service, index }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            className="service-card group relative border border-gray-200 bg-white overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onMouseMove={handleMouseMove}
            whileHover={{ y: -5 }}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
                }}
            />
            <div className="service-icon-wrapper relative z-10">
                {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 relative z-10">{service.title}</h3>
            <p className="text-gray-600 relative z-10">{service.description}</p>
        </motion.div>
    );
};

export default Services;
