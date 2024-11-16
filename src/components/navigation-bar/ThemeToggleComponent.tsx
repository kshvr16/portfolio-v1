import { Button } from '@/components/ui/button';
import {motion, Variants} from 'framer-motion';

import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useSpring, animated } from '@react-spring/web';

interface ThemeToggleProps {
    onToggle: () => void
    variants?: Variants
    custom?: number
    isDark?: boolean
}

export const ThemeToggleComponent = ({ onToggle, variants, custom, isDark = false }: ThemeToggleProps) => {
    const properties = useSpring({
        to: {
            rotate: isDark ? 360 : 0,
        },
        config: {
            tension: 200,
            friction: 15,
        }
    });

    const buttonContent = (
        <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-teal-300 to-cyan-300 dark:from-teal-900 dark:to-cyan-900 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out group"
        >
            <div className="absolute inset-0 rounded-xl bg-white/50 dark:bg-black/50 opacity-0 group-hover:opacity-20 transition-opacity" />

            <animated.div
                style={properties}
                className="relative w-full h-full flex items-center justify-center"
            >
                <Sun
                    className="h-7 w-7 absolute text-amber-500 dark:text-amber-300 transition-all duration-300 rotate-0 scale-100 dark:scale-0 dark:-rotate-90"
                    strokeWidth={2.5}
                />
                <Moon
                    className="h-7 w-7 absolute text-violet-700 dark:text-violet-300 transition-all duration-300 rotate-90 scale-0 dark:scale-100 dark:rotate-0"
                    strokeWidth={2.5}
                />
            </animated.div>

            <span className="sr-only">Toggle theme</span>
        </Button>
    );

    return variants ? (
        <motion.div
            initial='hidden'
            animate='visible'
            variants={variants}
            custom={custom}
        >
            {buttonContent}
        </motion.div>
    ) : buttonContent;
};
