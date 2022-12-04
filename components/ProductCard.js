import React from "react";
import Image from "next/image";
import Link from "next/link";

const styling = {
  color: "inherit",
  textDecoration: "none",
  cursor: "pointer",
};

const ProductCard = (props) => {
  return (
    <div className="">
      <div className="card card-product h-100 ">
        <div className="card-body h-75 d-inline-block ">
          <div className="">
            <Link href={props.product.slug}>
              <img
                src={props.product.image}
                alt={props.product.name}
                className="img-fluid"
                style={styling}
              />
            </Link>
          </div>
        </div>

        <div className="card-body ">
            <div className="text-center text-small mb-1">
              <Link
                href={props.product.slug}
                className="text-decoration-none text-muted" 
              >
                <small style={styling}>{props.product.name}</small>
              </Link>
            </div>
            <h2 className="fs-6">
                {props.product.description}
            </h2>
            <div>
              <small className="text-warning">
                {" "}
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
              </small>{" "}
              <span className="text-muted small">4.5(149)</span>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3">
            <div>
              <span className="text-dark">${props.product.price}</span>{" "}
              <span className="text-decoration-line-through text-muted">$24</span>
            </div>
            <div>
              <button className="btn btn-primary btn-sm" onClick={props.addProduct}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  // stroke="currentColor"
                  // stroke-width="2"
                  // stroke-linecap="round"
                  // stroke-linejoin="round"
                  className="feather feather-plus"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>{" "}
                Add
              </button>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
