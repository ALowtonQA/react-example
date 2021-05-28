const TableData = ({object}) => {

    return (
        <>
            <td>
                <div className="img-container">
                    <img src={object.imageUrl.split("/revision/")[0]} className="disney-img"/>
                    <div className="img-overlay">
                        <div className="img-text">{object.name}</div>
                    </div>
                </div>
            </td>
        </>
    );
}

export default TableData;