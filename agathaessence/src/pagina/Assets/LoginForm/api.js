import axios from "axios";

const API_URL = "http://localhost:5000/users"; // Cambia la URL según corresponda

// Obtener todos los usuarios
export const getUsers = async () => {
  return await axios.get(API_URL);
};

// Crear un usuario
export const createUser = async (userData) => {
  return await axios.post(API_URL, userData);
};

// Eliminar un usuario
export const deleteUser = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
