import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });

    return (
        <motion.div
            data-testid="scroll-progress-bar"
            className="fixed top-0 left-0 right-0 h-[2px] z-[70] origin-left bg-gradient-to-r from-gold-champagne via-gold to-gold-muted"
            style={{ scaleX }}
        />
    );
}
