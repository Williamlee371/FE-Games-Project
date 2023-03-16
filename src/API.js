import axios from "axios";

const apiUrl = axios.create({
	baseURL: "https://be-games-project.onrender.com/api",
});

export const getAllReviews=()=> {
	return apiUrl.get("/reviews").then(({ data }) => {
		return data;
	});
}

export const getReviewById=(review_id)=>{
	return apiUrl.get(`/reviews/${review_id}`).then(({data})=>{
		return data;
	})
 }
 
export const increaseVoteOnReview=(review_id)=>{
	return apiUrl.patch(`/reviews/${review_id}`,{inc_votes:1}).then(({data})=>{
		return data
	})
}