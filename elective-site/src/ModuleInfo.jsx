import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReviewCard from "./components/reviewCard";

function ModuleDetails() {
    // Get module code from URL
    const { module_code } = useParams(); 
    const [module, setModule] = useState();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        console.log("Fetching module for:", module_code);
        fetch(`http://localhost:5001/modules/${module_code}`)
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched data:", data);
                setModule(data);
            })
            .catch((err) => console.error("Error fetching module details:", err));

        fetch(`http://localhost:5001/modules/${module_code}/reviews`)
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched reviews:", data);
                setReviews(data);
            })
            .catch((err) => console.error("Error fetching reviews:", err));
    }, [module_code]);

    if (!module || Object.keys(module).length === 0) return <p>No module details found.</p>;

    return (
        <div className="page-container">
            {/* Module info */}
            <div className="module-details">
                <h1>{module.module_name}</h1>
                <h2>{module.module_code}</h2>
                <p><strong>Eligibility:</strong> {module.eligibility}</p>
                <p><strong>Duration:</strong> {module.duration}</p>
            </div>

            {/* Reviews section */}
            <div className="reviews-container">
                <h2>Reviews</h2>
                {reviews.length > 0 ? (
                    reviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))
                ) : (
                    <p>No reviews yet.</p>
                )}
            </div>
        </div>
    );
}

export default ModuleDetails;
