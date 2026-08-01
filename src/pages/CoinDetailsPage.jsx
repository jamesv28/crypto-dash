import { useState, useEffect } from "react";
import { useParams } from "react-router";
const API_URL = import.meta.env.VITE_COIN_API_URL;
const CoinDetailsPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const res = await fetch(`${API_URL}/${id}`);
        if (!res.ok) throw new Error("Something went wrong");
        const data = await res.json();
        console.log("data", data);
        setCoin(data);
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoin();
  }, [id]);
  return (
    <div>
      <h2>Coin Details {id}</h2>
    </div>
  );
};

export default CoinDetailsPage;
