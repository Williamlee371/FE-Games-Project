function CommentCard(props) {
	const { commentList } = props;
    console.log(commentList)

	return (
		<div >
            <p>Comments</p>
			{commentList.map((comment) => {
				return (
                    <div className="Comment_Card">
					<li key={comment.comment_id}>
						<p>{comment.body}</p>
                        <p>{comment.author}</p>
                        <p>{comment.created_at}</p>
					</li>
                    </div>
				);
			})}
		</div>
	);
}

export default CommentCard;
