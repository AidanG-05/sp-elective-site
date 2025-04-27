import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ReviewCard from "./components/reviewCard";
import ReviewModal from "./components/reviewModel";
import MainButton from "./components/mainButton";


function ModuleDetails() {
    // Get module code from URL
    const { module_code } = useParams(); 
    const [module, setModule] = useState();
    const [reviews, setReviews] = useState([]);
    const [selectedReview, setSelectedReview] = useState(null);

    useEffect(() => {
        console.log("Fetching module for:", module_code);
        fetch(`https://sp-elective-site-backend-production.up.railway.app/modules/${module_code}`)
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched data:", data);
                setModule(data);
            })
            .catch((err) => console.error("Error fetching module details:", err));

        fetch(`https://sp-elective-site-backend-production.up.railway.app/modules/${module_code}/reviews`)
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
                <div className="review-button-wrapper">
                    <MainButton title="Review 📝" navigateTo="/review"/>
                </div>
            </div>

            {/* Reviews section */}
            <div className="reviews-container">
                <h2>Reviews</h2>
                {reviews.length > 0 ? (
                    reviews.map((review) => (
                        <ReviewCard key={review.id} review={review} onClick={setSelectedReview}/>
                    ))
                ) : (
                    <p>No reviews yet.</p>
                )}
            </div>
             {/* Modal */}
             <ReviewModal review={selectedReview} onClose={() => setSelectedReview(null)} />
        </div>
    );
}

export default ModuleDetails;
