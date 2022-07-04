import React from "react"
import "./FilterByType.scss"

const FilterByType = ({ fetchedData, setTypeSearch }) => {
    let types = fetchedData.map((item) => item.item_type)
    let uniqueItems = types.filter((item, index) => types.indexOf(item) === index)
    let totalByType = fetchedData.reduce((acc, curr) => {
        if (acc[curr.item_type]) {
            acc[curr.item_type] += 1
        } else {
            acc[curr.item_type] = 1
        }
        return acc
    }
        , {})


    return (
        <fieldset className="fieldsetFilterByType">
            <legend>Types</legend>
            <div className="radioContainer">
                {uniqueItems.map((item) => (
                    <div key={item} className="radioContainer__item">
                        <input type="radio" id={item} name="type" value={item} onChange={(e) => setTypeSearch(e.target.value)} />
                        <label htmlFor={item}>{item} ({totalByType[item]}) </label>
                    </div>
                ))
                }
            </div>
        </fieldset>
    )
}

export default FilterByType