const PrintImages = ({objects}) => {

    return (
        <>
            <td><img src={objects[0].imageUrl.split("/revision/")[0]}/></td>
            <td><img src={objects[1].imageUrl.split("/revision/")[0]}/></td>
            <td><img src={objects[2].imageUrl.split("/revision/")[0]}/></td>
            <td><img src={objects[3].imageUrl.split("/revision/")[0]}/></td>
            <td><img src={objects[4].imageUrl.split("/revision/")[0]}/></td>
            <td><img src={objects[5].imageUrl.split("/revision/")[0]}/></td>
            <td><img src={objects[6].imageUrl.split("/revision/")[0]}/></td>
            <td><img src={objects[7].imageUrl.split("/revision/")[0]}/></td>
            <td><img src={objects[8].imageUrl.split("/revision/")[0]}/></td>
            <td><img src={objects[9].imageUrl.split("/revision/")[0]}/></td>
        </>
    );
}

export default PrintImages;
