// importar las librerias necesarias para mostrar el catalogo
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Path: src\components\pages\catalogo\producto.jsx


// Mostrar los productos de la categoria seleccionada
const Catalogo = ({ match }) => {
    const [productos, setProductos] = useState([]);
    const [categoria, setCategoria] = useState({});
    
    useEffect(() => {
        const categoriaId = match.params.categoriaId;
        const categoria = categorias.find(c => c.id === categoriaId);
        setCategoria(categoria);
        setProductos(categoria.productos);
    }, [match.params.categoriaId]);
    
    return (
        <div className="catalogo">
        <h1>{categoria.nombre}</h1>
        <div className="productos">
            {productos.map(p => (
            <Producto key={p.id} producto={p} />
            ))}
        </div>
        </div>
    );
    }

// Mostrar los productos de la categoria seleccionada
const Producto = ({ producto }) => {
    return (
        <div className="producto">
        <Link to={`/producto/${producto.id}`}>
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p>${producto.precio}</p>
        </Link>
        </div>
    );
    }

    