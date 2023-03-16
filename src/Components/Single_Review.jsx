import { useEffect, useState } from "react";
import { getReviewById } from "../API";
import { useParams } from "react-router-dom";
import SingleReviewCard from "./Single_Review_Card";


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
                       <SingleReviewCard singleReview={singleReview} setSingleReview={setSingleReview}/>
                   </ul>
               </>
           )}
       </div>
   );
}


export default SingleReview;