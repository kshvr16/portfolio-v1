import {motion, Variants} from 'framer-motion';

interface LogoProps {
    onSectionClick: (sectionId: string) => void
    itemVariants: Variants
}

export const LogoComponent = ({
                                  onSectionClick,
                                  itemVariants }: LogoProps) => {
    return (
        <div
            onClick={() => onSectionClick('home')}
            className='group'>
            <motion.div
                className='text-xl lg:text-2xl font-bold text-zinc-900 dark:text-zinc-100 font-heading cursor-default group-hover:cursor-[url("/cursors/pointer-light.svg"),pointer] dark:group-hover:cursor-[url("/cursors/pointer-dark.svg"),pointer]'
                variants={itemVariants}
            >
                <span className='text-cyan-600 dark:text-cyan-400'>H</span>
                arshavardhan {' '}
                <span className='text-cyan-600 dark:text-cyan-400'>K</span>ona
            </motion.div>
        </div>
    );
};
