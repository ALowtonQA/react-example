
const Employee = ({person}) => {
    return (
        <>
            <td>{person.id}</td>
            <td>{person.email}</td>
            <td>{person.first_name}</td>
            <td>{person.last_name}</td>
            <td><img src={person.avatar} alt={person.first_name} height="50" width="50"/></td>
        </>
    );
}

export default Employee;