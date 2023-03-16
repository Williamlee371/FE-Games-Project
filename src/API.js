import axios from "axios";

const apiUrl = axios.create({
	baseURL: "https://be-games-project.onrender.com/api",
});

export const getAllReviews=()=> {
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
 
export const increaseVoteOnReview=(review_id)=>{
const inputData={inc_votes:1}
	return apiUrl.patch(`/reviews/${review_id}`,inputData).then(({data})=>{
		return data	
	})
}

export const decreaseVoteOnReview=(review_id)=>{
	const inputData={inc_votes:-1}
	return apiUrl.patch(`/reviews/${review_id}`,inputData).then(({data})=>{
		return data
	})
}
