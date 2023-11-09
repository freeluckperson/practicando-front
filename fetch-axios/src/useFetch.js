import React, { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setData(data.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);
  return { data, loading, error };
};
