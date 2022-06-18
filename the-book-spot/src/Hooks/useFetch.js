import { useEffect, useState } from "react";

const useFetch = (endPoint) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${endPoint}&orderBy=newest&key=${process.env.REACT_APP_GOOGLE_API_KEY}&maxResults=15`
        );
        const data = await response.json();
        setData(data.items);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [endPoint]);

  return { data, loading, error };
};

export default useFetch;
