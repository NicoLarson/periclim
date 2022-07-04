import React from "react"
import "./FilterByYear.css"

const FilterByYear = ({ fetchedData, setYearSearch }) => {

    let years = fetchedData.map((item) => item.publication_year)
    let uniqueItems = [...new Set(years.sort((a, b) => b - a))]

    let totalByYear = fetchedData.reduce((acc, curr) => {
        if (acc[curr.publication_year]) {
            acc[curr.publication_year] += 1
        } else {
            acc[curr.publication_year] = 1
        }
        return acc
    }
        , {})

    let itemIsNull = (item) => {
        if (item !== "") {
            return (
                <div key={item} className="radioContainer__item">
                    <input type="radio" id={item} name="year" value={item} onChange={(e) => setYearSearch(e.target.value)} />
                    <label htmlFor={item}>{item} ({totalByYear[item]})</label>
                </div>
            )
        }
    }

    return (
        <fieldset className="fieldsetFilterByYear">
            <legend>Années</legend>
            <div className="radioContainer">
                {uniqueItems.map((item) => (
                    itemIsNull(item)
                ))
                }
            </div>
        </fieldset>
    )
}

export default FilterByYear