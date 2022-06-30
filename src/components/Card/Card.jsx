import React from "react";
import "./Card.css"
import Authors from "./Authors/Authors";
import Tags from "./Tags/Tags";

const Card = ({ results }) => {

    let isJournalArticleIsEmpty = (document) => {
        if (document.publication_title !== "") {
            return (
                <li className="list-group-item"><strong>Titre de la publication: </strong>{document.publication_title}</li>
            )
        }
    }

    let isExtractIsEmpty = (document, index) => {
        if (document.abstract_note !== "") {
            return (
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
            )
        }
    }

    let display;
    if (results) {
        display = results.map((document, index) => {
            return (
                <>
                    <li className="card">
                        <h3 className="card-header">{document.title}</h3>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">

                                {isJournalArticleIsEmpty(document)}

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
                                <a href={document.url} className="btn btn-success" target="_blank" rel="noreferrer">Voir le document</a>
                            </div>
                            {isExtractIsEmpty(document, index)}
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
