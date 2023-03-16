import axios from "axios";

const apiUrl = axios.create({
	baseURL: "https://be-games-project.onrender.com/api",
});

export const getAllReviews = () => {
	return apiUrl.get("/reviews").then(({ data }) => {
		return data;
	});
};

export const getReviewById = (review_id) => {
	return apiUrl.get(`/reviews/${review_id}`).then(({ data }) => {
		return data;
	});
};

export const getCommentsFromReview=(review_id)=>{
	return apiUrl.get(`/reviews/${review_id}/comments`).then(({data})=>{
		return data;
	})
}
