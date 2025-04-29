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
          <Link to="/" onClick={toggleMenu}><li>Home</li></Link>
          <Link to="/library" onClick={toggleMenu}><li>Library</li></Link>
          <Link to="/" onClick={toggleMenu}><li>Review Request</li></Link>
          <Link to="/faq" onClick={toggleMenu}><li>FAQ</li></Link>
        </ul>
      </div>

      {/* Overlay when sidebar open */}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
}

export default Hamburger;
