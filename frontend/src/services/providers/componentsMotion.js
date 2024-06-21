// Renders props into parent components for easeOut type animations when it reaches the viewport
export const componentsMotion = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: {
        duration: 0.7,
        delay: 0.4,
        ease: "easeOut"
    }
};