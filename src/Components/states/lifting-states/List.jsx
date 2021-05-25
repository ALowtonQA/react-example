
const List = ({list, query, completed}) => {

    // const filterComplete = function(list) {return list.completed === completed;}
    const filterComplete = () => (list) => list.completed === completed;

    // const filterQuery = function(list) {return list.title.includes(query);} 
    const filterQuery = () => (list) => list.title.toLowerCase().includes(query.toLowerCase());

    let filteredList = [];

    if (completed) {
        filteredList = list.filter(filterComplete()).filter(filterQuery());
    } else {
        filteredList = list.filter(filterQuery());
    }

    return (
        <>
            {filteredList.map((value) => (
                <div key={value.id}>
                    <h3> {value.title} </h3>
                    <input type="checkbox" checked={value.completed} readOnly/>
                </div>
            ))}
        </>
    )
}

export default List;