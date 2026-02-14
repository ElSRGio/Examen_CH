import axios from "axios";

const API_URL = "https://dragonball-api.com/api/characters";

export const getCharacters = async (limit = 10) => {
  try {
    // Axios devuelve la respuesta en la propiedad .data
    const response = await axios.get(API_URL, {
      params: { limit } // Axios maneja los query params automáticamente
    });
    
    // La API de Dragon Ball devuelve un objeto { items: [...], meta: ... }
    return response.data.items; 
  } catch (error) {
    console.error("Error obteniendo personajes:", error);
    throw error; // Lanzamos el error para que lo capture el Hook
  }
};