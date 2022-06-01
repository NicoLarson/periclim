import React from "react"
import "./Tags.css"

const Tags = ({ tagsArray }) => {
    let display

    display = tagsArray.map((tag, index) => {

        return (
            <>
                <li className="tag badge bg-dark" key={index}>{tag}</li>
            </>
        )
    })
    return <ul className="tagsList ">{display}</ul>
}

export default Tags
