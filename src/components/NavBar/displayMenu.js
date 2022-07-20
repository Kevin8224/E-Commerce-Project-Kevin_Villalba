// Function to do fadeIn animation in NavBar
export default function displayMenu(){
    const menu = document.querySelector('.menu');
    menu.classList.remove('d-none');
    menu.classList.add('d-flex');
    menu.style.animation = 'fadeIn 0.4s ease-in forwards';
}
