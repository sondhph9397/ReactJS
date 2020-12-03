import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
const Header = () => {
    return (
        <div>
            <header id="header">
                <div className="inner">
                    <Link to="/" className="logo">
                        <img className="w-20" src="images/logo1.png" alt="" />
                    </Link>
                    <nav id="nav">
                        <Link to="/">Home</Link>
                        <Link to="/products">Product</Link>
                        <Link to="/News">News</Link>
                        <Link to="/About">About</Link>
                        <Link to="/Contact">Contact</Link>
                        <Link to="/category">Category</Link>
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
