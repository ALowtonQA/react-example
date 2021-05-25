
const SearchBar = ({query, queryFunc, completed, completedFunc}) => {

    return (
        <>
            <label>Search</label>
            <input
                type = "text"
                name = "search"
                id = "search"
                value={query}
                onChange = {queryFunc}
            />
            <label>Search</label>
            <input
                type = "checkbox"
                value={completed}
                onChange = {completedFunc}
            />
        </>
    );
}

export default SearchBar;