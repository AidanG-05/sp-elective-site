import { useState } from "react";
import { Link } from "react-router-dom"; 

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger Button */}
      <button className="hamburger-button" onClick={toggleMenu}>
        <div className="hamburger-lines">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/library" onClick={toggleMenu}>Library</Link></li>
          <li><Link to="/review" onClick={toggleMenu}>Review Request</Link></li>
          <li><Link to="/faq" onClick={toggleMenu}>FAQ</Link></li>
        </ul>
      </div>

      {/* Overlay when sidebar open */}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
}

export default Hamburger;
