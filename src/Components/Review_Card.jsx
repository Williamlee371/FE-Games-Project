function ReviewCard(props) {
	const { listOfReviews } = props;
	return (
		<div className="ReviewCard">
			{listOfReviews.map((review) => {
				return (
					<li key={review.review_id}>
						<h5>{review.title}</h5>
                        <img src={review.review_img_url} alt=""></img>
                        <p>{review.owner}</p>
					</li>
				);
			})}
		</div>
	);
}

export default ReviewCard;
