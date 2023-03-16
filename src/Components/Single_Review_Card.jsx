function SingleReviewCard(props) {
    const { singleReview } = props;
    return (
        <div className="SingleReviewCard">
            <li key={singleReview.review_id}>
                <h5>{singleReview.title}</h5>
                <p>{singleReview.owner}</p>
                <img src={singleReview.review_img_url} alt=""></img>
                <p>{singleReview.review_body}</p>
                <p>{singleReview.category}</p>
                <p>{singleReview.designer}</p>
                <p>{singleReview.created_at}</p>
            </li>
        </div>
    );
 }
 export default SingleReviewCard;