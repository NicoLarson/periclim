import React, { useState, useEffect } from "react"
import "./Filter.css"
import FilterByYear from "./FilterByYear/FilterByYear"
import FilterByLanguage from "./FilterByLanguage/FilterByLanguage"

const Filter = ({ search, setYearSearch, setLanguageSearch, updateTotalDocuments }) => {
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
                <FilterByLanguage setLanguageSearch={setLanguageSearch} fetchedData={fetchedData}/>
            </form>
        </div>
    )
}
export default Filter