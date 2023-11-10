import CardComponent from "./Card";
import { useFetch } from "./useFetch";

const App = () => {
  const { data, loading, error } = useFetch(
    "https://reqres.in/api/users?per_page=12"
  );

  return (
    <div>
      <h2 className="bg-primary">Practicando fetch</h2>
      {loading && <li>Loading...</li>}
      {error && <li>Error... {error}</li>}
      <ul>
        {data?.map((user) => (
          <ol>{`${user.first_name} ${user.last_name}`}</ol>
        ))}
      </ul>
      <hr />
      <CardComponent />
    </div>
  );
};

export default App;
