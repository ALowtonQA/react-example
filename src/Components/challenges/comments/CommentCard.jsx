
const CommentCard = (props) => {
    const {postId, id, name, email, body} = props;
    return (
        <div className="card">
            <p>Post ID: {postId}</p>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Body: {body}</p>
        </div>
    );
}

export default CommentCard;