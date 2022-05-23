import React, { useState, useEffect } from "react"

import "bootstrap/dist/js/bootstrap"
import "./assets/superhero-theme.css"
import "./assets/index.css"
import Search from "./components/Search/Search"
import Card from "./components/Card/Card"
import Pagination from "./components/Pagination/Pagination"


const App = () => {
  let [pageNumber, updatePageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [fetchedData, updateFetchedData] = useState([])

  let limitPerPage = 10
  let api = `https://periclim-api.herokuapp.com/documents?q=${search}&_page=${pageNumber}&_limit=${limitPerPage}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json())
      updateFetchedData(data)
    })()
  }, [api])

  return (
    <>
      <header>
        <h1 className="title">Periclim</h1>
        <h2 className="s-title">Base de données bibliographies</h2>
      </header>
      <main>
        <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
        
        

        <Card results={fetchedData} />
        <Pagination
          search={search}
          pageNumber={pageNumber}
          updatePageNumber={updatePageNumber}
        />

      </main>
      <footer>
        <p>&copy;Copyright - MIT - 2022</p>
      </footer>
    </>
  )
}

export default App
