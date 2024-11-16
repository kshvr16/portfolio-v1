import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { NavLinksComponent } from './NavLinksComponent';
import { SocialLinksComponent } from './SocialLinksComponent';

interface MobileMenuProps {
    isOpen: boolean
    activeSection: string
    onSectionClick: (sectionId: string) => void
    itemVariants: Variants
    navVariants: Variants
    socialVariants: Variants
    socialIconVariants: Variants
}

export const MobileMenu = ({
                               isOpen,
                               activeSection,
                               onSectionClick,
                               itemVariants,
                               navVariants,
                               socialVariants,
                               socialIconVariants
                           }: MobileMenuProps) => {
    const menuVariants = {
        hidden: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.2,
                staggerChildren: 0.1
            }
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.2,
                staggerChildren: 0.1,
                staggerDirection: -1
            }
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className='md:hidden absolute top-16 right-0 w-64 rounded-lg bg-zinc-100/95 dark:bg-zinc-800/95 backdrop-blur-sm shadow-lg mx-4'
                    variants={menuVariants}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                >
                    <motion.div className='px-4 pt-4 pb-3 space-y-1'>
                        <NavLinksComponent
                            onSectionClick={onSectionClick}
                            activeSection={activeSection}
                            itemVariants={itemVariants}
                            navVariants={navVariants}
                            isMobile={true}
                        />
                    </motion.div>
                    <Separator className='bg-zinc-300 dark:bg-zinc-600' />
                    <motion.div className='py-2'>
                        <SocialLinksComponent
                            socialVariants={socialVariants}
                            socialIconVariants={socialIconVariants}
                            isMobile={true}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
