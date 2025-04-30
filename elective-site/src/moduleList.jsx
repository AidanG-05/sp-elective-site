import { useState, useEffect } from "react";
import ModuleCard from "./components/moduleCard";
import Hamburger from "./components/hamburger";
import SearchBar from "./components/searchBar";

function ModuleList() {
    const [modules, setModules] = useState([]); // State for storing modules
    const API = import.meta.env.VITE_LOCAL_API; 

    useEffect(() => {
        fetch(`${API}/modules/all`) // Fetch from backend
            .then((res) => res.json())
            .then((data) => setModules(data)) // Store modules in state
            .catch((err) => console.error("Error fetching modules:", err));
    }, []);

    return (
        <>
        <div className="nav-container">
            <Hamburger />
            <SearchBar />
        </div>
        <div className="module-list">
            <h1 className="centered-text">All Modules</h1>
            <div className="module-container">
                {modules.length > 0 ? (
                    modules.map((module, index) => (
                        <ModuleCard key={index} module={module} />
                    ))
                ) : (
                    <p>No modules found.</p>
                )}
            </div>
        </div>
        </>
    );
}

export default ModuleList;
