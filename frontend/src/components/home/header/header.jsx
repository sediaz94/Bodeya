// importar librerias para que funcione el header
import React from "react";
import { Link } from "react-router-dom";
// importar el logo
// import logo from "./img/logo.png";
// importar el css
import "./header.css";  

// header con el logo , el boton de login, catalogo y usuarios
const Header = () => {
    return (
        <header>
        <div className="logo">
            <Link to="/">
            {/* <img src={logo} alt="logo" /> */}
            <h1>Bodeya!</h1>
            </Link>
        </div>
        <div className="menu">
            <Link to="/catalogo">Catalogo</Link>
            <Link to="/usuarios">Usuarios</Link>
            <Link to="/login">Login</Link>
        </div>
        </header>
    );
    }

export default Header;







