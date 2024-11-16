'use client';
import React, { useEffect } from 'react';
import { motion, useScroll, useTransform, useAnimationControls } from 'framer-motion';

const Particles = () => (
    <>{[...Array(6)].map((_, i) => (
        <motion.circle
            key={i}
            cx="160"
            cy="256"
            r="2"
            className="fill-cyan-400/40"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 0.6, 0],
                x: [(i % 2 ? 50 : -50) * Math.random(), 0],
                y: [50 * Math.random(), -50],
            }}
            transition={{
                duration: 1,
                delay: 0.1 * i,
                ease: "easeOut"
            }}
        />
    ))}</>
);

const MotionLines = () => (
    <>{[...Array(3)].map((_, i) => (
        <motion.line
            key={i}
            x1="160"
            y1={256 + i * 20}
            x2="160"
            y2={286 + i * 20}
            strokeWidth="2"
            className="stroke-cyan-400/20"
            initial={{ opacity: 0 }}
            animate={{
                opacity: [0, 0.5, 0],
                pathLength: [0, 1],
                y: [0, 20]
            }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
            }}
        />
    ))}</>
);

const ArrowAnimation: React.FC = () => {
    const controls = useAnimationControls();
    const { scrollYProgress } = useScroll();

    // Enhanced transform values
    const splitDistance = useTransform(scrollYProgress,
        [0, 0.2, 0.8, 1],
        [0, 30, 30, 0]
    );

    const arrowOpacity = useTransform(scrollYProgress,
        [0, 0.2, 0.8, 1],
        [1, 0, 0, 1]
    );

    const arrowRotation = useTransform(scrollYProgress,
        [0, 0.2, 0.8, 1],
        [0, 15, 15, 0]
    );

    const colorIntensity = useTransform(scrollYProgress,
        [0, 0.5, 1],
        [1, 1.2, 1]
    );

    useEffect(() => {
        const sequence = async () => {
            await controls.start("visible");
            await controls.start("idle");
        };
        sequence();
    }, [controls]);

    const containerVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                when: "beforeChildren"
            }
        },
        idle: {
            y: [0, -8, 0],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const pathVariants = {
        hidden: (direction: number) => ({
            x: 100 * direction, // Increased initial split distance
            opacity: 0
        }),
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 60, // Reduced stiffness for more visible motion
                damping: 12,   // Reduced damping for more bounce
                mass: 1.5      // Added mass for more weight to the motion
            }
        }
    };

    return (
        <motion.div
            className="absolute"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            style={{
                opacity: arrowOpacity,
                rotate: arrowRotation,
                filter: `brightness(${colorIntensity.get()})`
            }}
        >

            {/* Light trail effect container */}
            <motion.div
                className="absolute inset-0 blur-md"
                animate={{
                    opacity: [0, 0.2, 0],
                    scale: [0.8, 1.1, 0.8],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                }}
            >
                <svg width='24' height='24' viewBox='0 0 320 512' className='w-12 h-12'>
                    <path
                        className='fill-cyan-400/30'
                        d='M160 256.14l-56.51 56.47-96.44-96.15a23.77 23.77.0 01-.18-33.61l.18-.18 22.59-22.51a23.94 23.94.0 0133.85.0z'
                    />
                    <path
                        className='fill-teal-400/30'
                        d='M313 182.57 290.21 160a23.94 23.94.0 00-33.85.0L103.47 312.61 143 352l.06.06a24 24 0 0033.93-.16L313 216.36l.18-.17a23.78 23.78.0 00-.18-33.62z'
                    />
                </svg>
            </motion.div>

            <motion.svg
                width='24'
                height='24'
                viewBox='0 0 320 512'
                className='w-12 h-12 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]'
            >
                {/* Left half */}
                <motion.path
                    className='fill-teal-600 dark:fill-teal-400'
                    d='M160 256.14l-56.51 56.47-96.44-96.15a23.77 23.77.0 01-.18-33.61l.18-.18 22.59-22.51a23.94 23.94.0 0133.85.0z'
                    variants={pathVariants}
                    custom={-1}
                    style={{
                        x: splitDistance.get() * -1,
                        transition: {
                            x: { type: "spring", stiffness: 300, damping: 30 }
                        }
                    }}
                />

                {/* Right half */}
                <motion.path
                    className='fill-cyan-600 dark:fill-cyan-400'
                    d='M313 182.57 290.21 160a23.94 23.94.0 00-33.85.0L103.47 312.61 143 352l.06.06a24 24 0 0033.93-.16L313 216.36l.18-.17a23.78 23.78.0 00-.18-33.62z'
                    variants={pathVariants}
                    custom={1}
                    style={{
                        x: splitDistance,
                        transition: {
                            x: { type: "spring", stiffness: 300, damping: 30 }
                        }
                    }}
                />

                {/* Assembly glow effect */}
                <motion.circle
                    cx="160"
                    cy="256"
                    r="100"
                    className="fill-cyan-400/20"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                        scale: [0, 2, 0],
                        opacity: [0, 0.5, 0]
                    }}
                    transition={{
                        duration: 1.5,
                        delay: 0.3,
                        ease: "easeOut"
                    }}
                />

                {/* Particles */}
                <Particles />

                {/* Motion Lines */}
                <MotionLines />

                {/* Impact ring for re-entry */}
                <motion.circle
                    cx="160"
                    cy="256"
                    r="120"
                    className="stroke-cyan-400/30"
                    fill="none"
                    strokeWidth="2"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{
                        scale: [0.5, 1.5],
                        opacity: [0, 0.5, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 1
                    }}
                />
            </motion.svg>

        </motion.div>
    );
};


export default ArrowAnimation;
