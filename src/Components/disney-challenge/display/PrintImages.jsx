const PrintImages = ({objects}) => {

    return (
        <>
            <td>{objects[0].imageUrl.split("/revision/")[0]}</td>
            <td>{objects[1].imageUrl.split("/revision/")[0]}</td>
            <td>{objects[2].imageUrl.split("/revision/")[0]}</td>
            <td>{objects[3].imageUrl.split("/revision/")[0]}</td>
            <td>{objects[4].imageUrl.split("/revision/")[0]}</td>
            <td>{objects[5].imageUrl.split("/revision/")[0]}</td>
            <td>{objects[6].imageUrl.split("/revision/")[0]}</td>
            <td>{objects[7].imageUrl.split("/revision/")[0]}</td>
            <td>{objects[8].imageUrl.split("/revision/")[0]}</td>
            <td>{objects[9].imageUrl.split("/revision/")[0]}</td>
        </>
    );
}

export default PrintImages;
