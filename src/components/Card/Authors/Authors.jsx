import React from "react";
import "./Authors.css"

const Authors = ({ authorsArray }) => {
    let display

    display = authorsArray.map((author, index) => {
        console.log("🚀 ~ file: Authors.jsx ~ line 14 ~ display=authors.map ~ authors", author)

        return (
            <>
                <li className="author badge rounded-pill bg-info" key={index}>{author.firstName}, {author.lastName}</li>
            </>
        )
    })
    return <ul className="authorList">{display}</ul>;
}

export default Authors;