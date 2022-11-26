import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

export const getAllProductos = async () => {
  const response = await axios.get(`${apiUrl}/productos`);
  return response;
};

export const getProductoById = async (id) => {
  const response = await axios.get(`${apiUrl}/productos/producto/${id}`);
  return response;
};

export const createProducto = (productoObj) => {
  axios.post(`${apiUrl}/productos/producto`, productoObj);
};

export const editProducto = (productoObj, id) => {
  axios.put(`${apiUrl}/productos/producto/${id}`, productoObj);
};

export const deleteProducto = (id) => {
  axios.delete(`${apiUrl}/productos/producto/${id}`);
};