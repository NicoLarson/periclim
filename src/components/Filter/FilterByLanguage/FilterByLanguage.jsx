import React from "react"
import "./FilterByLanguage.scss"

const FilterByLanguage = ({ fetchedData, setLanguageSearch }) => {
    let languages = fetchedData.map((item) => item.language)
    let uniqueItems = languages.filter((item, index) => languages.indexOf(item) === index)

    let totalByLanguage = fetchedData.reduce((acc, curr) => {
        if (acc[curr.language]) {
            acc[curr.language] += 1
        } else {
            acc[curr.language] = 1
        }
        return acc
    }
        , {})

    return (
        <fieldset className="fieldsetFilterByLanguage">
            <legend>Langues</legend>
            <div className="radioContainer">
                {uniqueItems.map((item) => (
                    <div key={item} className="radioContainer__item">
                        <input type="radio" id={item} name="language" value={item} onChange={(e) => setLanguageSearch(e.target.value)} />
                        <label htmlFor={item}>{item} ({totalByLanguage[item]}) </label>
                    </div>
                ))
                }
            </div>
        </fieldset>
    )
}

export default FilterByLanguage