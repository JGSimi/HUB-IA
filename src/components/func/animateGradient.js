import { requestAnimationFrame } from 'react';

function animateGradient() {
    if (typeof animateGradient.angle === 'undefined') {
        animateGradient.angle = 0;
    }

    animateGradient.angle = (animateGradient.angle + 1) % 360;
    const gradient = `linear-gradient(${animateGradient.angle}deg, #4faffa, #400080)`;
    document.querySelector('.animate-gradient').style.background = gradient;
    requestAnimationFrame(animateGradient); 
}

export default animateGradient;