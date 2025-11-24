import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { BarChart3, Users, Gift, TrendingUp, LogOut } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import './Dashboard.css';

const AdminDashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const stats = [
        { icon: Gift, label: 'Total Coupons', value: '1,234', change: '+12%', color: 'var(--gradient-primary)' },
        { icon: Users, label: 'Active Users', value: '567', change: '+8%', color: 'var(--gradient-accent)' },
        { icon: TrendingUp, label: 'Redemption Rate', value: '85%', change: '+5%', color: 'var(--gradient-success)' },
        { icon: BarChart3, label: 'Revenue Impact', value: '$12.5K', change: '+15%', color: 'var(--gradient-warm)' },
    ];

    return (
        <div className="dashboard-page">
            <div className="dashboard-bg">
                <div className="bg-gradient-animated"></div>
                <div className="bg-dots"></div>
            </div>

            <motion.nav
                className="dashboard-nav"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <div className="container">
                    <div className="nav-content">
                        <div className="dashboard-brand">
                            <h2>Admin Dashboard</h2>
                        </div>
                        <div className="nav-right">
                            <span className="user-name">Welcome, {user?.name}</span>
                            <ThemeToggle />
                            <button onClick={handleLogout} className="btn btn-outline btn-sm">
                                <LogOut size={16} />
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            <div className="dashboard-content container">
                <motion.div
                    className="dashboard-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1>Analytics Overview</h1>
                    <p>Track your coupon performance and customer engagement</p>
                </motion.div>

                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="stat-card card-glass"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <div className="stat-icon" style={{ background: stat.color }}>
                                <stat.icon size={24} color="white" />
                            </div>
                            <div className="stat-info">
                                <p className="stat-label">{stat.label}</p>
                                <h3 className="stat-value">{stat.value}</h3>
                                <span className="stat-change positive">{stat.change}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="dashboard-placeholder card-glass"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <h3>🚀 Full Dashboard Coming Soon!</h3>
                    <p>This is a placeholder for the complete admin dashboard with charts, tables, and advanced analytics.</p>
                </motion.div>
            </div>
        </div>
    );
};

export default AdminDashboard;
