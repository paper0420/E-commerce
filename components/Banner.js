import React from 'react'

const Banner = () =>{
    return (
    <div className="mt-8">
      <div className="container">
        <div className="hero-slider ">
          <div>
            <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
              <span className="badge text-bg-warning">Opening Sale Discount 50%</span>

              <h2 className="text-dark display-5 fw-bold mt-4">Online market </h2>
              <p className="lead">Introduced a new model for online grocery shopping
                and convenient home delivery.</p>
              <a href="#!" className="btn btn-dark mt-3">Shop Now <i className="feather-icon icon-arrow-right ms-1"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    )
};

export default Banner;