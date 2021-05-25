import { useState } from "react";
import List from "./List";
import SearchBar from "./SearchBar";
import data from "./Todo.json";

const SearchableList = () => {

    const [query, setQuery] = useState("");
    const [completed, setCompleted] = useState(false);

    const qHandler = (e) => {
        setQuery(e.target.value);
    }

    const completedHandler = () => {
        setCompleted(c => !c);
    }

    return (
        <>
            <SearchBar query={query} queryFunc={qHandler} completed={completed} completedFunc={completedHandler}/>
            <List list={data} query={query} completed={completed}/>
        </>
    );
}

export default SearchableList;