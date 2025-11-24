import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, Heart, Target, Users, TrendingUp, Award } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import './AboutPage.css';

const AboutPage = () => {
    const stats = [
        { icon: Users, value: '500+', label: 'Active Businesses' },
        { icon: TrendingUp, value: '10K+', label: 'Coupons Issued' },
        { icon: Award, value: '95%', label: 'Satisfaction Rate' },
        { icon: Zap, value: '24/7', label: 'Support' },
    ];

    const values = [
        {
            icon: Heart,
            title: 'Customer First',
            description: 'We build solutions that put your customers at the center of everything',
            color: 'var(--gradient-accent)',
        },
        {
            icon: Zap,
            title: 'Innovation',
            description: 'Constantly evolving with cutting-edge technology and features',
            color: 'var(--gradient-primary)',
        },
        {
            icon: Target,
            title: 'Results Driven',
            description: 'Focused on delivering measurable growth for your business',
            color: 'var(--gradient-success)',
        },
    ];

    return (
        <div className="about-page">
            {/* Background */}
            <div className="about-bg">
                <div className="bg-gradient-animated"></div>
                <div className="bg-dots"></div>
            </div>

            {/* Navigation */}
            <motion.nav
                className="about-nav"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <div className="container">
                    <div className="nav-content">
                        <Link to="/" className="back-link">
                            <ArrowLeft size={20} />
                            Back to Home
                        </Link>
                        <div className="nav-right">
                            <Link to="/about/how-it-works" className="nav-link">How It Works</Link>
                            <Link to="/about/features" className="nav-link">Features</Link>
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <motion.div
                        className="about-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Revolutionizing Customer
                            <span className="gradient-text"> Loyalty Programs</span>
                        </motion.h1>
                        <motion.p
                            className="about-hero-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            We're on a mission to help businesses build stronger relationships with their customers
                            through intelligent, automated coupon systems powered by WhatsApp and QR technology.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <motion.div
                        className="stats-grid"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="stat-card card-glass"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <motion.div
                                    className="stat-icon"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <stat.icon size={32} />
                                </motion.div>
                                <h3 className="gradient-text">{stat.value}</h3>
                                <p>{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="story-section">
                <div className="container">
                    <div className="story-grid">
                        <motion.div
                            className="story-content"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2>Our Story</h2>
                            <p>
                                Founded in 2024, QR Coupon System was born from a simple observation: businesses
                                were losing customers due to complicated loyalty programs and manual coupon systems.
                            </p>
                            <p>
                                We saw an opportunity to leverage the ubiquity of WhatsApp and the simplicity of
                                QR codes to create a seamless experience for both businesses and customers.
                            </p>
                            <p>
                                Today, we're proud to serve hundreds of businesses, helping them increase customer
                                retention by an average of 40% through our automated coupon system.
                            </p>
                        </motion.div>

                        <motion.div
                            className="story-image"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="story-image-card card-glass">
                                <motion.div
                                    className="story-graphic"
                                    animate={{
                                        y: [0, -20, 0],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    <div className="graphic-circle gradient-primary"></div>
                                    <div className="graphic-circle gradient-accent"></div>
                                    <div className="graphic-circle gradient-success"></div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Our Core Values</h2>
                        <p>The principles that guide everything we do</p>
                    </motion.div>

                    <div className="values-grid">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="value-card card-glass"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <motion.div
                                    className="value-icon"
                                    style={{ background: value.color }}
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <value.icon size={28} color="white" />
                                </motion.div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta">
                <div className="container">
                    <motion.div
                        className="cta-card card-glass"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2>Ready to Get Started?</h2>
                        <p>Join hundreds of businesses already using our platform</p>
                        <div className="cta-buttons">
                            <Link to="/login" className="btn btn-primary btn-lg">
                                Start Free Trial
                            </Link>
                            <Link to="/about/how-it-works" className="btn btn-outline btn-lg">
                                See How It Works
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
