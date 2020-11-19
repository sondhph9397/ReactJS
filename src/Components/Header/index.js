import React from "react";

const Header = () => {
  return (
    <div>
      <header id="header">
        <div className="inner">
          <a href="index.html" className="logo">
           <img className="w-20" src="images/logo1.png" alt=""/>
          </a>
          <nav id="nav">
            <a href="index.html">Home</a>
            <a href="generic.html">Generic</a>
            <a href="elements.html">Elements</a>
          </nav>
          <a href="#navPanel" className="navPanelToggle">
            <span className="fa fa-bars" />
          </a>
        </div>
      </header>
    </div>
  );
};
export default Header;
