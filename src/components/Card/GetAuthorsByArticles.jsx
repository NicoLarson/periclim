import React, { useState, useEffect } from "react";

const GetAuthorsByArticles = ({ articleId }) => {

    let [fetchedData, updateFetchedData] = useState([])
    let { results } = fetchedData;

    let api = `http://localhost:4000/authors/article=${articleId}`
    useEffect(() => {
        (async function () {
          let data = await fetch(api).then((res) => res.json());
          updateFetchedData(data);
        })()
      }, [api])
    console.log(results)
    let display;
    if (results) {
        display = results.map((author) => {
            let { a_first_name, a_last_name, a_middle_name } = author;
            author.a_last_name = author.a_last_name.toUpperCase()   
            return (
                <a class="btn btn-secondary">{a_first_name} {a_middle_name} {a_last_name}</a>
            )
        })
    } else {
        display = "Nobody Found :/";
    }

    return <>{display}</>;
}

export default GetAuthorsByArticles