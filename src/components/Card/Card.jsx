import React from "react";
import "./Card.css"
import Authors from "./Authors/Authors";

const Card = ({ results }) => {
    let display;
    if (results) {
        display = results.map((document, index) => {
            return (
                <>
                    <li className="card">
                        <h3 className="card-header">{document.title}</h3>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Titre de la publication: </strong>{document.publicationTitle}</li>

                                <li className="list-group-item"><strong>Type: </strong>{document.itemType}</li>
                                <li className="list-group-item"><strong>Langue: </strong>{document.Language}</li>
                                <li className="list-group-item"><strong>Auteurs:</strong>{document.authors.split(";").map((author, index) => { return <span className="badge bg-dark" key={index}>{author}</span> })}

                                </li>
                                <li className="list-group-item"><strong>Année: </strong>
                                    {
                                        document.year
                                    }
                                </li>
                                {document.ISSN ? <li className="list-group-item"><strong>ISSN: </strong>{document.ISSN}</li> : null}
                            </ul>

                            <div className="card-body">
                                <a href={document.Url} className="btn btn-success">Voir l'article</a>
                            </div>
                            <li className="list-group-item"><strong>Mots clés: </strong>
                                {
                                    document.tags.split(";").map((tag, index) => {
                                        return <span className="badge rounded-pill bg-info" key={index}>{tag}</span>
                                    })
                                }
                            </li>
                            <div className="accordion">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id={"heading" + index}>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + index} aria-expanded="false" aria-controls={"collapse" + index}>
                                            Extrait
                                        </button>
                                    </h2>
                                    <div id={"collapse" + index} className="accordion-collapse collapse" aria-labelledby={"heading" + index} data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
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