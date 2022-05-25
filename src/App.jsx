import React, { useState, useEffect } from "react"

import "bootstrap/dist/js/bootstrap"
import "./assets/superhero-theme.css"
import "./assets/index.css"
import Search from "./components/Search/Search"
import Card from "./components/Card/Card"
import Pagination from "./components/Pagination/Pagination"
import LimitPerPage from "./components/Filter/LimitPerPage"


const App = () => {
  let [pageNumber, updatePageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [fetchedData, updateFetchedData] = useState([])
  let [limitPerPage, setLimitPerPage] = useState(10);

  let api = `https://periclim-api.herokuapp.com/documents?q=${search}&_limit=${limitPerPage}&_page=${pageNumber}&_sort=year&_order=desc`;
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
        <h2 className="s-title">Base de données bibliographiques</h2>
      </header>
      <main>
        <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
        <LimitPerPage setNumberPerPage={setLimitPerPage} limitPerPage={limitPerPage} />


        <Card results={fetchedData} />
        <Pagination
          search={search}
          pageNumber={pageNumber}
          updatePageNumber={updatePageNumber}
          limitPerPage={limitPerPage}
        />

      </main>
      <footer>
        <p style={{ fontSize: .8 + 'rem'}}>&copy;Copyright - MIT - 2022</p>
      </footer>
    </>
  )
}

export default App
