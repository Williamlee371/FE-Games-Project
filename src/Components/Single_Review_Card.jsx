import { decreaseVoteOnReview, increaseVoteOnReview } from "../API";

function SingleReviewCard(props) {
	const { singleReview, setSingleReview } = props;

	const handleIncreaseVote = (event) => {
		increaseVoteOnReview(event.target.id).then((response) => {
			setSingleReview(response);
		});
	};

	const handleDecreaseVote = (event) => {
		decreaseVoteOnReview(event.target.id).then((response) => {
			setSingleReview(response);
		});
	};
    
	return (
		<div className="SingleReviewCard">
			<li key={singleReview.review_id}>
				<h5>{singleReview.title}</h5>
				<p>{singleReview.owner}</p>
				<img src={singleReview.review_img_url} alt=""></img>
				<p>Number Of Votes: {singleReview.votes}</p>
				<button id={singleReview.review_id} onClick={handleIncreaseVote}>
					Increase Vote
				</button>
				<button id={singleReview.review_id} onClick={handleDecreaseVote}>
					Decrease Vote
				</button>
				<p>{singleReview.review_body}</p>
				<p>{singleReview.category}</p>
				<p>{singleReview.designer}</p>
				<p>{singleReview.created_at}</p>
			</li>
		</div>
	);
}
export default SingleReviewCard;
