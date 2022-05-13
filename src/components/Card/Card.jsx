import React from "react";
import "./Card.css"
import Authors from "./Authors/Authors";

const Card = ({ results }) => {
    let display;
    if (results) {
        display = results.map((document) => {
            return (
                <>
                    <li class="card">
                        <h3 class="card-header">{document.title}</h3>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><strong>Type: </strong>{document.type}</li>

                                <li class="list-group-item"><strong>Auteurs:</strong>
                                    <ul className="author-list">
                                        <Authors authors={document.author} />
                                    </ul>
                                </li>
                                <li class="list-group-item"><strong>Année: </strong>{JSON.stringify(document.issued).slice(17, 21)}
                                </li>
                                {document.ISSN ? <li class="list-group-item"><strong>ISSN: </strong>{document.ISSN}</li> : null}
                            </ul>

                            <div class="card-body">
                                <a href={document.DOI} class="btn btn-success">DOI</a>
                            </div>

                            <div class="accordion">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id={"heading" + document.ISSN}>
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + document.ISSN} aria-expanded="false" aria-controls={"collapse" + document.ISSN}>
                                            Extrait
                                        </button>
                                    </h2>
                                    <div id={"collapse" + document.ISSN} class="accordion-collapse collapse" aria-labelledby={"heading" + document.ISSN} data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            {document.abstract}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </li>
                </>
            );
        });
    } else {
        display = "No document Found :/";
    }


    return <>{display}</>;
}
export default Card

// DOI: "https://doi.org/10.1016/j.apenergy.2021.117158"
// ISSN: "0306-2619"
// URL: "https://www.sciencedirect.com/science/article/pii/S0306261921005912"
// abstract: d the decision maker."
// author: (4) [{…}, {…}, {…}, {…}]
// container-title: "Applied Energy"
// id: "http://zotero.org/users/9019400/items/BM4XNPWR"
// issued: {date-parts: Array(1)}
// page: "117158"
// title: "Optimizing operational costs and PV production at utility scale: An optical fiber network analogy for solar park clustering"
// type: "article-journal"
// volume: "298"