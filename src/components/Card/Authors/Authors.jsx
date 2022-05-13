import React from "react";

const Authors = ({ authors }) => {
    let display
    display = authors.map((author) => {
        return (
            <>
                <li>{author.family} {author.given}</li>
            </>
        )
    })
    return <>{display}</>;
}

export default Authors;