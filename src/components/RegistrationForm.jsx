import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './RegistrationForm.css';

const RegistrationForm = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        whatsapp: '',
        language: 'English',
        track: 'TEF Canada',
        classType: 'Group'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleToggle = (type) => {
        setFormData(prev => ({ ...prev, classType: type }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
        // Sign up at https://www.emailjs.com/
        const SERVICE_ID = 'service_ewk3wxq';
        const TEMPLATE_ID = 'template_kx1m8lb';
        const PUBLIC_KEY = 'XnAQji_GnJut5IA3d';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setLoading(false);
                setStatus('success');
                setFormData({
                    fullName: '',
                    email: '',
                    whatsapp: '',
                    language: 'English',
                    track: 'TEF Canada',
                    classType: 'Group'
                });
                setTimeout(() => setStatus(null), 5000);
            }, (error) => {
                console.log(error.text);
                setLoading(false);
                setStatus('error');
            });
    };

    return (
        <section id="register" className="section-padding bg-blue-50">
            <div className="container">
                <motion.div
                    className="form-wrapper"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="form-header text-center mb-8">
                        <h2 className="text-3xl font-bold text-primary mb-2">Start Your Journey</h2>
                        <p className="text-gray-600">Book your free demo class today.</p>
                    </div>

                    <form ref={form} onSubmit={handleSubmit} className="registration-form">
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="whatsapp">WhatsApp Number</label>
                            <input
                                type="tel"
                                id="whatsapp"
                                name="whatsapp"
                                value={formData.whatsapp}
                                onChange={handleChange}
                                required
                                placeholder="+92 300 1234567"
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="language">Preferred Language</label>
                                <select
                                    id="language"
                                    name="language"
                                    value={formData.language}
                                    onChange={handleChange}
                                >
                                    <option value="English">English</option>
                                    <option value="Urdu">Urdu</option>
                                    <option value="Punjabi">Punjabi</option>
                                    <option value="Hindi">Hindi</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="track">Course Track</label>
                                <select
                                    id="track"
                                    name="track"
                                    value={formData.track}
                                    onChange={handleChange}
                                >
                                    <option value="TEF Canada">TEF Canada</option>
                                    <option value="DELF Prep">DELF Prep</option>
                                    <option value="Spoken French">Spoken French</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Class Type</label>
                            {/* Hidden input to send classType via EmailJS */}
                            <input type="hidden" name="classType" value={formData.classType} />
                            <div className="toggle-container">
                                <button
                                    type="button"
                                    className={`toggle-btn ${formData.classType === 'Group' ? 'active' : ''}`}
                                    onClick={() => handleToggle('Group')}
                                >
                                    Group Class ($50/mo)
                                </button>
                                <button
                                    type="button"
                                    className={`toggle-btn ${formData.classType === 'Individual' ? 'active' : ''}`}
                                    onClick={() => handleToggle('Individual')}
                                >
                                    Individual
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="submit-btn"
                            disabled={loading}
                            style={{ opacity: loading ? 0.7 : 1 }}
                        >
                            {loading ? (
                                <>Sending... <Loader2 className="animate-spin" size={18} /></>
                            ) : (
                                <>Book Free Demo <Send size={18} /></>
                            )}
                        </button>

                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-4 bg-green-50 text-green-700 rounded-lg flex items-center gap-2 mt-4"
                            >
                                <CheckCircle size={20} />
                                <span>Request sent successfully! We'll contact you soon.</span>
                            </motion.div>
                        )}

                        {status === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-2 mt-4"
                            >
                                <AlertCircle size={20} />
                                <span>Something went wrong. Please try again or contact us on WhatsApp.</span>
                            </motion.div>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default RegistrationForm;
