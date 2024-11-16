'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faMugHot, faPlane, faTerminal,
    faRocket, faCode, faLink, faPaperPlane
} from "@fortawesome/free-solid-svg-icons"
import { faUserCircle, faFile, faLightbulb } from "@fortawesome/free-regular-svg-icons"
import {
    faReact, faPython, faAws, faGithub as faGithubBrand,
    faJs, faNodeJs, faDocker
} from "@fortawesome/free-brands-svg-icons"

const currentProjects = [
    {
        icon: faRocket,
        title: "AI-Powered Task Manager",
        description: "Developing a smart task management app that uses AI to prioritize and suggest tasks based on user behavior and deadlines.",
        techStack: ['React', 'Node.js', 'Python', 'Docker'],
        techIcons: [faReact, faNodeJs, faPython, faDocker],
        demoLink: "https://demo.project.com",
        githubLink: "https://github.com/username/project"
    },
    {
        icon: faCode,
        title: "Open Source Contribution",
        description: "Actively contributing to and maintaining a popular open-source library for data visualization in React. data visualization in React.",
        techStack: ['React', 'JavaScript', 'AWS'],
        techIcons: [faReact, faJs, faAws],
        demoLink: "https://demo.project.com",
        githubLink: "https://github.com/username/project"
    },
]

const technicalInterests = [
    { icon: faReact, color: "#61DAFB", text: "Building Full Stack Web Apps" },
    { icon: faPython, color: "#3776AB", text: "Researching CV Models" },
]

const personalInterests = [
    { icon: faMugHot, text: "Coffee enthusiast", color: "#6D4C41" },
    { icon: faPlane, text: "Love traveling", color: "#42A5F5" },
]

const keywords = [
    'Software Engineer',
    'Full Stack',
    'AI solutions',
    'Computer Vision',
    'NLP',
    'machine learning',
    'web applications'
]

const introText = [
    "Hi there! 👋 I'm Harshavardhan Kona, a passionate Software Engineer with a love for building Full Stack Web applications and developing AI solutions, particularly in Computer Vision (CV) and Natural Language Processing (NLP). and Natural Language Processing (NLP) and Natural Language Processing (NLP) and Natural Language.",
    "With over 3.5 years of experience, I specialize in designing and developing web applications and AI-driven solutions. My expertise spans across full-stack development, machine learning implementation, and cloud infrastructure management. and cloud infrastructure management. and cloud infrastructure management. and cloud."
]

const highlightKeywords = (text: string): (string | JSX.Element)[] => {
    const parts = text.split(new RegExp(`(${keywords.join('|')})`, 'gi'))
    return parts.map((part, index) =>
        keywords.some(keyword => keyword.toLowerCase() === part.toLowerCase())
            ? <span key={index} className="text-teal-600 dark:text-teal-400 font-semibold">{part}</span>
            : part
    )
}

