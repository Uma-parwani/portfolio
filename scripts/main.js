// ========================================
// Main JavaScript for Portfolio Website
// ========================================

// Typing Animation for Hero Section
const typingTexts = [
    'Frontend Developer',
    'Data Engineer',
    'Full-Stack Developer',
    'Problem Solver',
    'UI/UX Enthusiast'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

function typeText() {
    const typingElement = document.getElementById('typingText');
    if (!typingElement) return;
    
    const currentText = typingTexts[textIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 150;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        typingSpeed = 500; // Pause before next word
    }
    
    setTimeout(typeText, typingSpeed);
}

// Navbar Scroll Effect
function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Mobile Menu Toggle
function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Smooth Scrolling for Navigation Links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Intersection Observer for Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate skill bars when visible
                if (entry.target.classList.contains('skill-item')) {
                    animateSkillBar(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe project cards
    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });
    
    // Observe skill items
    document.querySelectorAll('.skill-item').forEach(item => {
        observer.observe(item);
    });
    
    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
}

// Animate Skill Bars
function animateSkillBar(skillItem) {
    const progressBar = skillItem.querySelector('.skill-progress');
    if (progressBar && !progressBar.classList.contains('animated')) {
        const targetWidth = progressBar.getAttribute('data-progress');
        
        // Use setTimeout to ensure the transition happens after the element is visible
        setTimeout(() => {
            progressBar.style.width = targetWidth + '%';
            progressBar.classList.add('animated');
        }, 100);
    }
}

// Active Navigation Link Highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('.section, #home');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    const navbarHeight = document.getElementById('navbar').offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Parallax Effect for Hero Section (Subtle)
function setupParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        const gradientOrbs = document.querySelectorAll('.gradient-orb');
        
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / 600);
        }
        
        gradientOrbs.forEach((orb, index) => {
            const speed = 0.1 + (index * 0.05);
            orb.style.transform = `translate(${scrolled * speed}px, ${scrolled * speed * 0.5}px)`;
        });
    });
}

// Add Hover Effect to Project Cards
function setupProjectCardEffects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Lazy Loading Images (if needed in future)
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Add Button Click Ripple Effect
function setupButtonEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Add CSS for Ripple Effect
function addRippleStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            transform: scale(0);
            animation: rippleAnimation 0.6s ease-out;
            pointer-events: none;
        }
        
        @keyframes rippleAnimation {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Track User Interactions (optional analytics)
function trackInteractions() {
    // Track project card clicks
    document.querySelectorAll('.project-link').forEach(link => {
        link.addEventListener('click', function() {
            const projectName = this.closest('.project-card').querySelector('.project-title').textContent;
            console.log('Project viewed:', projectName);
            // Here you could send to analytics service
        });
    });
    
    // Track contact button clicks
    document.querySelectorAll('.contact-buttons .btn').forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('Contact button clicked:', this.textContent);
            // Here you could send to analytics service
        });
    });
}

// Performance Optimization: Debounce Scroll Events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize All Features
function init() {
    // Start typing animation
    setTimeout(typeText, 1000);
    
    // Setup mobile menu
    setupMobileMenu();
    
    // Setup smooth scrolling
    setupSmoothScrolling();
    
    // Setup scroll animations
    setupScrollAnimations();
    
    // Setup parallax effect
    setupParallax();
    
    // Create particle system
    createParticleSystem();
    
    // Setup 3D card effects
    setup3DCardEffects();
    
    // Create matrix rain effect (optional)
    createMatrixRain();
    
    // Setup project card effects
    setupProjectCardEffects();
    
    // Setup button effects
    addRippleStyles();
    setupButtonEffects();
    
    // Setup lazy loading
    setupLazyLoading();
    
    // Track interactions
    trackInteractions();
    
    // Debounced scroll handlers
    const debouncedNavbarScroll = debounce(handleNavbarScroll, 10);
    const debouncedActiveNav = debounce(updateActiveNavLink, 10);
    
    window.addEventListener('scroll', () => {
        debouncedNavbarScroll();
        debouncedActiveNav();
    });
    
    // Initial call
    handleNavbarScroll();
    updateActiveNavLink();
}

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Handle Page Visibility Changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Page is hidden');
    } else {
        console.log('Page is visible');
    }
});

