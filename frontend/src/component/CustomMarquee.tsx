import React from "react";
import Marquee from "react-fast-marquee";

interface CustomMarqueeProps {
    children: React.ReactNode
    speed: number
}

export const CustomMarquee: React.FC<CustomMarqueeProps> = ({ children, speed }) => {
    return <Marquee speed={speed}>
        {children}
    </Marquee>
}