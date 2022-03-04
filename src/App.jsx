import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";

function App() {
  let [pageNumber, updatePageNumber] = useState(1);
  let [search, setSearch] = useState("");

  let [fetchedData, updateFetchedData] = useState([])
  let { results } = fetchedData;

  let api = `http://localhost:4000/articles/search/${search}`
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })()
  }, [api])
  return (
    <div>
      <header>
        <h1>Periclim</h1>
        <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      </header>
      <main>
        <Filter className="filter__container" />
        <div>
          <ul class="list-group card__container">
            {/* A SUPPRIMER A LA QUAND DESIGN FINI */}
            <li class="card">
              <h3 class="card-header">Title</h3>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><strong>Auteurs:</strong>
                    <div class="btn-group-horizontal">
                      <a class="btn btn-secondary">Nico LARSON</a>
                      <a class="btn btn-secondary">Ip MAN</a>
                    </div>
                  </li>
                  <li class="list-group-item"><strong>Année: </strong>2001</li>
                  <li class="list-group-item"><strong>Numéro: </strong>1232134</li>
                  <li class="list-group-item"><strong>Nom du journal: </strong>Journal Title</li>
                </ul>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id={`heading-1`}>
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-1`} aria-expanded="false" aria-controls={`collapse-1`}>
                    Extrait
                  </button>
                </h2>
                <div id={`collapse-1`} class="accordion-collapse collapse" aria-labelledby={`heading-1`} data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea est dignissimos id laborum dicta harum enim soluta quibusdam explicabo illo ratione voluptatem a maxime molestiae, necessitatibus sunt optio perferendis quam, temporibus magnam?
                  </div>
                </div>
              </div>
              <div class="card-body">
                <a href="#" class="btn btn-success">DOI</a>
              </div>
              <div class="card-body btn-group-horizontal">
                <a class="btn btn-dark">#solar</a>
                <a class="btn btn-dark">#GHI</a>
              </div>
            </li>
            {/* A DECOMMENTER QUAND DESIGN FINI */}
            {/* <Card results={results} /> */}
          </ul>
          <Pagination />
        </div>
      </main>
    </div>
  )

}

export default App;
