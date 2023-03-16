import ListOfReviews from "./List_Of_Reviews";
import { Routes, Route } from "react-router-dom";
import SingleReview from "./Single_Review";

function Reviews() {
	return (
		<section className="Reviews">
			<Routes>
				<Route
					path="/"
					element={
						<ListOfReviews />
					}
				/>
				<Route path="/Review/:review_id" element={<SingleReview />} />
			</Routes>
		</section>
	);
}

export default Reviews;
