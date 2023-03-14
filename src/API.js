import axios from "axios";

const apiUrl = axios.create({
	baseURL: "https://be-games-project.onrender.com/api",
});

function getAllReviews() {
	return apiUrl.get("/reviews").then(({ data }) => {
		return data;
	});
}

export default getAllReviews;
