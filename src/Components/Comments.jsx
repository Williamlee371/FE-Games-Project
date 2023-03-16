import { useEffect, useState } from "react";
import CommentCard from "./Comment_Card";
import { getCommentsFromReview } from "../API";

function Comments(props) {
	const { review_id } = props;
	const [commentList, setCommentList] = useState([]);

	useEffect(() => {
		getCommentsFromReview(review_id).then((response) => {
			setCommentList(response.comments);
		});
	},[review_id]);

	return (
		<form className="Comments">
			<ul>
				<CommentCard commentList={commentList} />
			</ul>
		</form>
	);
}

export default Comments;
