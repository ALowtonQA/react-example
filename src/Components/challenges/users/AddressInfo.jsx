
const AddressInfo = (props) => {
    const {street, suite, city, zipcode, geo} = props;
    const {lat, lng} = geo;

    return (
        <>
            <h3>Address:</h3>
                <ul>
                    <li>Street: {street}</li>
                    <li>Suite: {suite}</li>
                    <li>City: {city}</li>
                    <li>ZipCode: {zipcode}</li>
                    <li>Geo:
                        <ul>
                            <li>Lat: {lat}</li>
                            <li>Long: {lng}</li>
                        </ul>
                    </li>
                </ul>
        </>
    );
}

export default AddressInfo;