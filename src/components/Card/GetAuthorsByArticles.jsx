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
    if (authorsResults) {
        display = articleId.map((author) => {
            let { a_first_name, a_last_name, a_middle_name } = author;
            return (
                <a class="btn btn-secondary">{a_first_name} - {a_middle_name} - {a_last_name}</a>
            )
        })
    } else {
        display = "Nobody Found :/";
    }

    return <>{display}</>;
}

export default GetAuthorsByArticles