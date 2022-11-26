import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { isAuthenticated } from "../services/authService";
import { getProductoById } from "../services/productoService";
import { Link } from "react-router-dom";

const ProductoDetailsView = () => {
    const user = isAuthenticated();
    const [producto, setProducto] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
        getProducto();
    }, []);
    
    const getProducto = async () => {
        const response = await getProductoById(id);
        setProducto(response.data);
    };
    
    return (
        <div className="container mt-5">
        <h2>{producto.nombre}</h2>
        <h3>{producto.dueno}</h3>
        <img style={{ height: 400 }} src={producto.image} alt="" />
        {/* <p>
            {producto.descripcion?.map((g, i) => (
            <>
                <span key={i}>{g}</span>
                <br />
            </>
            ))}
        </p> */}
        <p>{producto.descripcion}</p>
        <p>{producto.precio}</p>
        


        { user.role === 'ADMIN' && (
            <Link to={`/editProducto/${producto._id}`} className="btn btn-warning">Editar</Link>
        )}
        </div>
    );
    };

export default ProductoDetailsView;