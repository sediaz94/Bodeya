import { BrowserRouter, Routes, Route } from "react-router-dom";

// view component imports
import HomeView from "./views/HomeView";
// import BookDetailsView from "./views/BookDetailsView";
// import AddBookView from "./views/AddBookView";

// layout components
import NavBar from "./components/NavBar";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import AuthRoute from "./components/AuthRoute";
import AdminRoute from "./components/AdminRoute";
// import EditBookView from "./views/EditBookView";

// import producto
import EditProductoView from "./views/EditProductoView";
import AddproductoView from "./views/AddproductoView";
import ProductoDetailsView from "./views/ProductoDetailsView";





function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route element={<AuthRoute/>}>
          {/* <Route path="/book/:id" element={<BookDetailsView />} />
        </Route > */}

        <Route path="/producto/:id" element={<ProductoDetailsView />} />
        </Route >
          

        <Route element={<AdminRoute/>}>
          {/* <Route path="/addBook" element={<AddBookView />} />
        </Route> */}

        <Route path="/addProducto" element={<AddproductoView />} />
        </Route>


        {/* <Route path="/editBook/:id" element={<EditBookView/>} /> */}
        <Route path="/editProducto/:id" element={<EditProductoView/>} />


        <Route path="/login" element={<LoginView/>}/>
        <Route path="/register" element={<RegisterView/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;





// import "./App.css";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import BookCard from "./components/BookCard";


// function App() {
//   const apiUrl = process.env.REACT_APP_API_URL 
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     getBooks();
//   }, []);


//   async function getBooks() {
//     const response = await axios.get(`${apiUrl}books`);
//     setBooks(response.data);
//   }

//   return (
//     <div className="container mt-5">
//       <h1>Bodeya prueba</h1>
//       {books.map((book) => (
//         <BookCard obj={book}/>
//       ))}
//     </div>
//   );
// }

// export default App;
