import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./BookCard.css";

const ProductosCard = ({ obj }) => {
  return (
    <Card className="bookCard" style={{ width: "18rem" }}>
      <img src={obj.image} />
      <Card.Body>
        <Card.Title>{obj.nombre}</Card.Title>
        <Card.Text>{obj.dueno}</Card.Text>
        <Card.Text>{obj.precio}</Card.Text>
        <Link className="btn btn-outline-primary" to={`/producto/${obj._id}`}>
          Ver mas
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductosCard;
