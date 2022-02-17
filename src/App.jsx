import './App.css';
import React, { useState, useEffect } from "react";
import axios from 'axios'
// import Search from "./components/Search/Search";
// import Card from "./components/Card/Card";
// import Pagination from "./components/Pagination/Pagination";
// import Filter from "./components/Filter/Filter";

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:4000/articles')
      .then((res) => setData(res.data.results))
      console.log(data)
  }, [])

  return (
    <div>
      <h1>Periclim</h1>
      <ul>
     {data.map((document)=>(
       <li>{document.d_year}</li>
     ))}
      </ul>
    </div>
  )

}

export default App;
