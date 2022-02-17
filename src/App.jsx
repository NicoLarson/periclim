import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
// import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
// import Pagination from "./components/Pagination/Pagination";
// import Filter from "./components/Filter/Filter";

function App() {
  let [fetchedData, updateFetchedData] = useState([])
  let { results } = fetchedData;

  let api = 'http://localhost:4000/articles'
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })()
  }, [api])

  return (
    <div>
      <h1>Periclim</h1>
      <ul class="list-group">
        <Card results={results} />
      </ul>
    </div>
  )

}

export default App;
