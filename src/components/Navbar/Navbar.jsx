import "./navbar.css"
import CartWidget from "./CartWidget";


function Navbar() {
    return (
        <nav className="nav">
            <a href="" className="logo">Percu Mundo</a>
            <ul className="menu">
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Productos</a>
                </li>
                <li>
                    <a href="">Sobre nosotros</a>
                </li>
                <li>
                    <a href="">Contacto</a>
                </li>
            </ul>
            <CartWidget/>

        </nav>
    );
}

export default Navbar;