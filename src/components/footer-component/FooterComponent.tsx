import React from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faHeart } from '@fortawesome/free-regular-svg-icons';

export const FooterComponentData = {
    PAGE_OWNER: {
        NAME: 'Harshavardhan Kona',
        URL: 'https://harshavardhankona.com',
    },
    BUILT_USING: {
        NAME: 'Next.js',
        URL: 'https://nextjs.org',
    },
    DEPLOYED_ON: {
        NAME: 'Vercel',
        URL: 'https://vercel.com',
    },
} as const;

export const getYear = () => {
    try {
        return new Date().getFullYear();
    } catch (error) {
        console.error('Error getting current year:', error);
        return 2024;
    }
};

export const FooterComponentStyles = {
    footer: 'bg-zinc-100 dark:bg-zinc-900 p-6',
    container: 'max-w-7xl mx-auto',
    wrapper: 'flex flex-col md:flex-row justify-between items-center text-gray-800 dark:text-gray-200 text-sm gap-4',
    leftSection: 'font-poppins flex flex-row flex-wrap items-center',
    rightSection: 'font-noto-sans flex flex-row flex-wrap items-center justify-center',
    links: 'mx-1 font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors duration-200'
} as const;

const FooterComponent: React.FC = () => {
    return (
        <footer className={FooterComponentStyles.footer} aria-label='Site Footer'>
            <div className={FooterComponentStyles.container}>
                <div className={FooterComponentStyles.wrapper}>
                    <div className={FooterComponentStyles.leftSection}>
                        <FontAwesomeIcon icon={faCopyright} className='h-4 w-4 mr-1' aria-hidden='true' />
                        <span>{getYear()}</span>
                        <Link href={FooterComponentData.PAGE_OWNER.URL} className={FooterComponentStyles.links}>
                            {FooterComponentData.PAGE_OWNER.NAME}
                        </Link>
                        <span>| All rights reserved.</span>
                    </div>

                    <div className={FooterComponentStyles.rightSection}>
                        <span>Built with</span>
                        <FontAwesomeIcon icon={faHeart} className='h-4 w-4 mx-1 text-red-500' aria-hidden='true' />
                        <span>using</span>
                        <Link
                            href={FooterComponentData.BUILT_USING.URL}
                            target='_blank'
                            rel='noopener noreferrer'
                            className={FooterComponentStyles.links}
                            aria-label='Next.js website (opens in new tab)'
                        >
                            {FooterComponentData.BUILT_USING.NAME}
                        </Link>
                        <span>and deployed on</span>
                        <Link
                            href={FooterComponentData.DEPLOYED_ON.URL}
                            target='_blank'
                            rel='noopener noreferrer'
                            className={FooterComponentStyles.links}
                            aria-label='Vercel website (opens in new tab)'
                        >
                            {FooterComponentData.DEPLOYED_ON.NAME}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
