'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";

const GSAPOrangePeel = () => {
    const peel1 = useRef(null);
    const peel2 = useRef(null);
    const orange = useRef(null);

    useEffect(() => {
        const timeline = gsap.timeline();
        timeline
            .from(peel1.current, { y: -100, opacity: 0, duration: 0.5 })
            .from(peel2.current, { x: -100, opacity: 0, duration: 0.5 })
            .from(orange.current, { scale: 0, opacity: 0, duration: 0.5 });
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div ref={peel1} className="absolute">🍊 귤 껍질 1</div>
            <div ref={peel2} className="absolute">🍊 귤 껍질 2</div>
            <div ref={orange}>🍊 귤 속살</div>
        </div>
    );
};

export default GSAPOrangePeel;
