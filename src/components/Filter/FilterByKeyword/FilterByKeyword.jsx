import React from "react"
import "./FilterByKeyword.css"

const FilterByKeyword = ({ fetchedData }) => {

    let fetchTags = fetchedData.map((item) => item.automatic_tags)
    let tags = []
    for (let i = 0; i < fetchTags.length; i++) {
        for (let j = 0; j < fetchTags[i].length; j++) {
            tags.push(fetchTags[i][j])
        }
    }
    let uniqueTags = [...new Set(tags)]
    let uniqueTagsSorted = uniqueTags.sort()

    return (
        <fieldset className="fieldsetFilterByYear">
            <legend>Recherche par mots clés</legend>
            <div className="radioContainer">
            </div>
        </fieldset>
    )
}
export default FilterByKeyword