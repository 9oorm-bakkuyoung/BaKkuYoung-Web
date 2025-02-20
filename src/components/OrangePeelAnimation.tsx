'use client';

import { motion } from "framer-motion";

const OrangePeelAnimation = () => {
    const peelVariants = {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.3 } },
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <motion.div
                initial="initial"
                animate="animate"
                variants={peelVariants}
                className="relative"
            >
                <motion.div className="absolute" variants={peelVariants}>🍊 귤 껍질 1</motion.div>
                <motion.div className="absolute" variants={peelVariants}>🍊 귤 껍질 2</motion.div>
                <motion.div variants={peelVariants}>🍊 귤 속살</motion.div>
            </motion.div>
        </div>
    );
};

export default OrangePeelAnimation;
