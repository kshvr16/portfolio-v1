import { motion, Variants } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SocialLinks } from '@/data/page-data/data';

interface SocialLinksProps {
    socialVariants: Variants
    socialIconVariants: Variants
    isMobile?: boolean
}

export const SocialLinksComponent = ({
                                         socialVariants,
                                         socialIconVariants,
                                         isMobile = false
                                     }: SocialLinksProps) => {
    return (
        <motion.div
            className={`flex items-center ${isMobile ? 'justify-center space-x-4 py-4' : 'space-x-4'}`}
            variants={socialVariants}
        >
            {SocialLinks.map((social) => (
                <motion.a
                    key={social.name}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`${
                        isMobile
                            ? 'text-zinc-800 dark:text-zinc-200 hover:text-teal-600 dark:hover:text-teal-400'
                            : 'text-zinc-700 dark:text-zinc-300 hover:text-teal-600 dark:hover:text-teal-400'
                    } transition-colors`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    variants={socialIconVariants}
                >
                    <FontAwesomeIcon icon={social.icon} className='w-5 h-5' />
                </motion.a>
            ))}
        </motion.div>
    );
};
