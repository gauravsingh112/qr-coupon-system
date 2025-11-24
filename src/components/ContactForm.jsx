import { useState } from 'react';
import { Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        // Simple mailto fallback - most reliable method
        const mailtoLink = `mailto:sgteamdev@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)} - QR Coupon System&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent from QR Coupon System Contact Form`)}`;

        window.location.href = mailtoLink;

        setStatus({
            type: 'success',
            message: '✓ Opening your email client. Please click Send to complete your message.'
        });

        // Clear form after a delay
        setTimeout(() => {
            setFormData({ name: '', email: '', message: '' });
            setIsSubmitting(false);
        }, 2000);
    };

    return (
        <div className="contact-form-box">
            <h3 className="form-title">Get in Touch</h3>
            <p className="form-subtitle">Have questions? We'd love to hear from you!</p>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-input"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        className="form-textarea"
                        placeholder="Tell us about your inquiry..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>

                <motion.button
                    type="submit"
                    className="submit-btn"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    {isSubmitting ? 'Opening Email...' : 'Send Message'}
                    <Send size={18} />
                </motion.button>

                <AnimatePresence>
                    {status.message && (
                        <motion.div
                            className={`form-status ${status.type}`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            {status.message}
                        </motion.div>
                    )}
                </AnimatePresence>
            </form>
        </div>
    );
};

export default ContactForm;
