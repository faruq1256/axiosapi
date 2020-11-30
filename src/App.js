import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [num, setNum] = useState(1);
  const [title, setTitle] = useState();
  const [move, setMove] = useState();

  useEffect(() => {
    //  alert("Completed");
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      const title = res.data.name;
      setTitle(title);
      const move = res.data.moves.length;
      setMove(move);
      console.log(res);
    }
    getData();
  });

  return (
    <>
      <h2> You have selected {num} </h2>
      <p> Pokeman Name is {title}</p>
      <p>Number of Moves {move}</p>
      <select
        onChange={() => {
          setNum(num + 1);
        }}
      >
        <option value="1">1</option>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="25">25</option>
        <option value="9">9</option>
      </select>
    </>
  );
};

export default App;
