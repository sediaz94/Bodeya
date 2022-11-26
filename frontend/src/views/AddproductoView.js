import { useState } from "react";
import { useNavigate } from "react-router";
import { createProducto } from "../services/productoService";
import "./Form.css";

const AddproductoView = () => {
  const navigate = useNavigate();
  const [producto, setProducto] = useState({
    nombre: "",
    dueno: "",
    precio: "",
    descripcion: "",
    image: "",
  });

  const handleChange = (event) => {
    setProducto({
      ...producto,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // producto.descripcion = producto.descripcion.split(",");
    const response = await createProducto(producto);
    navigate("/");
    setProducto({
      nombre: "",
      dueno: "",
      precio: "",
      descripcion: "",
      image: "",
    });
  };

  return (
    <div className="container mt-5">
      <form className="form">
        <h2>Agregar producto</h2>
        <input
          onChange={handleChange}
          value={producto.nombre}
          name="nombre"
          className="form-control"
          placeholder="Nombre"
          type="text"
        />
        <input
          name="dueno"
          onChange={handleChange}
          value={producto.dueno}
          className="form-control"
          placeholder="Dueño"
          type="text"
        />
        <input
          name="precio"
          onChange={handleChange}
          value={producto.precio}
          className="form-control"
          placeholder="Precio"
          type="text"
        />
        <input
          name="descripcion"
          onChange={handleChange}
          value={producto.descripcion}
          className="form-control"
          placeholder="Descripcion"
          type="text"
        />
        <input
          name="image"
          onChange={handleChange}
          value={producto.image}
          className="form-control"
          placeholder="imgUrl"
          type="text"
        />
        <button
          onClick={handleSubmit}
          className="btn btn-outline-dark form-control"
        >
          Agregar
        </button>
      </form>
    </div>
  );
};

export default AddproductoView;
