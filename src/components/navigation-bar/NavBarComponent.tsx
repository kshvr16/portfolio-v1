'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Separator } from '@/components/ui/separator';
import { NavLinks } from '@/data/page-data/data';

import { LogoComponent } from './LogoComponent';
import { NavLinksComponent } from './NavLinksComponent';
import { SocialLinksComponent } from './SocialLinksComponent';
import { ThemeToggleComponent } from './ThemeToggleComponent';
import { MobileMenuButton } from './MobileMenuButton';
import { MobileMenu } from './MobileMenu';

const NavBarComponent: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('')
    const { setTheme, theme: currentTheme } = useTheme()
    const navRef = useRef<HTMLDivElement>(null)
    const controls = useAnimation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)

            // Check which section is currently in view
            NavLinks.forEach(({ href }) => {
                const section = document.getElementById(href)
                if (section) {
                    const rect = section.getBoundingClientRect()
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(href)
                    }
                }
            })
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    useEffect(() => {
        const startAnimation = async () => {
            await controls.start('visible')
        }
        startAnimation()
    }, [controls]);

    const navVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2,
                delayChildren: 0.5,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const socialVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1,
            }
        },
    };

    const socialIconVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    };

    const mobileRightIconsVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: (custom: number) => ({
            opacity: 1,
            x: 0,
            transition: { delay: custom * 0.2, duration: 0.5 }
        }),
    };

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
        setIsOpen(false)
    };

    const toggleTheme = () => {
        setTheme(currentTheme === 'light' ? 'dark' : 'light')
    };

    return (
        <motion.nav
            ref={navRef}
            className={`fixed w-full z-50 transition-colors duration-300 ${
                scrolled ? 'bg-zinc-100/80 dark:bg-zinc-900/80 backdrop-blur-sm' : 'bg-transparent'
            }`}
            initial='hidden'
            animate={controls}
            variants={navVariants}
        >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-14 md:h-20'>
                    <LogoComponent
                        onSectionClick={scrollToSection}
                        itemVariants={itemVariants} />

                    {/* Desktop Navigation */}
                    <div className='hidden md:flex font-semibold items-center space-x-4'>
                        <NavLinksComponent
                            onSectionClick={scrollToSection}
                            activeSection={activeSection}
                            itemVariants={itemVariants}
                            navVariants={navVariants}
                        />

                        <Separator orientation='vertical' className='h-6' />

                        <SocialLinksComponent
                            socialVariants={socialVariants}
                            socialIconVariants={socialIconVariants}
                        />

                        <ThemeToggleComponent onToggle={toggleTheme} />
                    </div>

                    {/* Mobile Navigation */}
                    <div className='md:hidden font-semibold flex items-center space-x-2'>
                        <ThemeToggleComponent
                            onToggle={toggleTheme}
                            variants={mobileRightIconsVariants}
                            custom={0}
                        />
                        <MobileMenuButton
                            isOpen={isOpen}
                            onToggle={() => setIsOpen(!isOpen)}
                            variants={mobileRightIconsVariants}
                            custom={1}
                        />
                    </div>
                </div>
            </div>

            <MobileMenu
                isOpen={isOpen}
                activeSection={activeSection}
                onSectionClick={scrollToSection}
                itemVariants={itemVariants}
                navVariants={navVariants}
                socialVariants={socialVariants}
                socialIconVariants={socialIconVariants}
            />
        </motion.nav>
    );
};

export default NavBarComponent;
