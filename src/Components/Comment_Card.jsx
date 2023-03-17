function CommentCard(props) {
	const { commentList } = props;
	return (
		<div >
			{commentList.map((comment) => {
				return (
					<li key={comment.comment_id}>
						<div className="CommentCard">
						<p>{comment.body}</p>
                        <p>{comment.author}</p>
                        <p>{comment.created_at}</p>
						</div>
					</li>
				);
			})}
		</div>
	);
}

export default CommentCard;
