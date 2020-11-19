import React from "react";

const Banner = () => {
  return (
    <div>
      <section id="banner">
        <div className="inner">
          <header>
            <h1>Welcome to BeerPub</h1>
          </header>
          <div className="flex ">
            <div>
              <span className="icon fa-car" />
              <h3>Aliquam</h3>
              <p>Suspendisse amet ullamco</p>
            </div>
            <div>
              <span className="icon fa-camera" />
              <h3>Elementum</h3>
              <p>Class aptent taciti ad litora</p>
            </div>
            <div>
              <span className="icon fa-bug" />
              <h3>Ultrices</h3>
              <p>Nulla vitae mauris non felis</p>
            </div>
          </div>
          <footer>
            <a href="#" className="button">
              Get Started
            </a>
          </footer>
        </div>
      </section>
    </div>
  );
};
export default Banner;
