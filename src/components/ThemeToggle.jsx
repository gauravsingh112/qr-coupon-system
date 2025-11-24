import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
        >
            <motion.div
                className="theme-toggle-track"
                animate={{
                    backgroundColor: isDark ? '#1e293b' : '#e0e7ff',
                }}
                transition={{ duration: 0.3 }}
            >
                <motion.div
                    className="theme-toggle-thumb"
                    animate={{
                        x: isDark ? 28 : 0,
                        rotate: isDark ? 360 : 0,
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 30,
                    }}
                >
                    <motion.div
                        initial={false}
                        animate={{
                            scale: isDark ? 0 : 1,
                            opacity: isDark ? 0 : 1,
                            rotate: isDark ? 180 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                        className="theme-icon"
                    >
                        <Sun size={16} color="#f59e0b" />
                    </motion.div>

                    <motion.div
                        initial={false}
                        animate={{
                            scale: isDark ? 1 : 0,
                            opacity: isDark ? 1 : 0,
                            rotate: isDark ? 0 : -180,
                        }}
                        transition={{ duration: 0.2 }}
                        className="theme-icon theme-icon-absolute"
                    >
                        <Moon size={16} color="#818cf8" />
                    </motion.div>
                </motion.div>

                {/* Animated Stars for Dark Mode */}
                {isDark && (
                    <>
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="star"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{
                                    scale: [0, 1, 1, 0],
                                    opacity: [0, 1, 1, 0],
                                    x: [0, Math.random() * 20 - 10],
                                    y: [0, Math.random() * 20 - 10],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                    repeatDelay: 0.5,
                                }}
                                style={{
                                    left: `${20 + i * 15}%`,
                                    top: `${30 + i * 10}%`,
                                }}
                            />
                        ))}
                    </>
                )}

                {/* Animated Sun Rays for Light Mode */}
                {!isDark && (
                    <>
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="sun-ray"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.1,
                                }}
                                style={{
                                    transform: `rotate(${i * 45}deg)`,
                                    left: '50%',
                                    top: '50%',
                                }}
                            />
                        ))}
                    </>
                )}
            </motion.div>
        </motion.button>
    );
};

export default ThemeToggle;
