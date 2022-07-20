import { Link, NavLink } from 'react-router-dom';

import displayMenu from './displayMenu.js';
import closeMenu from './closeMenu.js';
import CartWidget from '../CartWidget/CartWidget.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';


// Using FontAwesome icons
const bars = <FontAwesomeIcon icon={faBars} className="text-white"/>;
const xIcon = <FontAwesomeIcon icon={faX} className="text-white"/>;

export default function NavBar(){
    return(
        <nav className="nav bg-dark d-flex align-items-center">
            <h3 className='title text-white'><Link className='Link' to={`/`}>Sábrium</Link><b className='h6'>Comidas rápidas a domicilio</b></h3>
            <Link className='home' to={`/`}>Inicio</Link>
            <CartWidget />
            <button className="activeMenu d-flex justify-content-center align-items-center p-2 rounded-circle position-fixed" onClick={displayMenu}>
                {bars}
            </button>
            <div className='menu d-none flex-column text-center position-fixed'>
                <button className='closeMenu d-flex justify-content-center align-items-center position-absolute text-white' onClick={closeMenu}>
                    {xIcon}
                </button>
                    <NavLink className={({ isActive }) => isActive ? 'linkActive' : 'food-index'} to={`/categoria/pizzas`}>Pizzas</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'linkActive' : 'food-index'} to={`/categoria/hamburguesas`}>Hamburguesas</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'linkActive' : 'food-index'} to={`/categoria/empanadas`}>Empanadas</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'linkActive' : 'food-index'} to={`/categoria/refrescos`}>Refrescos</NavLink>
            </div>
        </nav>
    )
}