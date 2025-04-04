import { useNavigate } from "react-router-dom";

function ModuleCard({ module }) {
    const navigate = useNavigate();

    return (
        <div className="module-card" onClick={() => navigate(`/modules/${module.module_code}`)} style={{ cursor: "pointer" }}>
            <h1>{module.module_name}</h1>
            <h2>{module.module_code}</h2>
        </div>
    );
}

export default ModuleCard;