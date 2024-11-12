import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
   
    setShowPopup(true);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <section>
        <nav>
          <div className="navBar">
            <ul>
              <li>
                <a href="#home" title="Home">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" title="About">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" title="Contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container">
          <div className="containerAlign">
            <h1>This is a nature of Beauty</h1>
          </div>
        </div>
      </section>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Welcome!</h2>
            <p>thank's for visiting <a href="#home"><b>click for premium </b></a></p>
            <button className="btn" onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
