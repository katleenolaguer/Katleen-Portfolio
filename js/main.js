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

document.addEventListener('click', function (event) {
    const nav = document.querySelector('nav');
    const menu = document.getElementById('navMenu');
    const burger = document.querySelector('.burger-menu');

    if (!nav.contains(event.target)) {
        menu.classList.remove('active');
        burger.classList.remove('active');
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


