export function animateGradient(elementRef) {
    let angle = 0;
    
    function animate() {
        angle = (angle + 1) % 360;
        if (elementRef.current) {
                // Start of Selection
                elementRef.current.style.background = `linear-gradient(${angle}deg, #800080, #00008B)`;
        }
        window.requestAnimationFrame(animate);
    }
    
    return animate;
} 