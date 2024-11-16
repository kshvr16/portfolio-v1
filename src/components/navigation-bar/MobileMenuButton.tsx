import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import {motion, Variants} from 'framer-motion';

interface MobileMenuButtonProps {
    isOpen: boolean
    onToggle: () => void
    variants: Variants
    custom: number
}

export const MobileMenuButton = ({ isOpen, onToggle, variants, custom }: MobileMenuButtonProps) => {
    return (
        <motion.button
            className='text-zinc-700 dark:text-zinc-300 hover:text-cyan-600 dark:hover:text-cyan-400'
            onClick={onToggle}
            whileTap={{ scale: 0.9 }}
            initial='hidden'
            animate='visible'
            variants={variants}
            custom={custom}
        >
            <FontAwesomeIcon icon={isOpen ? faX : faBars} className='w-6 h-6' />
        </motion.button>
    );
};
