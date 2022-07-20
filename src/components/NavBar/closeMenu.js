// Function to do fadeOut animation in NavBar
export default function closeMenu() {
    const menu = document.querySelector('.menu');
    menu.style.animation = 'fadeOut 0.5s ease-in-out forwards';
    setTimeout(() => {
        menu.classList.remove('d-flex');
        menu.classList.add('d-none');
    }, 490);
}