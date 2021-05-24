
const CompanyInfo = (props) => {
    const {comp_name, catchPhrase, bs} = props;

    return (
        <>
            <h3>Company:</h3>
            <ul>
                <li>Name: {comp_name}</li>
                <li>Catch Phrase: {catchPhrase}</li>
                <li>BS: {bs}</li>
            </ul>
        </>
    );
}

export default CompanyInfo;