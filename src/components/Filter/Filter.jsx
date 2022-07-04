import React, { useState, useEffect } from "react"
import "./Filter.css"
import FilterByYear from "./FilterByYear/FilterByYear"
import FilterByLanguage from "./FilterByLanguage/FilterByLanguage"
import FilterByType from "./FilterByType/FilterByType"
import ResetFilterBtn from "./ResetFilterBtn/ResetFilterBtn"

const Filter = ({ search, setTypeSearch, setYearSearch, setLanguageSearch, updateTotalDocuments }) => {
    let [fetchedData, updateFetchedData] = useState([])

    let api = `https://periclim-api.herokuapp.com/documents?q=${search}`;
    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json())
            updateTotalDocuments(data.length)
            updateFetchedData(data)
        })()
    }, [api])

    return (
        <div className="filter desktop-only card mb-3">
            <div class="card-header">Filtres</div>
            <form className="card-body">
                <FilterByYear setYearSearch={setYearSearch} fetchedData={fetchedData} />
                <FilterByLanguage setLanguageSearch={setLanguageSearch} fetchedData={fetchedData} />
                <FilterByType fetchedData={fetchedData} setTypeSearch={setTypeSearch} />
                <ResetFilterBtn setYearSearch={setYearSearch} setLanguageSearch={setLanguageSearch} />
            </form>
        </div>
    )
}
export default Filter