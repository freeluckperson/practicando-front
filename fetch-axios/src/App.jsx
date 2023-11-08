import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://reqres.in/api/users?per_page=12")
      .then((resp) => resp.json())
      .then((data) => setData(data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2 className="bg-primary">Practicando fetch</h2>
      <ul>
        {data?.map((user) => (
          <ol>{`${user.first_name} ${user.last_name}`}</ol>
        ))}
      </ul>
    </div>
  );
};

export default App;
