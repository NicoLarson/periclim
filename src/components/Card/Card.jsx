const Card = ({ results }) => {
    let display;

    if (results) {
        display = results.map((document) => {
            let { d_id, d_title, d_type, d_year, d_abstract, d_url, d_doi, d_standard_number, j_name, sa_name } = document;
            return (
                <li class="list-group-item">
                    <a href="" class="list-group-item list-group-item-action flex-column align-items-start">
                        <h3>{d_title}</h3>
                        <ul>
                            <li><strong>Année:</strong> {d_year}</li>
                            <li><strong>Site d'extraction:</strong>  {d_url}</li>
                            <li><strong> DOI:</strong> {d_doi}</li>
                            <li><strong>Numéro: </strong>{d_standard_number}</li>
                            <li><strong>Nom du journal:</strong> {j_name}</li>
                        </ul>
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
                        <p>#{
                            sa_name.split(" ").join(' #')
                        }</p>
                    </a>
                </li>)
        });
    } else {
        display = "No Characters Found :/";
    }

    return <>{display}</>;
}
export default Card;
