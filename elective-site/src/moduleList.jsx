import { useState, useEffect } from "react";
import ModuleCard from "./components/moduleCard";

function ModuleList() {
    const [modules, setModules] = useState([]); // State for storing modules

    useEffect(() => {
        fetch("http://localhost:5001/modules/all") // Fetch from backend
            .then((res) => res.json())
            .then((data) => setModules(data)) // Store modules in state
            .catch((err) => console.error("Error fetching modules:", err));
    }, []);

    return (
        <div className="module-list">
            <h1>All Modules</h1>
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
    );
}

export default ModuleList;
