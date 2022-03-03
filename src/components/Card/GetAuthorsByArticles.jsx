import React, { useState, useEffect } from "react";

const GetAuthorsByArticles = ({ articleId }) => {


    let [fetchedData, updateFetchedData] = useState([])
    let { authorsResults } = fetchedData;
    
    let apiAuthors = `http://localhost:4000/article/${articleId}/authors`
    useEffect(() => {
        (async function () {
            let data = await fetch(apiAuthors).then((res) => res.json());
            updateFetchedData(data);
        })()
    }, [apiAuthors])

    let display;
console.log(fetchedData.results)
    if (authorsResults) {
        display = articleId.map((author) => {
            let { a_first_name, a_last_name, a_middle_name } = author;
            return (
                <li>{a_first_name} - {a_middle_name} - {a_last_name}</li>
            )
        })
    } else {
        display = "No Characters Found :/";
    }

    return <>{display}</>;
}

export default GetAuthorsByArticles