export default function Component() {
    const [typedText, setTypedText] = useState<string[]>(['', ''])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [visibleTechnicalInterests, setVisibleTechnicalInterests] = useState(0)
    const [visiblePersonalInterests, setVisiblePersonalInterests] = useState(0)
    const [visibleProjects, setVisibleProjects] = useState(0)
    const [isImageHovered, setIsImageHovered] = useState(false)

    const titleRef = useRef<HTMLHeadingElement>(null)
    const firstRowRef = useRef<HTMLDivElement>(null)
    const secondRowRef = useRef<HTMLDivElement>(null)
    const projectsRef = useRef<HTMLDivElement>(null)
    const technicalInterestsRef = useRef<HTMLDivElement>(null)
    const personalInterestsRef = useRef<HTMLDivElement>(null)

    const titleControls = useAnimation()
    const firstRowControls = useAnimation()
    const secondRowControls = useAnimation()
    const projectsControls = useAnimation()
    const technicalInterestsControls = useAnimation()
    const personalInterestsControls = useAnimation()

    const titleInView = useInView(titleRef, { once: true, amount: 0.8 })
    const firstRowInView = useInView(firstRowRef, { once: true, amount: 0.8 })
    const secondRowInView = useInView(secondRowRef, { once: true, amount: 0.8 })
    const projectsInView = useInView(projectsRef, { once: true, amount: 0.8 })
    const technicalInterestsInView = useInView(technicalInterestsRef, { once: true, amount: 0.8 })
    const personalInterestsInView = useInView(personalInterestsRef, { once: true, amount: 0.8 })

    useEffect(() => {
        if (titleInView) {
            void titleControls.start({ x: 0, opacity: 1, transition: { duration: 0.5 } })
        }
    }, [titleInView, titleControls])

    useEffect(() => {
        if (firstRowInView) {
            void firstRowControls.start({ scale: 1, opacity: 1, transition: { duration: 0.5 } })
            setCurrentIndex(0)
        }
    }, [firstRowInView, firstRowControls])

    useEffect(() => {
        if (secondRowInView) {
            void secondRowControls.start({ scale: 1, opacity: 1, transition: { duration: 0.5 } })
            startAnimations()
        }
    }, [secondRowInView, secondRowControls])

    useEffect(() => {
        if (projectsInView) {
            void projectsControls.start({ scale: 1, opacity: 1, transition: { duration: 0.5 } })
        }
    }, [projectsInView, projectsControls])

    useEffect(() => {
        if (technicalInterestsInView) {
            void technicalInterestsControls.start({ scale: 1, opacity: 1, transition: { duration: 0.5 } })
        }
    }, [technicalInterestsInView, technicalInterestsControls])

    useEffect(() => {
        if (personalInterestsInView) {
            void personalInterestsControls.start({ scale: 1, opacity: 1, transition: { duration: 0.5 } })
        }
    }, [personalInterestsInView, personalInterestsControls])

    useEffect(() => {
        if (currentIndex < Math.max(introText[0].length, introText[1].length)) {
            const timer = setTimeout(() => {
                setTypedText(prev => [
                    introText[0].slice(0, currentIndex + 1),
                    introText[1].slice(0, currentIndex + 1)
                ])
                setCurrentIndex(prev => prev + 1)
            }, 30)

            return () => clearTimeout(timer)
        }
    }, [currentIndex])

    const startAnimations = () => {
        const animationSteps = [1, 2, 3, 4]
        animationSteps.forEach((step, index) => {
            setTimeout(() => {
                setVisibleTechnicalInterests(step)
                setVisiblePersonalInterests(step)
                setVisibleProjects(step)
            }, (index + 1) * 800)
        })
    }

    return (
        <section id="about" className="min-h-screen w-full bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 font-noto-sans overflow-hidden pt-20 py-6">
            <div className="max-w-[80rem] mx-auto flex flex-col gap-6">
                <motion.h2
                    ref={titleRef}
                    className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 font-poppins tracking-wide text-center mb-2"
                    initial={{ opacity: 0, x: -100 }}
                    animate={titleControls}
                >
                    About Me
                </motion.h2>

                {/* Top Row - Profile and Introduction */}
                <motion.div
                    ref={firstRowRef}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={firstRowControls}
                >
                    {/* Profile Section */}
                    <motion.div
                        className="bg-zinc-200 dark:bg-zinc-800 rounded-xl shadow-lg overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                    >
                        <motion.div
                            className="relative aspect-square w-48 mx-auto mt-8 mb-6"
                            animate={{
                                rotate: isImageHovered ? [0, -5, 5, -5, 0] : 0,
                                scale: isImageHovered ? 1.05 : 1
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 p-1">
                                <div className="absolute inset-0 rounded-full overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                                    <motion.div
                                        className="w-full h-full rounded-full flex items-center justify-center text-6xl text-zinc-400 bg-zinc-600 dark:text-zinc-600 dark:bg-zinc-800"
                                        onHoverStart={() => setIsImageHovered(true)}
                                        onHoverEnd={() => setIsImageHovered(false)}
                                    >
                                        <FontAwesomeIcon icon={faUserCircle} />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="p-6 flex gap-4 justify-center">
                            <motion.button
                                className="flex-1 rounded-full border-2 border-cyan-500 px-4 py-3 text-sm font-semibold text-cyan-500
                                         transition-all hover:bg-cyan-500 hover:text-zinc-900 hover:dark:text-zinc-100 flex items-center justify-center space-x-2
                                         hover:shadow-lg hover:shadow-cyan-500/20"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4 mb-1" />
                                <span>Connect</span>
                            </motion.button>

                            <motion.button
                                className="flex-1 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-3
                                         text-sm font-semibold text-zinc-900 dark:text-zinc-100 transition-all hover:shadow-lg
                                         hover:shadow-cyan-500/20 flex items-center justify-center space-x-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FontAwesomeIcon icon={faFile} className="w-4 h-4" />
                                <span>Resume</span>
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Introduction Text Section */}
                    <motion.div
                        className="lg:col-span-2 bg-zinc-200 dark:bg-zinc-800 p-6 rounded-xl shadow-lg"
                        whileHover={{ scale: 1.01 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                    >
                        <div className="space-y-4">
                            {introText.map((text, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start space-x-3 bg-zinc-300/50 dark:bg-zinc-700/50 rounded-lg p-4 relative overflow-hidden"
                                    whileHover={{ x: 8, backgroundColor: "rgba(255,255,255,0.1)" }}
                                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                >
                                    <motion.div
                                        className="flex-shrink-0"
                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <FontAwesomeIcon
                                            icon={index === 0 ? faTerminal : faLightbulb}
                                            className={`w-5 h-5 ${index === 0 ? 'text-cyan-600 dark:text-cyan-400 ' : 'text-teal-600 dark:text-teal-400'} 
                                                     filter drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]`}
                                        />
                                    </motion.div>
                                    <p className="text-zinc-800 dark:text-zinc-200 leading-relaxed text-md font-space-grotesk">
                                        {highlightKeywords(typedText[index])}
                                        <span className="text-cyan-600 dark:text-cyan-400 animate-pulse">_</span>
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Bottom Row - Projects and Interests */}
                <motion.div
                    ref={secondRowRef}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={secondRowControls}
                >
                    {/* Projects Section */}
                    <motion.div
                        ref={projectsRef}
                        className="lg:col-span-2 bg-zinc-200 dark:bg-zinc-800 p-6 rounded-xl shadow-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={projectsControls}
                    >
                        <h3 className="text-xl font-semibold mb-4 text-cyan-600 dark:text-cyan-400 font-poppins">Current Projects</h3>
                        <div className="grid gap-6">
                            <AnimatePresence>
                                {currentProjects.slice(0, visibleProjects).map((project, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-zinc-300/50 dark:bg-zinc-700/50 rounded-lg p-4 hover-zinc-300/70 dark:hover:bg-zinc-700/70 transition-all"
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        whileHover={{ x: 8, backgroundColor: "rgba(255,255,255,0.1)" }}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center space-x-3">
                                                <FontAwesomeIcon
                                                    icon={project.icon}
                                                    className="w-6 h-6 text-cyan-600 dark:text-cyan-400 flex-shrink-0"
                                                />
                                                <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{project.title}</h4>
                                            </div>
                                            <div className="flex space-x-4">
                                                <motion.a
                                                    href={project.demoLink}
                                                    className="flex items-center space-x-2 text-sm text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300"
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    <FontAwesomeIcon icon={faLink} className="w-4 h-4" />
                                                    <span>Live Demo</span>
                                                </motion.a>
                                                <motion.a
                                                    href={project.githubLink}
                                                    className="flex items-center space-x-2 text-sm text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300"
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    <FontAwesomeIcon icon={faGithubBrand} className="w-4 h-4" />
                                                    <span>Source Code</span>
                                                </motion.a>
                                            </div>
                                        </div>
                                        <p className="text-zinc-700 dark:text-zinc-300 text-sm text-justify mb-2">{project.description}</p>

                                        {/* Tech Stack */}
                                        <div className="flex items-center gap-3">
                                            {project.techIcons.map((icon, i) => (
                                                <motion.div
                                                    key={i}
                                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <FontAwesomeIcon
                                                        icon={icon}
                                                        className="w-5 h-5 text-zinc-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 "
                                                    />
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* Technical and Personal Interests */}
                    <div className="flex flex-col gap-4">
                        {/* Technical Interests */}
                        <motion.div
                            ref={technicalInterestsRef}
                            className="bg-zinc-200 dark:bg-zinc-800 p-4 rounded-xl shadow-lg"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={technicalInterestsControls}
                        >
                            <h3 className="text-xl font-semibold mb-4 text-cyan-600 dark:text-cyan-400 font-poppins">Technical Interests</h3>
                            <div className="grid gap-2">
                                <AnimatePresence>
                                    {technicalInterests.slice(0, visibleTechnicalInterests).map((interest, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex items-center space-x-3 bg-zinc-300/50 dark:bg-zinc-700/50 rounded-lg p-3 hover:bg-zinc-300/70 dark:hover:bg-zinc-700/70 transition-all"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            whileHover={{ x: 8, backgroundColor: "rgba(255,255,255,0.1)" }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <motion.div
                                                whileHover={{ scale: 1.2, rotate: 360 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <FontAwesomeIcon
                                                    icon={interest.icon}
                                                    className="w-6 h-6 flex-shrink-0 transition-colors duration-300 text-teal-600 dark:text-teal-400"
                                                    // style={{ color: interest.color }}
                                                />
                                            </motion.div>
                                            <span className="text-zinc-700 dark:text-zinc-300 text-sm">{interest.text}</span>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </motion.div>

                        {/* Personal Interests */}
                        <motion.div
                            ref={personalInterestsRef}
                            className="bg-zinc-200 dark:bg-zinc-800 p-4 rounded-xl shadow-lg"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={personalInterestsControls}
                        >
                            <h3 className="text-xl font-semibold mb-4 text-cyan-600 dark:text-cyan-400 font-poppins">Outside of Work</h3>
                            <div className="grid gap-2">
                                <AnimatePresence>
                                    {personalInterests.slice(0, visiblePersonalInterests).map((interest, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex items-center space-x-3 bg-zinc-300/50 dark:bg-zinc-700/50 rounded-lg p-3 hover:bg-zinc-300/70 dark:hover:bg-zinc-700/70 transition-all"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            whileHover={{
                                                x: 8,
                                                backgroundColor: `rgba(${parseInt(interest.color.slice(1, 3), 16)}, ${parseInt(interest.color.slice(3, 5), 16)}, ${parseInt(interest.color.slice(5, 7), 16)}, 0.2)`
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <motion.div
                                                whileHover={{
                                                    scale: 1.2,
                                                    rotate: 360,
                                                }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <FontAwesomeIcon
                                                    icon={interest.icon}
                                                    className="w-6 h-6 text-cyan-600 dark:text-cyan-400 flex-shrink-0"
                                                />
                                            </motion.div>
                                            <span className="text-zinc-700 dark:text-zinc-300 text-sm">{interest.text}</span>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
