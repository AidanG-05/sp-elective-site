import React from "react";

function ReviewModal({ review, onClose }) {
    if (!review) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="modal-close" onClick={onClose}>&times;</span>
                <h3>Review Details</h3>
                <p><strong>Academic Year:</strong> {review.Academic_Year}</p>
                <p><strong>Semester:</strong> {review.Semester}</p>
                <p><strong>Rating:</strong> {review.Ratings} / 5</p>
                <p><strong>Reason for the rating:</strong><br></br> {review.Rating_Reason}</p>
                <p><strong>Key takeaways from experiences, including projects and topics explored or completed:</strong><br></br> {review.TLDR_experiences}</p>
                <p><strong>Assessment Weightage:</strong><br></br> {review.Assignment_Weightage}</p>
                <p><strong>Assessment Review:</strong><br></br> {review.Assignment_Review}</p>
                <p><strong>Tips & Tricks:</strong><br></br> {review.Life_Hacks}</p>
            </div>
        </div>
    );
}

export default ReviewModal;