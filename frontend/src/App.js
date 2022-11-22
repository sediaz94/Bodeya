import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateStudent from "./components/create-student.component";
import EditStudent from "./components/edit-student.component";
import StudentList from "./components/student-list.component";

import CreateProducto from "./components/create-productos.component";
import EditProducto from "./components/edit-productos.component";
import ProductoList from "./components/productos-list.component";

// importando imagen
import hero from "./assets/img/hero.jpg";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-student"} className="nav-link">
                  Bodeyá
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-student"} className="nav-link">
                    Crear Usuario
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/create-producto"} className="nav-link">
                    Registrar productos
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/student-list"} className="nav-link">
                    Listar Usuarios
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/productos-list"} className="nav-link">
                    Listar Productos
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        {/* hero section */}
        <section className="hero">
          <div className="image-container">
            <img src={hero} alt="hero" />
          </div>
          <div className="banner">
            <h1> Bodeyá</h1>
            <p>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.
            </p>
            <button className="btn-hero">Comprar</button>
          </div>
        </section>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <CreateStudent {...props} />}
                  />
                  <Route
                    exact
                    path="/create-student"
                    component={(props) => <CreateStudent {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-student/:id"
                    component={(props) => <EditStudent {...props} />}
                  />
                  <Route
                    exact
                    path="/student-list"
                    component={(props) => <StudentList {...props} />}
                  />
                  <Route
                    exact
                    path="/create-producto"
                    component={(props) => <CreateProducto {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-producto/:id"
                    component={(props) => <EditProducto {...props} />}
                  />
                  <Route
                    exact
                    path="/productos-list"
                    component={(props) => <ProductoList {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
