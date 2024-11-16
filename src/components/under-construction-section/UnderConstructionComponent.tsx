'use client';
import React, { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';
import animationData from '@/data/lottie-animations/under-maintenance.json';

interface UnderConstructionProps {
    width?: string | number;
    height?: string | number;
    className?: string;
}

const UnderConstructionComponent: React.FC<UnderConstructionProps> = ({
                                                                          width = '500px',
                                                                          height = '500px',
                                                                          className = ''
                                                                      }) => {
    const animationContainer = useRef<HTMLDivElement>(null);
    const animationInstance = useRef<AnimationItem | null>(null);

    useEffect(() => {
        if (!animationContainer.current) return;

        animationInstance.current = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData,
        });

        return () => {
            if (animationInstance.current) {
                animationInstance.current.destroy();
            }
        };
    }, []);

    return (
        <section id={'under-construction'}
                 className='min-h-screen pt-16 py-6 flex flex-col items-center justify-center gap-4 bg-zinc-100 dark:bg-zinc-900'>
            <div
                ref={animationContainer}
                style={{width, height}}
                className={`flex items-center justify-center ${className}`}
            />
            <h2 className='text-5xl font-space-grotesk tracking-wide font-bold text-zinc-900 dark:text-zinc-100'>
                Work In Progress
            </h2>
            <p className='text-gray-500 font-noto-sans-mono text-center max-w-md'>
                I&#39;m working on something amazing. Please check back soon!
            </p>
        </section>
    );
};

export default UnderConstructionComponent;
