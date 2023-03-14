import ListOfReviews from "./List_Of_Reviews";
import { Routes, Route } from "react-router-dom";

function Reviews(props) {
	const { listOfReviews, setListOfReviews } = props;
	return (
		<section className="Reviews">
			<Routes>
				<Route
					path="/"
					element={
						<ListOfReviews
							listOfReviews={listOfReviews}
							setListOfReviews={setListOfReviews}
						/>
					}
				/>
			</Routes>
		</section>
	);
}

export default Reviews;
