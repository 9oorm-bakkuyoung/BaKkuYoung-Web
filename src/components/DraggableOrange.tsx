'use client';

import { motion } from "framer-motion";

const DraggableOrange = () => {
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <motion.div
                    drag
                    dragConstraints={{left: -100, right: 100, top: -100, bottom: 100}}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    className="p-4 text-4xl cursor-pointer"
                >
                    🍊
                </motion.div>
            </div>

        </>
    );
};

export default DraggableOrange;
