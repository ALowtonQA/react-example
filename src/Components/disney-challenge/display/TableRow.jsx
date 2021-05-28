import TableData from "./TableData"

const TableRow = ({objects}) => {

    return (
        <>
            {objects.map((object) => (
                <TableData object={object}/>
            ))}
        </>
    );
}

export default TableRow;
