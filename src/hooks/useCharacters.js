import { useState, useEffect } from "react";
import { getCharacters } from "../services/dragonballApi";

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Pedimos 30 personajes para llenar bien la pantalla
        const data = await getCharacters(30); 
        setCharacters(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { characters, loading, error };
};