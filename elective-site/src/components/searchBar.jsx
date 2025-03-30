import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!query.trim()) return; // Avoid empty searches
    // Navigate to the results page with the query as a URL parameter
    navigate(`/results?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by module code or name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
