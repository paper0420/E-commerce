import React from "react";


const Product = (props) => {
    return(
          <div class="col">
            <div class="card card-product">
              <div class="card-body">

                <div class="text-center position-relative ">
                  <div class=" position-absolute top-0 start-0">
                    <span class="badge bg-danger">Sale</span>
                  </div>
                  <a href={props.product.slug}> <img src={props.product.image} alt={props.product.name} class="mb-3 img-fluid"/></a>

                  <div class="card-product-action">
                    <a href={props.product.slug} class="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i class="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Quick View"></i></a>
                    <a href={props.product.slug} class="btn-action" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Wishlist"><i class="bi bi-heart"></i></a>
                    <a href={props.product.slug} class="btn-action" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Compare"><i class="bi bi-arrow-left-right"></i></a>
                  </div>

                </div>
                <div class="text-small mb-1"><a href={props.product.slug} class="text-decoration-none text-muted"><small>{props.product.name}</small></a></div>
                <h2 class="fs-6"><a href="./pages/shop-single.html" class="text-inherit text-decoration-none">{props.product.description}</a></h2>
                <div>

                  <small class="text-warning"> <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i></small> <span class="text-muted small">4.5(149)</span>
                </div>
                <div class="d-flex justify-content-between align-items-center mt-3">
                  <div><span class="text-dark">${props.product.price}</span> <span class="text-decoration-line-through text-muted">$24</span>
                  </div>
                  <div><button class="btn btn-primary btn-sm" onClick={props.addProduct}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg> Add</button></div>
                </div>
              </div>
            </div>
          </div>
    )
}

export default Product ;