import React from "react";

const styling = {
  backgroundImage: "url('/banner.jpg')",
  backgroundSize: "600px 600px",
};

const Banner = () => {
  return (
    <div className="mt-8">
      <div className="container rounded-3 p-3 mb-3 mt-1" style={styling}>
        <div className="hero-slider ">
          <div>
            <div className="ps-lg-12 py-lg-16 col-xxl-7 col-md-7 py-14 px-8 text-xs-center m-2">
              <h2 className="text-dark display-5 fw-bold mt-4">
                Accessories that you will love{" "}
              </h2>
              <p className="lead">Fashion accessories made perfect</p>
              <a href="#!" className="btn btn-dark mt-3 m-2">
                Shop Now <i className="feather-icon icon-arrow-right ms-1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
