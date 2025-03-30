import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ModuleCard from "./components/moduleCard";

function SearchResults() {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("q");

  useEffect(() => {
    if (!searchTerm) return;

    // Fetch matching modules from your backend
    fetch(`http://localhost:5001/modules/search?q=${encodeURIComponent(searchTerm)}`)
      .then((res) => res.json())
      .then((data) => setResults(data))
      .catch((err) => console.error("Error fetching search results:", err));
  }, [searchTerm]);

  return (
    <div className="search-results">
      <h1>Search Results for "{searchTerm}"</h1>
      <div className="results-container">
        {results.length > 0 ? (
          results.map((module, index) => (
            <ModuleCard key={index} module={module} />
          ))
        ) : (
          <p>No matching modules found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
