import {motion, Variants} from 'framer-motion';
import { NavLinks } from '@/data/page-data/data';

interface NavLinksProps {
    onSectionClick: (sectionId: string) => void
    activeSection: string
    itemVariants: Variants
    navVariants: Variants
    isMobile?: boolean
}

export const NavLinksComponent = ({
                                      onSectionClick,
                                      activeSection,
                                      itemVariants,
                                      navVariants,
                                      isMobile = false
                                  }: NavLinksProps) => {
    return (
        <motion.div
            className={`${isMobile ? 'flex flex-col space-y-2' : 'flex items-center space-x-6 font-noto-sans-mono'}`}
            variants={navVariants}
        >
            {NavLinks.map((link) => (
                <motion.div key={link.name} variants={itemVariants}>
                    <button
                        onClick={() => onSectionClick(link.href)}
                        className={`
                            ${isMobile
                            ? 'text-zinc-800 dark:text-zinc-200 hover:text-cyan-600 dark:hover:text-cyan-400 w-full text-center py-2'
                            : 'text-zinc-700 dark:text-zinc-300 hover:text-cyan-600 dark:hover:text-cyan-400'
                        } 
                            transition-colors relative group
                            ${activeSection === link.href ?
                            (isMobile ? 'text-cyan-600 dark:text-cyan-400' : 'text-cyan-600 dark:text-cyan-400')
                            : ''
                        }
                        `}
                    >
                        {link.name}
                        <span className='absolute left-0 -bottom-1 w-full h-0.5 bg-cyan-600 dark:bg-cyan-400 transform scale-x-0 transition-transform group-hover:scale-x-100' />
                    </button>
                </motion.div>
            ))}
        </motion.div>
    );
};
