// Add floating animation with random delays
document.addEventListener('DOMContentLoaded', () => {
    const socialLinks = document.querySelectorAll('.social-link');

    socialLinks.forEach((link, index) => {
        // Add floating animation with staggered delays
        setTimeout(() => {
            link.classList.add('animate');
        }, index * 200);
    });

    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.style.cssText = `
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: #4ECDC4;
                    border-radius: 50%;
                    pointer-events: none;
                    left: ${x}px;
                    top: ${y}px;
                    animation: particle 1s ease-out forwards;
                `;
        document.body.appendChild(particle);

        setTimeout(() => particle.remove(), 1000);
    }

    // Add particle effect on hover
    socialLinks.forEach(link => {
        link.addEventListener('mousemove', (e) => {
            if (Math.random() < 0.1) { // Limit particle creation
                createParticle(e.clientX, e.clientY);
            }
        });
    });
});

// Add this CSS for particle animation
const style = document.createElement('style');
style.textContent = `
            @keyframes particle {
                0% {
                    transform: scale(1) translate(0, 0);
                    opacity: 1;
                }
                100% {
                    transform: scale(0) translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
                    opacity: 0;
                }
            }
            .symbol {
                color: #b2d8d8;
                font-weight: initial; 
                opacity: 0.2;
            }
        `;
document.head.appendChild(style);


// ------background------

// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Create floating symbols background
const symbols = '∫∑∏√πλ{}[]()<>+-*/&|!;#include while(true) if(math==code)';

for (let i = 0; i < 50; i++) {
    const symbol = document.createElement('div');
    symbol.className = 'symbol';
    symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    symbol.style.fontSize = Math.random() * 20 + 10 + 'px';
    symbol.style.left = Math.random() * 100 + 'vw';
    symbol.style.top = Math.random() * 100 + 'vh';
    document.body.appendChild(symbol);

    gsap.to(symbol, {
        y: 'random(-100, 100)',
        x: 'random(-100, 100)',
        rotation: 'random(-180, 180)',
        duration: 'random(3, 6)',
        repeat: -2,
        yoyo: true,
        ease: 'none'
    });
}

function scrollToPage(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Animate elements on scroll
gsap.from('.intro-container', {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: '.intro-container',
        start: 'top center',
        end: 'bottom center',
    }
});


// gsap.from('.project-card', {
//     opacity: 0,
//     y: 50,
//     duration: 0.8,
//     stagger: 0.2,
//     scrollTrigger: {
//         trigger: '.projects-grid',
//         start: 'top center',
//         end: 'bottom center',
//     }
// });

// -------------------

// Advanced 3D Background Symbols Generator
function generate3DBackground() {
    const symbols = [
        '∫', '∑', '∏', '√', 'π', 'λ',
        '{', '}', '[', ']', '(', ')',
        '<', '>', '+', '-', '*', '/',
        '&', '|', '!', ';', '#',
        'int', 'float', 'void', 'class',
        'def', 'import', 'return',
        '∞', '≈', '≠', '∇', 'Σ', 'Π', 'SELECT', 'def'
    ];

    const container = document.body;

    function createSymbol() {
        const symbol = document.createElement('div');
        symbol.className = 'symbol-3d';

        // Randomize symbol content
        symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];

        // 3D-like styling
        symbol.style.cssText = `
            position: fixed;
            color: rgba(78, 205, 196, 0.2);
            font-size: ${Math.random() * 40 + 10}px;
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
            transform-style: preserve-3d;
            transform: 
                translateZ(${Math.random() * 200 - 100}px) 
                rotateX(${Math.random() * 360}deg) 
                rotateY(${Math.random() * 360}deg) 
                rotateZ(${Math.random() * 360}deg);
            opacity: ${Math.random() * 0.5 + 0.1};
            pointer-events: none;
            z-index: -1;
        `;

        container.appendChild(symbol);

        // Animate with GSAP for smooth 3D movement
        gsap.to(symbol, {
            duration: Math.random() * 10 + 5,
            translateZ: `${Math.random() * 400 - 200}px`,
            rotateX: `${Math.random() * 720 - 360}deg`,
            rotateY: `${Math.random() * 720 - 360}deg`,
            opacity: 0,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        });
    }

    // Create multiple symbols
    for (let i = 0; i < 100; i++) {
        createSymbol();
    }
}

// Initialize background on page load
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
    generate3DBackground();
});


// ----------------cube animation 

document.addEventListener('mousemove', (event) => {
    const cube = document.querySelector('.cube');
    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;
    const rotateX = y * 30;
    const rotateY = x * 30;
    cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

document.addEventListener('mousemove', (event) => {
    const cube = document.querySelector('.cube');
    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;
    cube.style.transform = `rotateX(${y * 30}deg) rotateY(${x * 30}deg)`;
});

document.querySelector('.cube').addEventListener('click', () => {
    window.location.href = 'coding-journey.html';
});

// // --------curve animation --------
// document.addEventListener('DOMContentLoaded', (event) => {
//     const curve = document.querySelector('.moving-curve');
//     curve.style.animationPlayState = 'running';
// });

// document.querySelector('.chart-container').addEventListener('click', () => {
//     window.location.href = 'coding-journey.html';
// });


// SKIILS---------------

// Animation for skill cards on scroll
gsap.from('.skill-card', {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.skills-container',
        start: 'top center+=100',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
    }
});

// Hover effect for skill items
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, {
            duration: 0.3,
            scale: 1.05,
            backgroundColor: 'rgba(31, 41, 55, 0.9)',
            ease: 'power1.out'
        });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            duration: 0.3,
            scale: 1,
            backgroundColor: 'rgba(26, 34, 51, 0.7)',
            ease: 'power1.out'
        });
    });
});


// explore color

const exploreElement = document.querySelector('.explore');
const colors = ['#997a8d', '#aa98a9', '#b39eb5', '#777696', '#796878'];

let colorIndex = 0;

setInterval(() => {
  exploreElement.style.color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}, 5000);

window.addEventListener('scroll', function() {
    const socialContainer = document.querySelector('.social-container');
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        socialContainer.classList.remove('hidden');
    }
});