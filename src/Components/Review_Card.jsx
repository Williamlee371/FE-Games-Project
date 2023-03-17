import { useNavigate } from "react-router-dom";

function ReviewCard(props) {
	const { listOfReviews } = props;
	const navigate=useNavigate();
  
	const handleItemClick=(event)=>{
		navigate(`/Review/${event.currentTarget.id}`)
	}

	return (
		<div className="ReviewCard">
			{listOfReviews.map((review) => {
				return (
					<li key={review.review_id} onClick={handleItemClick} id={review.review_id}>
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
