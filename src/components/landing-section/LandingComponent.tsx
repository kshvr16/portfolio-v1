'use client';
import React from 'react';
import { motion } from 'framer-motion';
import RoleAnimation from './animations/RoleAnimation';
import ArrowAnimation from './animations/ArrowAnimation';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {faCode} from "@fortawesome/free-solid-svg-icons";

const LandingComponent: React.FC = () => {
    const containerVariants = {
        hidden: {
            opacity: 0,
            scale: 0.98
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
        exit: {
            opacity: 0,
            y: -40,
            transition: {
                staggerChildren: 0.1,
                staggerDirection: -1,
            }
        }
    };

    const itemVariants = {
        hidden: {
            y: 40,
            opacity: 0,
            scale: 0.98
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: [0.215, 0.610, 0.355, 1.000],
            },
        },
        exit: {
            y: -20,
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const slideFromLeft = {
        hidden: { x: -60, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                ease: [0.215, 0.610, 0.355, 1.000],
            }
        },
        exit: {
            x: -30,
            opacity: 0,
            transition: {
                duration: 0.5,
            }
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center flex-grow">

            <motion.div
                className="relative z-10 text-center px-4 py-20 max-w-[90rem] mx-auto flex-grow"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                {/* Greeting - Noto Sans */}
                <motion.div
                    className="text-lg sm:text-xl flex items-center justify-center gap-2 text-zinc-600 dark:text-zinc-400 font-noto-sans font-light tracking-normal whitespace-nowrap"
                    variants={slideFromLeft}
                >
                    HELLO THERE,
                    <motion.span
                        className="inline-block"
                        animate={{
                            rotate: [0, 20, -20, 20, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatDelay: 2,
                        }}
                    >
                        👋
                    </motion.span>
                    I&#39;M
                </motion.div>

                {/* Name - Poppins */}
                <motion.div
                    className="mb-5"
                    variants={itemVariants}
                >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-zinc-900 dark:text-zinc-100 font-noto-sans tracking-normal">
                        Sai Harshavardhan Reddy Kona
                    </h1>
                </motion.div>

                {/* Role Animation */}
                <div className="mb-10">
                    <RoleAnimation/>
                </div>

                {/* CTAs - Noto Sans Mono */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 font-noto-sans-mono font-semibold tracking-tight text-base"
                    variants={itemVariants}
                >
                    <motion.button
                        className="px-6 py-3 rounded-full
                       bg-teal-600/10 dark:bg-teal-400/10
                       text-teal-600 dark:text-teal-400
                       border border-teal-600/20 dark:border-teal-400/20
                       hover:shadow-[0_0_20px_rgba(13,148,136,0.15)] dark:hover:shadow-[0_0_20px_rgba(45,212,191,0.15)]
                       transition-shadow flex items-center gap-2 group whitespace-nowrap"
                        whileHover={{scale: 1.02}}
                        whileTap={{scale: 0.98}}
                    >
                        <span>Explore My Work</span>
                        <span
                            className="w-8 h-8 rounded-full border border-teal-600/20 dark:border-teal-400/20 flex items-center justify-center ml-1">
              <FontAwesomeIcon icon={faCode} className="w-4 h-4 transition-transform group-hover:translate-x-0.5"/>
            </span>
                    </motion.button>

                    <motion.button
                        className="px-6 py-3 rounded-full
                       bg-zinc-100 dark:bg-zinc-900
                       text-teal-600 dark:text-teal-400
                       border border-teal-600/40 dark:border-teal-400/40
                       hover:shadow-[0_0_20px_rgba(45,212,191,0.15)] dark:hover:shadow-[0_0_20px_rgba(94,234,212,0.15)]
                       transition-shadow flex items-center gap-2 group whitespace-nowrap"
                        whileHover={{scale: 1.02}}
                        whileTap={{scale: 0.98}}
                    >
                        <span>Drop a Mail</span>
                        <span
                            className="w-8 h-8 rounded-full border border-teal-600/40 dark:border-teal-400/40 flex items-center justify-center ml-1">
              <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </span>
                    </motion.button>
                </motion.div>

                <div className="h-16"/>

                {/* Arrow Animation */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20">
                    <ArrowAnimation/>
                </div>
            </motion.div>
        </section>
    );
};

export default LandingComponent;
