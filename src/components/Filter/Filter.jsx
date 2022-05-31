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
const clearBtn= (e) => {
    e.preventDefault();
    setYearSearch("")
}
    return (
        <div className="filter desktop-only card border-primary mb-3">
            <div class="card-header">Filtres</div>
            <form className="card-body">
                <fieldset>
                    <legend>Recherche par année</legend>
                    <div className="radioContainer">
                        {uniqueItems.map((item) => (
                            <div key={item}>
                                <label htmlFor={item}>
                                    <input
                                        type="radio"
                                        id={item}
                                        name="year"
                                        value={item}
                                        onChange={(e) => setYearSearch(e.target.value)}
                                    />
                                    {" " + item}</label>
                            </div>
                        ))}
                        <button className="btn btn-warning" onClick={clearBtn}>Effacer le filtre</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}
export default Filter