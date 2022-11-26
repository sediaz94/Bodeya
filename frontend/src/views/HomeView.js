import { useEffect, useState } from "react";
import axios from "axios";
// import BookCard from '../components/BookCard';
import ProductoCard from '../components/ProductoCard';
// import { getAllBooks } from "../services/bookService";
import { getAllProductos } from "../services/productoService";


const HomeView = () => {
    // const [books, setBooks] = useState([]);
    const [productos, setProductos] = useState([]);
  
    useEffect(() => {
      // getBooks();
      getProductos();

    }, []);
  
    // async function getBooks() {
    //   const response = await getAllBooks();
    //   setBooks(response.data);
    // }
    async function getProductos() {
      const response = await getAllProductos();
      setProductos(response.data);
    }

  return (
    <div className="container mt-5">
      <h2>Home View</h2>
      <div className="conatiner">
        {/* <div className="row">
          {books.map((book) => (
            <div key={book._id} className="my-3 col-lg-4 col-md-6 col-sm-12">
              <BookCard obj={book} />
            </div>
          ))}
        </div> */}

        <div className="row">
          {productos.map((producto) => (
            <div key={producto._id} className="my-3 col-lg-4 col-md-6 col-sm-12">
              <ProductoCard obj={producto} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeView;
