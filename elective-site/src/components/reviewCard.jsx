function ReviewCard({ review, onClick }) {
    return (
        <div className="review-card" onClick={() => onClick(review)}>
            <h3>Acadamic Year: {review.Academic_Year}</h3>
            <p><strong>Semester:</strong> {review.Semester}</p>
            <p><strong>Rating:</strong> {review.Ratings} / 5</p>
            <p>{review.Rating_Reason}</p>
            <p><strong>Tips & Tricks:</strong><br></br> {review.Life_Hacks}</p>

            <div className="show-more-bar">
                Show More <span className="show-more-icon">🔍</span>
            </div>
        </div>
    );
}

export default ReviewCard;