// Prevent default behavior for hash links on page load
window.addEventListener('load', () => {
    if (window.location.hash) {
        setTimeout(() => {
            const element = document.querySelector(window.location.hash);
            if (element) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = element.offsetTop - navbarHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }, 100);
    }
});

// Create Particle System for Metaverse Effect
function createParticleSystem() {
    const hero = document.querySelector('.hero-background');
    if (!hero) return;
    
    // Create particles container
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    hero.appendChild(particlesContainer);
    
    // Create particles
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random starting position
        particle.style.left = Math.random() * 100 + '%';
        
        // Random animation duration
        const duration = Math.random() * 10 + 15;
        particle.style.animationDuration = duration + 's';
        
        // Random delay
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        // Random horizontal movement
        const tx = (Math.random() - 0.5) * 200;
        particle.style.setProperty('--tx', tx + 'px');
        
        particlesContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            particle.remove();
            createParticle(); // Create a new one
        }, (duration + 5) * 1000);
    }
    
    // Create initial particles
    for (let i = 0; i < 30; i++) {
        setTimeout(() => createParticle(), i * 200);
    }
}

// 3D Card Tilt Effect
function setup3DCardEffects() {
    const cards = document.querySelectorAll('.project-card, .highlight-item, .skills-category');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

// Matrix Rain Effect (Subtle, in background)
function createMatrixRain() {
    const hero = document.querySelector('.hero-background');
    if (!hero) return;
    
    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.opacity = '0.03';
    canvas.style.pointerEvents = 'none';
    hero.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = hero.offsetWidth;
        canvas.height = hero.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Matrix characters
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    
    function drawMatrix() {
        ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#6366f1';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(drawMatrix, 50);
}

// Cursor Trail Effect
function createCursorTrail() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;
    
    hero.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateTrail() {
        trailX += (mouseX - trailX) * 0.1;
        trailY += (mouseY - trailY) * 0.1;
        
        // Create trail element
        if (Math.random() > 0.9) {
            const trail = document.createElement('div');
            trail.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: radial-gradient(circle, rgba(99, 102, 241, 0.8), transparent);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                left: ${trailX}px;
                top: ${trailY}px;
                animation: fadeOut 1s ease-out forwards;
            `;
            document.body.appendChild(trail);
            setTimeout(() => trail.remove(), 1000);
        }
        
        requestAnimationFrame(animateTrail);
    }
    
    // Add fadeOut animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeOut {
            to {
                opacity: 0;
                transform: scale(0);
            }
        }
    `;
    document.head.appendChild(style);
    
    animateTrail();
}

// Holographic Effect for Images
function addHolographicEffect() {
    const images = document.querySelectorAll('.project-placeholder');
    
    images.forEach(img => {
        img.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xPercent = (x / rect.width) * 100;
            const yPercent = (y / rect.height) * 100;
            
            this.style.background = `
                linear-gradient(
                    ${xPercent}deg,
                    rgba(99, 102, 241, 0.3),
                    rgba(139, 92, 246, 0.3),
                    rgba(236, 72, 153, 0.3)
                )
            `;
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.background = '';
        });
    });
}

// Initialize enhanced effects
function initMetaverseEffects() {
    createCursorTrail();
    addHolographicEffect();
}

// Add to init
window.addEventListener('load', () => {
    initMetaverseEffects();
});

// Console Welcome Message
console.log('%c👋 Welcome to Uma Parwani\'s Portfolio!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cInterested in working together? Let\'s connect!', 'color: #8b5cf6; font-size: 14px;');
console.log('%cEmail: umaparwani1234@gmail.com', 'color: #ec4899; font-size: 12px;');
console.log('%c🌌 Metaverse Mode Activated', 'color: #ec4899; font-size: 16px; font-weight: bold; text-shadow: 0 0 10px rgba(236, 72, 153, 0.8);');
