function ReviewCard({ review }) {
    return (
        <div className="review-card">
            <h3>Acadamic Year: {review.Academic_Year}</h3>
            <p><strong>Semester:</strong> {review.Semester}</p>
            <p><strong>Rating:</strong> {review.Ratings} / 5</p>
            <p>{review.Rating_Reason}</p>
            <p><strong>Tips & Tricks:</strong><br></br> {review.Life_Hacks}</p>
        </div>
    );
}

export default ReviewCard;