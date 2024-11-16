'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const roles = [
    'Software Engineer',
    'Machine Learning Engineer',
    'Full Stack Developer',
    'Computer Vision Engineer',
    'Software Developer',
    'Computer Vision Researcher',
    'Backend API Developer',
    'NLP Researcher'
];

const roleAcronyms: { [key: string]: string } = {
    'Software Engineer': 'SWE',
    'Machine Learning Engineer': 'ML',
    'Full Stack Developer': 'FSD',
    'Computer Vision Engineer': 'CV',
    'Software Developer': 'SDE',
    'Computer Vision Researcher': 'CV',
    'Backend API Developer': 'API',
    'NLP Researcher': 'NLP'
};

const specialChars = "~!@#$%^SWE&*()_-+=SDE{}|[]\\:\";NLP'<>CV?,FSD./API";

interface ScrambleTextProps {
    text: string;
    className?: string;
    onComplete: () => void;
}

const ScrambleText: React.FC<ScrambleTextProps> = ({ text, className, onComplete }) => {
    const acronym = roleAcronyms[text] || '';
    const [displayText, setDisplayText] = useState(text);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    const scramble = useCallback(() => {
        if (!hasMounted) return;

        let iteration = 0;
        const maxIterations = text.length * 4;

        const interval = setInterval(() => {
            setDisplayText(
                text
                    .split("")
                    .map((char, index) => {
                        if (char === ' ') return ' ';
                        if (index < iteration / 4) return text[index];
                        if (index < acronym.length && text.indexOf(char) <= acronym.length) {
                            return Math.random() > 0.7 ? acronym[index] : specialChars[Math.floor(Math.random() * specialChars.length)];
                        }
                        return specialChars[Math.floor(Math.random() * specialChars.length)];
                    })
                    .join("")
            );

            iteration += 1;

            if (iteration > maxIterations) {
                clearInterval(interval);
                setDisplayText(text);
                onComplete();
            }
        }, 70);

        return () => clearInterval(interval);
    }, [text, acronym, onComplete, hasMounted]);

    useEffect(() => {
        if (!hasMounted) return;
        const cleanup = scramble();
        return cleanup;
    }, [scramble, hasMounted]);

    return <span className={className}>{displayText}</span>;
};

const RoleAnimation: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextRole = useCallback(() => {
        setIsAnimating(true);
    }, []);

    const handleScrambleComplete = useCallback(() => {
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % roles.length);
            setIsAnimating(false);
        }, 1500);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            nextRole();
        }, 4000);

        return () => clearInterval(interval);
    }, [nextRole]);

    const scaleBlurVariants = {
        hidden: {
            scale: 1.2,
            opacity: 0,
            filter: "blur(8px)",
            y: 20
        },
        visible: {
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
            }
        },
        exit: {
            scale: 0.8,
            opacity: 0,
            filter: "blur(8px)",
            y: -20,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={currentIndex}
                variants={scaleBlurVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-xl sm:text-2xl md:text-3xl text-cyan-600 dark:text-cyan-400 font-space-grotesk tracking-wide whitespace-nowrap"
            >
                <ScrambleText
                    text={roles[currentIndex]}
                    className="inline-block"
                    onComplete={handleScrambleComplete}
                />
            </motion.div>
        </AnimatePresence>
    );
};

export default RoleAnimation;
