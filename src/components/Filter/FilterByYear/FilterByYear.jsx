import React from "react"
import "./FilterByYear.css"

const FilterByYear = ({ fetchedData, setYearSearch }) => {

    let years = fetchedData.map((item) => item.publication_year)
    let uniqueItems = [...new Set(years.sort((a, b) => b - a))]
    const clearBtn = (e) => {
        e.preventDefault();
        setYearSearch("")
    }
    return (
        <fieldset className="fieldsetFilterByYear">
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
    )
}
export default FilterByYear