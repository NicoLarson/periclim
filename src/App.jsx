import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";

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
    <>
      <header>
        <h1>Periclim</h1>
      </header>
      <main>
        <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
        <div className="articlesContainer">
          <Filter />
          <ul className="articlesCardsContainer">
            <Card results={results} />
          </ul>
        </div>
        <Pagination />
      </main>
      <footer>
        <p>&copy;Copyright - MIT - 2022</p>
      </footer>
    </>
  )

}

export default App;
