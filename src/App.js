import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/Nav_Bar";
import Reviews from "./Components/Reviews";

function App() {
	const [listOfReviews, setListOfReviews] = useState([]);
	return (
		<div className="App">
			<Header />
			<NavBar />
			<Reviews
				listOfReviews={listOfReviews}
				setListOfReviews={setListOfReviews}

			/>
		</div>
	);
}

export default App;
