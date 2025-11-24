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

        try {
            const response = await fetch('https://formsubmit.co/sgteamdev@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: `New Contact Form Submission from ${formData.name}`,
                    _captcha: 'false'
                })
            });

            if (response.ok) {
                setStatus({
                    type: 'success',
                    message: '✓ Message sent successfully! We\'ll get back to you soon.'
                });
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: '✗ Failed to send message. Please try again or email us directly.'
            });
        } finally {
            setIsSubmitting(false);
        }
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
                    {isSubmitting ? 'Sending...' : 'Send Message'}
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
