import { useEffect, useState } from "react";
import CommentCard from "./Comment_Card";
import { getCommentsFromReview } from "../API";
import CommnetForm from "./Comment_form";

function Comments(props) {
	const { review_id } = props;
	const [commentList, setCommentList] = useState([]);

	useEffect(() => {
		getCommentsFromReview(review_id).then((response) => {
			setCommentList(response.comments);
		});
	}, [review_id]);

	return (
		<form className="Comments">
			<ul>
				<p>Comments</p>
				<CommnetForm setCommentList={setCommentList} commentList={commentList}/>
				<CommentCard commentList={commentList} />
			</ul>
		</form>
	);
}

export default Comments;
