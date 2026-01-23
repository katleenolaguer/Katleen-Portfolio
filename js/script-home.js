function toggleMenu() {
    const menu = document.getElementById('navMenu');
    const burger = document.querySelector('.burger-menu');
    menu.classList.toggle('active');
    burger.classList.toggle('active');
}

function closeMenu() {
    const menu = document.getElementById('navMenu');
    const burger = document.querySelector('.burger-menu');
    menu.classList.remove('active');
    burger.classList.remove('active');
}

function setActive(clickedLink) {
    const allLinks = document.querySelectorAll('nav ul li a');
    allLinks.forEach(link => {
        link.classList.remove('active');
    });

    clickedLink.classList.add('active');

    const targetId = clickedLink.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    const navbar = document.getElementById('navbar');

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`nav ul li a[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('nav ul li a').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
            
            navbar.classList.remove('nav-home', 'nav-about', 'nav-internship', 'nav-works', 'nav-contact');
            
            if (sectionId === 'home1') {
                navbar.classList.add('nav-home');
            } else if (sectionId === 'about2') {
                navbar.classList.add('nav-about');
            } else if (sectionId === 'internship') {
                navbar.classList.add('nav-internship');
            } else if (sectionId === 'works') {
                navbar.classList.add('nav-works');
            } else if (sectionId === 'contact') {
                navbar.classList.add('nav-contact');
            }
        }
    });
});

document.addEventListener('click', function (event) {
    const nav = document.querySelector('nav');
    const menu = document.getElementById('navMenu');
    const burger = document.querySelector('.burger-menu');

    if (!nav.contains(event.target)) {
        menu.classList.remove('active');
        burger.classList.remove('active');
    }
});

window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                closeMenu();
                
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const aboutHeader = document.querySelector('.about-header');
    const aboutCards = document.querySelectorAll('.about-card');
    const sectionHeaders = document.querySelectorAll('.section-header');
    const internshipInfo = document.querySelector('.internship-info');
    const internshipVisual = document.querySelector('.internship-visual');
    const previewCards = document.querySelectorAll('.preview-card');
    
    const contactInfo = document.querySelector('.contact-info h1');
    const infoCards = document.querySelectorAll('.info-card');
    const socialLinks = document.querySelector('.social-links');
    
    const footerLogo = document.querySelector('.footer-logo');
    const contactLinks = document.querySelectorAll('.contact-item');
    const footerBottom = document.querySelector('.footer-bottom');
    const footerBottomText = document.querySelector('.footer-bottom p');

    if (aboutHeader) observer.observe(aboutHeader);
    aboutCards.forEach(card => observer.observe(card));
    sectionHeaders.forEach(header => observer.observe(header));
    if (internshipInfo) observer.observe(internshipInfo);
    if (internshipVisual) observer.observe(internshipVisual);
    previewCards.forEach(card => observer.observe(card));
    
    if (contactInfo) observer.observe(contactInfo);
    infoCards.forEach(card => observer.observe(card));
    if (socialLinks) observer.observe(socialLinks);
    
    if (footerLogo) observer.observe(footerLogo);
    contactLinks.forEach(link => observer.observe(link));
    if (footerBottom) observer.observe(footerBottom);
    if (footerBottomText) observer.observe(footerBottomText);
});

let mouseX = 0.5;
let mouseY = 0.5;

document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX / window.innerWidth;
    mouseY = e.clientY / window.innerHeight;
});

function updateShapes() {
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 30;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        shape.style.transform = `translate(${x}px, ${y}px)`;
    });
    
    requestAnimationFrame(updateShapes);
}

updateShapes();

