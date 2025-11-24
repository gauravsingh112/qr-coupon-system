import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { QrCode, Gift, Shield, Zap, TrendingUp, Users, ArrowRight, Sparkles, Mail } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import './LandingPage.css';

const LandingPage = () => {
    const features = [
        {
            icon: QrCode,
            title: 'QR Code Integration',
            description: 'Customers receive QR codes with purchases for instant coupon generation',
            gradient: 'var(--gradient-primary)',
        },
        {
            icon: Gift,
            title: 'Flexible Offers',
            description: 'Create percentage-based or fixed amount discount coupons',
            gradient: 'var(--gradient-accent)',
        },
        {
            icon: Shield,
            title: 'Secure & Trackable',
            description: 'Every coupon is unique and tracked to prevent misuse',
            gradient: 'var(--gradient-success)',
        },
        {
            icon: Zap,
            title: 'WhatsApp Automation',
            description: 'Automatic coupon delivery via WhatsApp messaging',
            gradient: 'var(--gradient-warm)',
        },
        {
            icon: TrendingUp,
            title: 'Analytics Dashboard',
            description: 'Track redemption rates and customer engagement',
            gradient: 'var(--gradient-cool)',
        },
        {
            icon: Users,
            title: 'Multi-Role Access',
            description: 'Separate dashboards for admins and cashiers',
            gradient: 'var(--gradient-purple)',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <div className="landing-page">
            {/* Animated Background */}
            <div className="landing-bg">
                <div className="bg-gradient-animated"></div>
                <div className="bg-dots"></div>
            </div>

            {/* Navigation */}
            <motion.nav
                className="landing-nav"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, type: 'spring' }}
            >
                <div className="container">
                    <div className="nav-content">
                        <motion.div
                            className="logo"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <QrCode size={32} />
                            <span className="gradient-text">QR Coupon</span>
                        </motion.div>

                        <div className="nav-links">
                            <Link to="/about" className="nav-link">About</Link>
                            <Link to="/login" className="btn btn-primary btn-sm">
                                Get Started
                                <ArrowRight size={16} />
                            </Link>
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <motion.div
                        className="hero-content"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants} className="hero-badge">
                            <Sparkles size={16} />
                            <span>WhatsApp-Powered Coupon System</span>
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="hero-title">
                            Transform Your Business with
                            <span className="gradient-text"> Smart QR Coupons</span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="hero-description">
                            Automate coupon generation, delivery, and redemption through WhatsApp.
                            Increase customer retention and boost sales with our intelligent coupon system.
                        </motion.p>

                        <motion.div variants={itemVariants} className="hero-buttons">
                            <Link to="/login" className="btn btn-primary btn-lg">
                                Start Free Trial
                                <ArrowRight size={20} />
                            </Link>
                            <Link to="/about" className="btn btn-outline btn-lg">
                                Learn More
                            </Link>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="hero-stats"
                        >
                            <div className="stat">
                                <h3 className="gradient-text">10K+</h3>
                                <p>Coupons Issued</p>
                            </div>
                            <div className="stat">
                                <h3 className="gradient-text">500+</h3>
                                <p>Active Shops</p>
                            </div>
                            <div className="stat">
                                <h3 className="gradient-text">95%</h3>
                                <p>Customer Satisfaction</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Animated Hero Image */}
                    <motion.div
                        className="hero-image"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.div
                            className="hero-image-card"
                            animate={{
                                y: [0, -20, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        >
                            <div className="qr-mockup">
                                <div className="qr-code-grid">
                                    {[...Array(64)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="qr-pixel"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: Math.random() > 0.5 ? 1 : 0 }}
                                            transition={{
                                                duration: 0.3,
                                                delay: i * 0.01,
                                                repeat: Infinity,
                                                repeatDelay: 2,
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Elements */}
                        <motion.div
                            className="floating-element floating-element-1"
                            animate={{
                                y: [0, -30, 0],
                                rotate: [0, 10, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        >
                            <Gift size={32} />
                        </motion.div>

                        <motion.div
                            className="floating-element floating-element-2"
                            animate={{
                                y: [0, 30, 0],
                                rotate: [0, -10, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        >
                            <Zap size={32} />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Powerful Features for Modern Businesses</h2>
                        <p>Everything you need to run a successful coupon campaign</p>
                    </motion.div>

                    <motion.div
                        className="features-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="feature-card card-glass"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <motion.div
                                    className="feature-icon"
                                    style={{ background: feature.gradient }}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <feature.icon size={24} color="white" />
                                </motion.div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <motion.div
                        className="cta-content card-glass"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Ready to Transform Your Business?</h2>
                        <p>Join hundreds of businesses already using our platform</p>
                        <Link to="/login" className="btn btn-primary btn-lg">
                            Get Started Now
                            <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Creative Footer */}
            <footer className="landing-footer">
                <div className="footer-bg">
                    <div className="footer-orb orb-1"></div>
                    <div className="footer-orb orb-2"></div>
                </div>

                <div className="container footer-content">
                    <div className="footer-grid">
                        {/* Brand & Contact */}
                        <div className="footer-left">
                            <div className="footer-brand">
                                <QrCode size={40} className="text-primary-400" />
                                <span className="brand-text">QR Coupon</span>
                            </div>

                            <div className="contact-box">
                                <div className="contact-title">
                                    <Mail size={20} />
                                    <span>Get in Touch</span>
                                </div>
                                <a href="mailto:sgteamdev@gmail.com" className="mail-button">
                                    <span className="mail-text">sgteamdev@gmail.com</span>
                                    <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* Developers */}
                        <div className="footer-right">
                            <h3 className="section-title">Meet the Creators</h3>
                            <div className="dev-grid">
                                <motion.div
                                    className="holo-card"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="dev-header">
                                        <div className="dev-avatar">GS</div>
                                        <div>
                                            <h4 className="dev-name">Gaurav Singh</h4>
                                            <p className="dev-role">Full Stack Developer</p>
                                        </div>
                                    </div>
                                    <div className="dev-tags">
                                        <span className="dev-tag">React</span>
                                        <span className="dev-tag">Node.js</span>
                                        <span className="dev-tag">UI/UX</span>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="holo-card"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="dev-header">
                                        <div className="dev-avatar">SK</div>
                                        <div>
                                            <h4 className="dev-name">Satyam Kumar</h4>
                                            <p className="dev-role">Android + Full Stack</p>
                                        </div>
                                    </div>
                                    <div className="dev-tags">
                                        <span className="dev-tag">Mobile</span>
                                        <span className="dev-tag">Backend</span>
                                        <span className="dev-tag">API</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; 2025 SG TEAM. All rights reserved.</p>
                        <div className="footer-links">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                            <a href="#">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
