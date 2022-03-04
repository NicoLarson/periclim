import "./Search.css"

const Search = ({ setSearch, updatePageNumber }) => {
    let searchBtn = (e) => {
        e.preventDefault();
    };
    return (
        <form class="d-flex input-group">
            <input onChange={(e) => {
                updatePageNumber(1);
                setSearch(e.target.value);
            }} class="form-control" type="text" placeholder="Search" />
            <button class="btn btn-primary" type="submit">Search</button>
        </form>
    );

}

export default Search
