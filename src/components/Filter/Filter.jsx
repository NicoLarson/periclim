import React, { useState, useEffect } from "react"
import "./Filter.css"

const Filter = ({ search }) => {
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
        <div className="filter">
            <p>Filter</p>
            <select>
                <option value="">All</option>
                {uniqueItems.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
        </div>
    )
}
export default Filter