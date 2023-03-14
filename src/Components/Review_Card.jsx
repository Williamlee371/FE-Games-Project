function ReviewCard(props) {
	const { listOfReviews } = props;
	return (
		<div className="ReviewCard">
			{listOfReviews.map((review) => {
                console.log(review)
				return (
					<li key={review.review_id}>
						<h4>{review.title}</h4>
                        <img src={review.review_img_url} alt=""></img>
                        <p>{review.owner}</p>
					</li>
				);
			})}
		</div>
	);
}

export default ReviewCard;
