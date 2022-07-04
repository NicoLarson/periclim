import React, { useState, useEffect } from "react"

import "bootstrap/dist/js/bootstrap"
import "./assets/superhero-theme.css"
import "./App.css"
import Search from "./components/Search/Search"
import Card from "./components/Card/Card"
import Pagination from "./components/Pagination/Pagination"
import LimitPerPage from "./components/LimitPerPage/LimitPerPage"
import Filter from "./components/Filter/Filter"
import Loader from "./components/Loader/Loader"
import NoResults from "./components/NoResults/NoResults"


const App = () => {
  let [pageNumber, updatePageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [year, setYearSearch] = useState("");
  let [language, setLanguageSearch] = useState("");
  let [fetchedData, updateFetchedData] = useState([])
  let [limitPerPage, setLimitPerPage] = useState(10);
  let [totalDocuments, updateTotalDocuments] = useState(0)

  let yearString
  if (!year) {
    yearString = ""
  } else {
    yearString = `&publication_year=${year}`
  }

  let languageString
  if (!language) {
    languageString = ""
  } else {
    languageString = `&language=${language}`
  }

  let api = `https://periclim-api.herokuapp.com/documents?q=${search}&_limit=${limitPerPage}&_page=${pageNumber}&_sort=publication_year&_order=desc${yearString}${languageString}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json())
      updateFetchedData(data)
    })()
  }, [api])

  let displayCard
  if (fetchedData.length === 0 && search === "") {
    displayCard = () => { return <Loader /> }
  } else if (fetchedData.length === 0 && search !== "") {
    displayCard = () => {
      return (
        <NoResults setSearch={setSearch} />
      )
    }
  } else {
    displayCard = () => {
      return (
        <>
          <p className="total-documents text-info">{totalDocuments} documents</p>
          <LimitPerPage setNumberPerPage={setLimitPerPage} limitPerPage={limitPerPage} />
          <div className="card-filter-container">
            <Filter setLanguageSearch={setLanguageSearch} setYearSearch={setYearSearch} search={search} limitPerPage={limitPerPage} pageNumber={pageNumber} updateTotalDocuments={updateTotalDocuments} />
            <Card results={fetchedData} />
          </div>
          <Pagination
            search={search}
            pageNumber={pageNumber}
            updatePageNumber={updatePageNumber}
            limitPerPage={limitPerPage}
            year={year}
            yearString={yearString}
          />

        </>
      )
    }
  }


  return (
    <>
      <header>
        <h1 className="title">Periclim</h1>
        <h2 className="s-title">Base de données bibliographiques</h2>
      </header>
      <main>
        <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
        {displayCard()}
      </main>
      <footer>
        <p style={{ fontSize: .8 + 'rem' }}>&copy;Copyright - MIT - 2022</p>
      </footer>
    </>
  )
}

export default App
