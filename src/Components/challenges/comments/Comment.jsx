import Comments from "../static/Comments.json";
import CommentCard from "./CommentCard";

const Comment = () => {
    return (
        <div className="Comments">
            {Comments.map((comment, i) => (
                <CommentCard
                    key = {i}
                    {... comment}
                />
            ))};
        </div>
    );
}

export default Comment;