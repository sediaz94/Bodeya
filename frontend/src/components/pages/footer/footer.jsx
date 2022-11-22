// footer de bodeya
import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
    return (
        <footer>
        <div className="footer">
            <Link to="/contacto">Contacto</Link>
            <Link to="/terminos">Terminos y condiciones</Link>
            <Link to="/politicas">Politicas de privacidad</Link>
        </div>
        </footer>
    );
    }

// Path: src\components\pages\home\home.jsx