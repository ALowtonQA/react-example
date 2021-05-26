import Music from "./Music";
import { Table } from "reactstrap";

const MainTable = ({data, refresh}) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Name</th>
                    <th>Artist</th>
                    <th>Year</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data.map((entry) => (
                    <tr key={entry.id}>
                        <Music music={entry} refresh={refresh}/>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default MainTable;