import CartWidget from "../CartWidget/CartWidget"
import classes from "./Navbar.css"
import {NavLink, useNavigate} from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <nav className="BarraNav">
            <h2 onClick={() => navigate('/')}>Wemí Cueros</h2>

            <div className="Categorías">
                <NavLink to='/categoría/Carteras' className={({ isActive }) => isActive ? classes.active : ''}>Carteras</NavLink>
                <NavLink to='/categoría/Billeteras' className={({ isActive }) => isActive ? classes.active : ''}>Billeteras</NavLink>
                <NavLink to='/categoría/Accesorios' className={({ isActive }) => isActive ? classes.active : ''}>Accesorios</NavLink>
            </div>
            
            <CartWidget />
        </nav>
    )
}

export default Navbar