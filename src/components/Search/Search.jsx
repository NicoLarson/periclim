import "./Search.css"

const Search = ({ setSearch, updatePageNumber }) => {
    let searchBtn = (e) => {
        e.preventDefault();
    };
    return (
        <form>
            <input
                onChange={(e) => {
                    updatePageNumber(1);
                    setSearch(e.target.value);
                }}
                placeholder="Rechercher"
                type="text"
            />
        </form>
    );

}

export default Search
