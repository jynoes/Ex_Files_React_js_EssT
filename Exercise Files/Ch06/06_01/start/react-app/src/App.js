import "./App.css";
import { useState, useEffect } from "react";

function GithubUser({name, id, avatar}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{id}</p>
      <img src={avatar} height={100} alt={name}/>
    </div>
  )
}

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/jynoes`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  if(data) return <GithubUser name={data.name} id={data.id} avatar={data.avatar_url} />

  return <h1>Data</h1>;
}

export default App;
