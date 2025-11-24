import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, QrCode, MessageCircle, Gift, CheckCircle, BarChart } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import './HowItWorksPage.css';

const HowItWorksPage = () => {
    const steps = [
        {
            number: '01',
            icon: ShoppingBag,
            title: 'Customer Makes Purchase',
            description: 'Customer buys products from your shop and receives a QR code with their purchase',
            color: 'var(--gradient-primary)',
        },
        {
            number: '02',
            icon: QrCode,
            title: 'Scan QR Code',
            description: 'Customer scans the QR code using their smartphone camera',
            color: 'var(--gradient-accent)',
        },
        {
            number: '03',
            icon: MessageCircle,
            title: 'WhatsApp Message',
            description: 'Customer sends a message to your business WhatsApp number',
            color: 'var(--gradient-success)',
        },
        {
            number: '04',
            icon: Gift,
            title: 'Coupon Generated',
            description: 'System automatically generates a unique coupon code',
            color: 'var(--gradient-warm)',
        },
        {
            number: '05',
            icon: CheckCircle,
            title: 'Coupon Delivered',
            description: 'Coupon is instantly sent back to customer via WhatsApp',
            color: 'var(--gradient-cool)',
        },
        {
            number: '06',
            icon: BarChart,
            title: 'Track & Redeem',
            description: 'Cashier redeems coupon on next visit, admin tracks all analytics',
            color: 'var(--gradient-purple)',
        },
    ];

    const benefits = [
        {
            title: 'Fully Automated',
            description: 'No manual intervention required. Everything happens automatically.',
        },
        {
            title: 'Instant Delivery',
            description: 'Coupons are delivered to customers within seconds via WhatsApp.',
        },
        {
            title: 'Secure & Unique',
            description: 'Each coupon is unique and can only be redeemed once.',
        },
        {
            title: 'Easy Redemption',
            description: 'Cashiers can quickly verify and redeem coupons at checkout.',
        },
    ];

    return (
        <div className="how-it-works-page">
            {/* Background */}
            <div className="how-bg">
                <div className="bg-gradient-animated"></div>
                <div className="bg-grid"></div>
            </div>

            {/* Navigation */}
            <motion.nav
                className="how-nav"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <div className="container">
                    <div className="nav-content">
                        <Link to="/about" className="back-link">
                            <ArrowLeft size={20} />
                            Back to About
                        </Link>
                        <div className="nav-right">
                            <Link to="/about/features" className="nav-link">Features</Link>
                            <Link to="/login" className="btn btn-primary btn-sm">Get Started</Link>
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Hero Section */}
            <section className="how-hero">
                <div className="container">
                    <motion.div
                        className="how-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1>
                            How It <span className="gradient-text">Works</span>
                        </h1>
                        <p>
                            Our system automates the entire coupon lifecycle from generation to redemption.
                            Here's how it works in 6 simple steps.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="steps-section">
                <div className="container">
                    <div className="steps-timeline">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="step-item"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className={`step-content ${index % 2 === 0 ? 'step-left' : 'step-right'}`}>
                                    <motion.div
                                        className="step-card card-glass"
                                        whileHover={{ scale: 1.05, y: -10 }}
                                    >
                                        <div className="step-number" style={{ background: step.color }}>
                                            {step.number}
                                        </div>
                                        <motion.div
                                            className="step-icon"
                                            style={{ background: step.color }}
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <step.icon size={32} color="white" />
                                        </motion.div>
                                        <h3>{step.title}</h3>
                                        <p>{step.description}</p>
                                    </motion.div>
                                </div>

                                {/* Timeline Connector */}
                                {index < steps.length - 1 && (
                                    <motion.div
                                        className="timeline-connector"
                                        initial={{ scaleY: 0 }}
                                        whileInView={{ scaleY: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="benefits-section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Why Choose Our System?</h2>
                        <p>Built for efficiency, designed for growth</p>
                    </motion.div>

                    <div className="benefits-grid">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className="benefit-card card-glass"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="benefit-check">
                                    <CheckCircle size={24} />
                                </div>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="how-cta">
                <div className="container">
                    <motion.div
                        className="cta-card card-glass"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2>Ready to Automate Your Coupons?</h2>
                        <p>Start your free trial today and see the difference</p>
                        <div className="cta-buttons">
                            <Link to="/login" className="btn btn-primary btn-lg">
                                Get Started Free
                            </Link>
                            <Link to="/about/features" className="btn btn-outline btn-lg">
                                Explore Features
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default HowItWorksPage;
