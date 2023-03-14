import axios from "axios";


function getAllReviews() {
    return axios.get("https://be-games-project.onrender.com/api/reviews").then(({data})=>{
        return data
    })
}

export default getAllReviews;
