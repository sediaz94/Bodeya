import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import ProductoTableRow from "./ProductosTabletRows";

export default class ProductoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productos: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/productos/')
            .then(res => {
                this.setState({
                    productos: res.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    DataTable() {
        return this.state.productos.map((res, i) => {
            return <ProductoTableRow obj={res} key={i} />;
        });
    }

    render() {
        return (
            <div className="table-wrapper">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Descripción</th>
                            <th>Cantidad</th>
                            <th>Categoría</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.DataTable()}
                    </tbody>
                </Table>
            </div>
        );
    }
}