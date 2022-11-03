import { Homepage } from "./pages/Homepage";

export const App = () => {
  return <Homepage />;
};

/*<>
      <input onChange={(e) => setSearch(e.target.value)}></input>
      <button onClick={handleClick}>Suchen!</button>
      <p>{!!user ? <>{user.name}</> : "No user selected."}</p>
      <p>{!!error ? <>{error.message}</> : "No error."}</p>
    </>


const [search, setSearch] = useState("");
  const [user, setUser] = useState<UserResponse>();
  const [error, setError] = useState<any>();

  const handleClick = () => {
    setUser(undefined);
    setError(undefined);

    getUsersById(parseInt(search))
      .then((r) => setUser(r))
      .catch((e) => setError(e));
  };
    */
