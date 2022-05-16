import React from "react";

const Authors = ({ authors }) => {
    let display
    display = authors.map((author,index) => {
        return (
            <>
                <li key={index}>{author.family} {author.given};</li>
            </>
        )
    })
    return <>{display}</>;
}

export default Authors;