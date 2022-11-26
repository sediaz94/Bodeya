import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { deleteProducto, editProducto, getProductoById } from "../services/productoService";

const EditProductoView = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [producto, setProducto] = useState({
        nombre: '',
        dueno: '',
        precio: '',
        descripcion: '',
        image: '',
    });

    useEffect(() => {
        getProductoById(id)
            .then(response => setProducto(response.data))
            .catch(error => console.log(error));
    }, [])

    const handleChange = (event) => {
        setProducto({
            ...producto,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await editProducto(producto, id);
        setProducto({
            nombre: '',
            dueno: '',
            precio: '',
            descripcion: '',
            image: '',
        });
        navigate("/")
    }

    const handleDelete = async (event) => {
        event.preventDefault();
        const choice = window.confirm("Estas seguro que quieres eliminar este producto?");
        if (!choice) return;
        deleteProducto(id)
        navigate("/");
    }

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit} className="form">
                <h2>Editar Producto</h2>
                <input
                    onChange={handleChange}
                    value={producto.nombre}
                    name="nombre"
                    className="form-control"
                    placeholder="Nombre"
                    type="text"
                />
                <input
                    onChange={handleChange}
                    value={producto.dueno}
                    name="dueno"
                    className="form-control"
                    placeholder="Dueño"
                    type="text"
                />
                <input
                    onChange={handleChange}
                    value={producto.precio}
                    name="precio"
                    className="form-control"
                    placeholder="Precio"
                    type="text"
                />
                <input
                    onChange={handleChange}
                    value={producto.descripcion}
                    name="descripcion"
                    className="form-control"
                    placeholder="Descripcion"
                    type="text"
                />
                <input
                    onChange={handleChange}
                    value={producto.image}
                    name="image"
                    className="form-control"
                    placeholder="ImmUrl"
                    type="text"
                />
                <button className="form-control btn btn-outline-dark mb-2">Guardar Edicion</button>
                <button onClick={handleDelete} className="form-control btn btn-outline-danger">Eliminar Producto</button>
            </form>
        </div>
    )
}

export default EditProductoView;
