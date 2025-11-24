import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { QrCode, CheckCircle, XCircle, LogOut, Camera, X, Search } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import './Dashboard.css';

const CashierDashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [isScanning, setIsScanning] = useState(false);
    const [manualCode, setManualCode] = useState('');
    const videoRef = useRef(null);
    const streamRef = useRef(null);

    const handleLogout = () => {
        stopCamera();
        logout();
        navigate('/login');
    };

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
            streamRef.current = stream;
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
            setIsScanning(true);
        } catch (err) {
            console.error("Error accessing camera:", err);
            alert("Could not access camera. Please ensure you have granted permission.");
        }
    };

    const stopCamera = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
            streamRef.current = null;
        }
        setIsScanning(false);
    };

    useEffect(() => {
        return () => {
            stopCamera();
        };
    }, []);

    const handleManualSubmit = (e) => {
        e.preventDefault();
        console.log("Redeeming code:", manualCode);
        // Add redemption logic here
        alert(`Redeeming code: ${manualCode}`);
        setManualCode('');
    };

    const recentCoupons = [
        { code: 'SAVE20-ABC123', status: 'redeemed', amount: '20%' },
        { code: 'FLAT50-XYZ789', status: 'redeemed', amount: '₹50' },
        { code: 'DISC15-QWE456', status: 'pending', amount: '15%' },
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
                            <h2>Cashier Dashboard</h2>
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
                    <h1>Coupon Redemption</h1>
                    <p>Scan and verify customer coupons</p>
                </motion.div>

                <div className="cashier-actions-grid">
                    {/* Scan Section */}
                    <motion.div
                        className="scan-section card-glass"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <AnimatePresence mode="wait">
                            {!isScanning ? (
                                <motion.div
                                    key="start-scan"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="scan-initial-state"
                                >
                                    <div className="scan-icon">
                                        <QrCode size={64} />
                                    </div>
                                    <h3>Scan QR Code</h3>
                                    <p>Click below to activate camera and scan customer coupon</p>
                                    <button onClick={startCamera} className="btn btn-primary btn-lg">
                                        <Camera size={20} />
                                        Start Scanning
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="scanning"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="camera-container"
                                >
                                    <video
                                        ref={videoRef}
                                        autoPlay
                                        playsInline
                                        className="camera-video"
                                    />
                                    <div className="scanning-overlay">
                                        <div className="scan-area">
                                            <div className="scan-line"></div>
                                        </div>
                                    </div>
                                    <button onClick={stopCamera} className="btn-close-camera">
                                        <X size={24} />
                                    </button>
                                    <p className="scanning-text">Align QR code within frame</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Manual Entry Section */}
                    <motion.div
                        className="manual-entry-section card-glass"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="manual-icon">
                            <Search size={48} />
                        </div>
                        <h3>Manual Entry</h3>
                        <p>Enter coupon code manually if scanning fails</p>

                        <form onSubmit={handleManualSubmit} className="manual-input-group">
                            <input
                                type="text"
                                placeholder="Enter Coupon Code"
                                value={manualCode}
                                onChange={(e) => setManualCode(e.target.value.toUpperCase())}
                                className="input-field"
                            />
                            <button type="submit" className="btn btn-secondary" disabled={!manualCode}>
                                Redeem
                            </button>
                        </form>
                    </motion.div>
                </div>

                <motion.div
                    className="recent-section"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <h3>Recent Coupons</h3>
                    <div className="coupons-list">
                        {recentCoupons.map((coupon, index) => (
                            <motion.div
                                key={index}
                                className="coupon-item card-glass"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="coupon-code">{coupon.code}</div>
                                <div className="coupon-amount">{coupon.amount}</div>
                                <div className={`coupon-status ${coupon.status}`}>
                                    {coupon.status === 'redeemed' ? (
                                        <><CheckCircle size={16} /> Redeemed</>
                                    ) : (
                                        <><XCircle size={16} /> Pending</>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default CashierDashboard;
