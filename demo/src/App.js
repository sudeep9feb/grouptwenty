import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [starWarsData, setStarWarsData] = useState({})
  const [count, setCount] = useState(1)

  console.log("component rendered")
  useEffect(function () {
    console.log("useEffect ran")
    fetch(`https://swapi.dev/api/people/${count}`)
      .then(response => response.json())
      .then(data => setStarWarsData(data))
  }, [count])


  return (
    <div>
      <button onClick={
        () => setCount(prevCount => prevCount + 1)}
      >Change character</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}

export default App;
