import React from "react";
import "./Card.css"
import Authors from "./Authors/Authors";
import Tags from "./Tags/Tags";

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
                                <li className="list-group-item"><strong>Titre de la publication: </strong>{document.publication_title}</li>

                                <li className="list-group-item"><strong>Type: </strong>{document.item_type}</li>
                                <li className="list-group-item"><strong>Langue: </strong>{document.language}</li>
                                <li className="list-group-item"><strong>Auteurs: </strong> <Authors authorsArray={document.author} /> </li>
                                <li className="list-group-item"><strong>Année: </strong>
                                    {
                                        document.publication_year
                                    }
                                </li>
                                {document.issn ? <li className="list-group-item"><strong>ISSN: </strong>{document.issn}</li> : null}
                            </ul>
                            <li className="list-group-item"><strong>Mots clés: </strong>
                                <Tags tagsArray={document.automatic_tags} />
                            </li>
                            <div className="read-article-btn card-body">
                                <a href={document.url} className="btn btn-success" target="_blank">Voir l'article</a>
                            </div>
                            <div className="accordion">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id={"heading" + index}>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + index} aria-expanded="false" aria-controls={"collapse" + index}>
                                            Extrait
                                        </button>
                                    </h2>
                                    <div id={"collapse" + index} className="accordion-collapse collapse" aria-labelledby={"heading" + index} data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p className="abstract">  {document.abstract_note} </p>
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


    return <ul className="cards-container">{display}</ul>;
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