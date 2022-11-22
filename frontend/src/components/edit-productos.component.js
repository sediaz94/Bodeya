import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

// editar producto

export default class EditProducto extends Component {
    constructor(props) {
        super(props);

        this.onChangeProductoNombre = this.onChangeProductoNombre.bind(this);
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

    componentDidMount() {
        axios
            .get(
                "http://localhost:4000/productos/edit-producto/" +
                    this.props.match.params.id
            )
            .then((res) => {
                this.setState({
                    nombre: res.data.nombre,
                    precio: res.data.precio,
                    descripcion: res.data.descripcion,
                    cantidad: res.data.cantidad,
                    categoria: res.data.categoria,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    onChangeProductoNombre(e) { 
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

        axios
            .put(
                "http://localhost:4000/productos/update-producto/" +
                    this.props.match.params.id,
                productoObject
            )
            .then((res) => {
                console.log(res.data);
                console.log("Producto actualizado correctamente!");
            })
            .catch((error) => {
                console.log(error);
            });

        // Redireccionando a la lista
        this.props.history.push("/productos-list");
    }

    render() {
        return (
            <div className="form-wrapper">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.nombre}
                            onChange={this.onChangeProductoName}
                        />
                    </Form.Group>
                
                    <Form.Group controlId="Precio">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.precio}
                            onChange={this.onChangeProductoPrecio}
                        />
                    </Form.Group>

                    <Form.Group controlId="Descripcion">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.descripcion}
                            onChange={this.onChangeProductoDescripcion}
                        />
                    </Form.Group>

                    <Form.Group controlId="Cantidad">
                        <Form.Label>Cantidad</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.cantidad}
                            onChange={this.onChangeProductoCantidad}
                        />
                    </Form.Group>

                    <Form.Group controlId="Categoria">
                        <Form.Label>Categoria</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.categoria}
                            onChange={this.onChangeProductoCategoria}
                        />
                    </Form.Group>

                    <Button variant="danger" size="lg" block="block" type="submit">
                        Actualizar Producto
                    </Button>
                </Form>
            </div>
        );
    }
}