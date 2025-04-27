import { useState } from "react";

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
          <li>Home</li>
          <li>Library</li>
          <li>Review Request</li>
          <li>FAQ</li>
        </ul>
      </div>

      {/* Overlay when sidebar open */}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
}

export default Hamburger;
