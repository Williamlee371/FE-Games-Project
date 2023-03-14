import ReviewCard from "./Review_Card";
import getAllReviews from "../API";
import { useEffect,useState } from "react";

function ListOfReviews(props) {
	const [loading,setLoading]=useState(false);
	const { listOfReviews, setListOfReviews } = props;
	useEffect(() => {
		setLoading(true)
		getAllReviews().then((response) => {
			setListOfReviews(response.reviews);
			setLoading(false)
		});
	}, [setListOfReviews]);
	
	return (
		<div className="ListOfReviews">{loading?<h3>Loading...</h3>:<>
			<h4>Reviews</h4>
			<ul>
				<ReviewCard listOfReviews={listOfReviews} />
			</ul></>}
		</div>
	);
}

export default ListOfReviews;
