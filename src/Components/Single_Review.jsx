import { getReviewById } from "../API";
import { useParams } from "react-router-dom";
import SingleReviewCard from "./Single_Review_Card";
import {useState,useEffect} from 'react'
import Comments from "./Comments";


function SingleReview() {
   const { review_id } = useParams();
   const [loading, setLoading] = useState(false);
   const [singleReview,setSingleReview]=useState([])
   useEffect(() => {
       setLoading(true);
       getReviewById(review_id).then((response) => {
           setSingleReview(response.review);
           setLoading(false);
       });
   }, [review_id,setSingleReview]);
   return (
       <div className="SingleReview">
           {loading ? (
               <h3>Loading...</h3>
           ) : (
               <>
                   <h4>Review</h4>
                   <ul>
                       <SingleReviewCard singleReview={singleReview}/>
                       <Comments review_id={review_id}/>
                   </ul>
               </>
           )}
       </div>
   );
}


export default SingleReview;