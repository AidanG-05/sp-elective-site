function ModuleCard({ module }) {
    return (
      <div className="module-card">
        <h1>{module.module_name}</h1>
        <h2>{module.module_code}</h2>
      </div>
    );
  }
  
  export default ModuleCard;
  