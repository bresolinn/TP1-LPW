document.addEventListener('DOMContentLoaded', () => {

    const currentUrl = window.location.href;


    const navItems = document.querySelectorAll('.nav-bar a');


    navItems.forEach((item) => {
        if (item.href === currentUrl) {
            item.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const currentUrl = window.location.href;

    navItems.forEach(item => {
        if (item.href === currentUrl) {
            item.classList.add('active');
        }
    });
});