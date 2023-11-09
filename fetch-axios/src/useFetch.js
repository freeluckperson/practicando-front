import React, { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setData(data.data))
      .catch((error) => console.log(error));
  }, []);
  return { data };
};
