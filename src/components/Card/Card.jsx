import GetAuthorsByArticle from './GetAuthorsByArticles'
import "./Card.css"

const Card = ({ results }) => {
    let display;
    if (!results || results.length === 0) {
        display = "Aucun article trouvé :/";
    } else {
        display = results.map((document) => {
            let { d_id, d_title, d_type, d_year, d_abstract, d_url, d_doi, d_standard_number, j_name, sa_name } = document;
            return (
                <li class="card">
                    <h3 class="card-header">{d_title}</h3>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><strong>Auteurs:</strong>

                                <div class="btn-group-horizontal">
                                    <GetAuthorsByArticle articleId={d_id} />
                                </div>
                            </li>
                            <li class="list-group-item"><strong>Année: </strong>{d_year}</li>
                            <li class="list-group-item"><strong>Numéro: </strong>{d_standard_number}</li>
                            <li class="list-group-item"><strong>Nom du journal: </strong>{j_name}</li>
                        </ul>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id={`heading-${d_id}`}>
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${d_id}`} aria-expanded="false" aria-controls={`collapse-${d_id}`}>
                                Extrait
                            </button>
                        </h2>
                        <div id={`collapse-${d_id}`} class="accordion-collapse collapse" aria-labelledby={`heading-${d_id}`} data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                {d_abstract}
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <a href="#" class="btn btn-success">DOI</a>
                    </div>
                    <div class="card-body btn-group-horizontal">
                        <a class="btn btn-dark">#{
                            sa_name.split(" ").join(' #')
                        }</a>
                    </div>
                </li>
            )
        });
    }

    return <>{display}</>;
}
export default Card;
