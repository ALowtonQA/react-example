
const PostCard = (props) => {
    const {userId, id, title, body} = props;
    return (
        <div className="card">
            <p>User ID: {userId}</p>
            <p>ID: {id}</p>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
        </div>
    );
}

export default PostCard;