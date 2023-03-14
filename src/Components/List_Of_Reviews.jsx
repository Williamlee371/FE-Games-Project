import ReviewCard from "./Review_Card";
import getAllReviews from "./API";
import { useEffect } from "react";

function ListOfReviews(props) {
	const { listOfReviews, setListOfReviews } = props;
	useEffect(() => {
		getAllReviews().then((response) => {
			setListOfReviews(response.reviews);
		});
	}, [setListOfReviews]);
	return (
		<div className="ListOfReviews">
			<h3>Reviews</h3>
			<ul>
				<ReviewCard listOfReviews={listOfReviews} />
			</ul>
		</div>
	);
}

export default ListOfReviews;
