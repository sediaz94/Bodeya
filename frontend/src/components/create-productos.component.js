import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class CreateProducto extends Component {
    constructor(props) {
        super(props);
        
        this.onChangeProductoName = this.onChangeProductoName.bind(this);
        this.onChangeProductoPrecio = this.onChangeProductoPrecio.bind(this);
        this.onChangeProductoDescripcion = this.onChangeProductoDescripcion.bind(this);
        this.onChangeProductoCantidad = this.onChangeProductoCantidad.bind(this);
        this.onChangeProductoCategoria = this.onChangeProductoCategoria.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // State
        this.state = {
            nombre: "",
            precio: "",
            descripcion: "",
            cantidad: "",
            categoria: "",
        };
    }

    onChangeProductoName(e) {
        this.setState({ nombre: e.target.value });
    }

    onChangeProductoPrecio(e) {
        this.setState({ precio: e.target.value });
    }

    onChangeProductoDescripcion(e) {
        this.setState({ descripcion: e.target.value });
    }

    onChangeProductoCantidad(e) {
        this.setState({ cantidad: e.target.value });
    }

    onChangeProductoCategoria(e) {
        this.setState({ categoria: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const productoObject = {
            nombre: this.state.nombre,
            precio: this.state.precio,
            descripcion: this.state.descripcion,
            cantidad: this.state.cantidad,
            categoria: this.state.categoria,
        };

        axios.post("http://localhost:4000/productos/create-producto", productoObject)
            .then((res) => console.log(res.data));
        this.setState({ nombre: "", precio: "", descripcion: "", cantidad: "", categoria: "" });
    }

    render() {
        return (
            <div className="form-wrapper">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" value={this.state.nombre} onChange={this.onChangeProductoName} />
                    </Form.Group>

                    <Form.Group controlId="Precio">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control type="text" value={this.state.precio} onChange={this.onChangeProductoPrecio} />
                    </Form.Group>

                    <Form.Group controlId="Descripcion">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control type="text" value={this.state.descripcion} onChange={this.onChangeProductoDescripcion} />
                    </Form.Group>

                    <Form.Group controlId="Cantidad">
                        <Form.Label>Cantidad</Form.Label>
                        <Form.Control type="text" value={this.state.cantidad} onChange={this.onChangeProductoCantidad} />
                    </Form.Group>

                    <Form.Group controlId="Categoria">
                        <Form.Label>Categoria</Form.Label>
                        <Form.Control type="text" value={this.state.categoria} onChange={this.onChangeProductoCategoria} />
                    </Form.Group>

                    <Button variant="danger" size="lg" block="block" type="submit">
                        Crear Producto
                    </Button>
                </Form>
            </div>
        );
    }
}

