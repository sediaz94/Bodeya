import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default class ProductosTabletRows extends Component {
  constructor(props) {
    super(props);
    this.deleteProducto = this.deleteProducto.bind(this);
  }

  deleteProducto() {
    axios
      .delete(
        "http://localhost:4000/productos/delete-producto/" + this.props.obj._id
      )
      .then((res) => {
        alert("Estudiante borrado con éxito");
      })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.nombre}</td>
        <td>{this.props.obj.precio}</td>
        <td>{this.props.obj.descripcion}</td>
        <td>{this.props.obj.cantidad}</td>
        <td>{this.props.obj.categoria}</td>
        <td>
          <Link
            className="edit-link"
            path={"product/:id"}
            to={"/edit-producto/" + this.props.obj._id}
          >
            Editar
          </Link>
          <Button onClick={this.deleteProducto} size="sm" variant="danger">
            Borrar
          </Button>
        </td>
      </tr>
    );
  }
}
