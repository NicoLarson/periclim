import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
// import Pagination from "./components/Pagination/Pagination";
// import Filter from "./components/Filter/Filter";

function App() {
  let [pageNumber, updatePageNumber] = useState(1);
  let [search, setSearch] = useState("");

  let [fetchedData, updateFetchedData] = useState([])
  let { results } = fetchedData;

  let api = `http://localhost:4000/articles/search/${search}`
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })()
  }, [api])
  return (
    <div className="search__container">
      <h1>Periclim</h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <ul class="list-group">
        <Card results={results} />
      </ul>
    </div>
  )

}

export default App;
