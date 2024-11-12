import React from "react";

const Navbar = () => {
  return (
    <div>
      <section>
      <nav>
        <div className="navBar">
          <ul>
            <li>
              <a href="#home" title="Home" >
                Home
              </a>
            </li>
            <li>
              <a href="#about" title="About">
                About
              </a>
            </li>
            <li>
              <a href="#contact" title="Contact" >
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
    </div>
  );
};

export default Navbar;
