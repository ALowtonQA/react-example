import PrintImages from "./PrintImages";

const Grid = ({data}) => {

    const one = data.splice(0, 9);
    const two = data.splice(10, 19);
    const three = data.splice(20, 29);
    const four = data.splice(30, 39);
    const five = data.splice(40, 49);

    const objArray = [one, two, three, four, five];

    return(
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {objArray.map((ten, i) => (
                    <tr key={i}>
                        <PrintImages objects={ten}/>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Grid;