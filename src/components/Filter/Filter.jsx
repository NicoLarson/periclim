import React, { useState, useEffect } from "react"
import "./Filter.css"

const Filter = ({ search, setYearSearch }) => {
    let [fetchedData, updateFetchedData] = useState([])

    let api = `https://periclim-api.herokuapp.com/documents?q=${search}`;
    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json())
            updateFetchedData(data)
        })()
    }, [api])

    let years = fetchedData.map((item) => item.year)
    let uniqueItems = [...new Set(years.sort((a, b) => b - a))]

    return (
        <div className="filter desktop-only">
            <fieldset>
                <legend>Filter</legend>
                <div className="filter-container">
                    <div className="filter-item">
                        <label htmlFor="year">Year</label>
                        <select name="year" id="year" onChange={(e) => setYearSearch(parseInt(e.target.value))}>
                            <option value="">All</option>
                            {uniqueItems.map((item) => <option key={item} value={item}>{item}</option>)}
                        </select>
                    </div>
                </div>
            </fieldset>
        </div>
    )
}
export default Filter