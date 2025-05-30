import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ReviewCard from "./components/reviewCard";
import ReviewModal from "./components/reviewModel";
import MainButton from "./components/mainButton";
import Hamburger from "./components/hamburger";
import SearchBar from "./components/searchBar";
import ClickButton from "./components/clickButton";



function ModuleDetails() {

    
    // Get module code from URL
    const { module_code } = useParams(); 
    const [module, setModule] = useState();
    const [reviews, setReviews] = useState([]);
    const [selectedReview, setSelectedReview] = useState(null);
    const [avgRating, setAvgRating] = useState(null);
    
    const API = import.meta.env.VITE_HOST_API;

    const [sortOption, setSortOption] = useState("newest");

// Sorting logic
const sortedReviews = [...reviews].sort((a, b) => {
    if (sortOption === "highest") return parseFloat(b.Ratings) - parseFloat(a.Ratings);
    if (sortOption === "lowest") return parseFloat(a.Ratings) - parseFloat(b.Ratings);
    if (sortOption === "newest") return new Date(b.review_timestamp) - new Date(a.review_timestamp);
    return 0;
});
    

    useEffect(() => {
        console.log("Fetching module for:", module_code);
        fetch(`${API}/modules/${module_code}`)
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched data:", data);
                setModule(data);
            })
            .catch((err) => console.error("Error fetching module details:", err));

        fetch(`${API}/modules/${module_code}/reviews`)
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched reviews:", data);
                setReviews(data);

                const ratings = data.map(r => parseFloat(r.Ratings)).filter(r => !isNaN(r));
                const average = ratings.length > 0
                  ? (ratings.reduce((sum, r) => sum + r, 0) / ratings.length).toFixed(1)
                  : null;
                setAvgRating(average);
            })
            .catch((err) => console.error("Error fetching reviews:", err));
    }, [module_code]);

    if (!module || Object.keys(module).length === 0) return <p>No module details found.</p>;

    return (
        <>
        <div className="nav-header">
      <div className="hamburger-container">
        <Hamburger />
      </div>
      
      <div className="searchbar-container">
        <SearchBar />
      </div>
    </div>
        <div className="page-container">
            {/* Module info */}
            <div className="module-details">
                <h1>{module.module_name}</h1>
                <h2>{module.module_code}</h2>
                <p><strong>Eligibility:</strong> {module.eligibility}</p>
                <p><strong>Duration:</strong> {module.duration}</p>
                {avgRating ? (
                    <>
                    <p><strong>Overall Rating:</strong> {avgRating} / 5</p>
                    </>
                ) : (
                    <p><strong>Overall Rating:</strong> No ratings yet</p>
                )}
                <div className="review-button-wrapper">
                    <ClickButton title="Review 📝" navigateTo="/review"/>
                </div>
            </div>

            <div className="sort-container">
                <label htmlFor="sort">Sort by: </label>
                <select
                    id="sort"
                    className="sort-dropdown"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value="newest">Newest</option>
                    <option value="highest">Rating: Highest</option>
                    <option value="lowest">Rating: Lowest</option>
                </select>
            </div>


            
            {/* Reviews section */}
            <div className="reviews-container">
                <h2>Reviews</h2>
                {sortedReviews.length > 0 ? (
                    sortedReviews.map((review) => (
                        <ReviewCard key={review.id} review={review} onClick={setSelectedReview}/>
                     ))
                ) : (
                    <p>No reviews yet.</p>
                )}

            </div>
             {/* Modal */}
             <ReviewModal review={selectedReview} onClose={() => setSelectedReview(null)} />
        </div>
        </>
    );
}

export default ModuleDetails;
