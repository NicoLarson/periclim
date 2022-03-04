import "./Search.css"

const Search = ({ setSearch, updatePageNumber }) => {
    let searchBtn = (e) => {
        e.preventDefault();
    };
    return (
        <div className="searchBar">
        <form class="input-group">
            <input onChange={(e) => {
                updatePageNumber(1);
                setSearch(e.target.value);
            }} class="form-control" type="text" placeholder="Search" />
            <button class="btn btn-primary" type="submit">Search</button>
        </form>
        </div>
    );

}

export default Search
