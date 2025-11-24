import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Shield, User, Lock, Mail, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import ThemeToggle from '../components/ThemeToggle';
import './LoginPage.css';

const LoginPage = () => {
    const [role, setRole] = useState(null); // null, 'admin', 'cashier'
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleRoleSelect = (selectedRole) => {
        setRole(selectedRole);
    };

    const handleBack = () => {
        setRole(null);
        setEmail('');
        setPassword('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            login({
                email,
                role,
                name: role === 'admin' ? 'Admin User' : 'Cashier User',
            });
            setLoading(false);
            navigate(role === 'admin' ? '/admin/dashboard' : '/cashier/dashboard');
        }, 1500);
    };

    return (
        <div className="login-page">
            {/* Animated Background */}
            <div className="login-bg">
                <div className="bg-gradient-animated"></div>
                <div className="bg-grid"></div>
            </div>

            {/* Theme Toggle */}
            <div className="login-theme-toggle">
                <ThemeToggle />
            </div>

            {/* Back to Home */}
            <motion.button
                className="back-home-btn"
                onClick={() => navigate('/')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <ArrowLeft size={20} />
                Back to Home
            </motion.button>

            <div className="login-container">
                <AnimatePresence mode="wait">
                    {!role ? (
                        // Role Selection
                        <motion.div
                            key="role-selection"
                            className="role-selection"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div
                                className="login-header"
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                            >
                                <h1>Welcome Back</h1>
                                <p>Select your role to continue</p>
                            </motion.div>

                            <div className="role-cards">
                                <motion.div
                                    className="role-card card-glass"
                                    onClick={() => handleRoleSelect('admin')}
                                    whileHover={{ scale: 1.05, y: -10 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <motion.div
                                        className="role-icon role-icon-admin"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <Shield size={48} />
                                    </motion.div>
                                    <h3>Admin</h3>
                                    <p>Full system access and analytics</p>
                                    <div className="role-features">
                                        <span>✓ Dashboard</span>
                                        <span>✓ Reports</span>
                                        <span>✓ Settings</span>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="role-card card-glass"
                                    onClick={() => handleRoleSelect('cashier')}
                                    whileHover={{ scale: 1.05, y: -10 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <motion.div
                                        className="role-icon role-icon-cashier"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <User size={48} />
                                    </motion.div>
                                    <h3>Cashier</h3>
                                    <p>Coupon redemption and scanning</p>
                                    <div className="role-features">
                                        <span>✓ Scan QR</span>
                                        <span>✓ Redeem</span>
                                        <span>✓ Verify</span>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ) : (
                        // Login Form
                        <motion.div
                            key="login-form"
                            className="login-form-container"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.button
                                className="back-btn"
                                onClick={handleBack}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ArrowLeft size={20} />
                            </motion.button>

                            <div className="login-form-header">
                                <motion.div
                                    className={`role-badge role-badge-${role}`}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 200 }}
                                >
                                    {role === 'admin' ? <Shield size={24} /> : <User size={24} />}
                                </motion.div>
                                <h2>{role === 'admin' ? 'Admin' : 'Cashier'} Login</h2>
                                <p>Enter your credentials to continue</p>
                            </div>

                            <form onSubmit={handleSubmit} className="login-form">
                                <motion.div
                                    className="input-group"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <label className="input-label">
                                        <Mail size={16} />
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        className="input"
                                        placeholder="admin@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </motion.div>

                                <motion.div
                                    className="input-group"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <label className="input-label">
                                        <Lock size={16} />
                                        Password
                                    </label>
                                    <div className="password-input-wrapper">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            className="input"
                                            placeholder="••••••••"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                        <button
                                            type="button"
                                            className="password-toggle"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </button>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="form-footer"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <label className="checkbox-label">
                                        <input type="checkbox" />
                                        <span>Remember me</span>
                                    </label>
                                    <a href="#" className="forgot-link">Forgot password?</a>
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    className="btn btn-primary btn-lg login-submit-btn"
                                    disabled={loading}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {loading ? (
                                        <motion.div
                                            className="loading-spinner"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                        />
                                    ) : (
                                        'Sign In'
                                    )}
                                </motion.button>
                            </form>

                            <motion.div
                                className="login-divider"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <span>Demo Credentials</span>
                            </motion.div>

                            <motion.div
                                className="demo-credentials"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                <p><strong>Email:</strong> {role}@demo.com</p>
                                <p><strong>Password:</strong> demo123</p>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Floating Particles */}
            <div className="particles">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="particle"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                        }}
                        animate={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            repeatType: 'reverse',
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default LoginPage;
