import exp from 'constants';
import fs from 'fs'
import matter from 'gray-matter'

export const getStaticPaths = () => {
    const directory = `${process.cwd()}/contents`;
    const filenames = fs.readdirSync(directory);
    const paths = filenames.map(filename => {
        return {
            params: {
                product: filename.replace('.md', '')
            }
        }
    });

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const productName = context.params.product;
    const filePath = `${process.cwd()}/contents/${productName}.md`;
    const fileContent = fs.readFileSync(filePath).toString();
    const { data, content } = matter(fileContent);

    return {
        props: {
            product: {
                data,
                content
            }
        }
    };
}

const Product = (props) => {
    return (
        // <div>
        //     <h1>{props.product.data.name}</h1>
        //     <p>{props.product.data.description}</p>
        //     <p>${props.product.data.price/100}</p>
        //     <p>{props.product.content}</p>
        // </div>

        <div>
            <div class="col-md-6">

          <div class="tns-outer" id="product-ow"><div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">3</span>  of 4</div><div id="product-mw" class="tns-ovh"><div class="tns-inner" id="product-iw"><div class="product  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" id="product"><div class="tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1">
              <div class="zoom" onmousemove="zoom(event)">

                <img src="../assets/images/products/product-single-img-4.jpg" alt=""/>
              </div>
            </div>
            <div class="zoom tns-item" onmousemove="zoom(event)" id="product-item0" aria-hidden="true" tabindex="-1">
                <img src="../assets/images/products/product-single-img-1.jpg" alt=""/>
            </div>
            <div class="tns-item tns-slide-active" id="product-item1">
              <div class="zoom" onmousemove="zoom(event)">

                <img src="../assets/images/products/product-single-img-2.jpg" alt=""/>
              </div>
            </div>
            <div class="tns-item" id="product-item2" aria-hidden="true" tabindex="-1">
              <div class="zoom" onmousemove="zoom(event)" >

                <img src="../assets/images/products/product-single-img-3.jpg" alt=""/>
              </div>
            </div>
            <div class="tns-item" id="product-item3" aria-hidden="true" tabindex="-1">
              <div class="zoom" onmousemove="zoom(event)">

                <img src="../assets/images/products/product-single-img-4.jpg" alt=""/>
              </div>
            </div>
          <div class="zoom tns-item tns-slide-cloned" onmousemove="zoom(event)">
                <img src="../assets/images/products/product-single-img-1.jpg" alt=""/>
            </div></div></div></div></div>

          <div class="product-tools">
            <div class="thumbnails row g-3" id="productThumbnails" aria-label="Carousel Pagination">
              <div class="col-3" data-nav="0" tabindex="-1" aria-label="Carousel Page 1" aria-controls="product">
                <div class="thumbnails-img">
         
                  <img src="../assets/images/products/product-single-img-1.jpg" alt=""/>
                </div>
              </div>
              <div class="col-3 tns-nav-active" data-nav="1" aria-label="Carousel Page 2 (Current Slide)" aria-controls="product">
                <div class="thumbnails-img">

                  <img src="../assets/images/products/product-single-img-2.jpg" alt=""/>
                </div>
              </div>
              <div class="col-3" data-nav="2" tabindex="-1" aria-label="Carousel Page 3" aria-controls="product">
                <div class="thumbnails-img">

                  <img src="../assets/images/products/product-single-img-3.jpg" alt=""/>
                </div>
              </div>
              <div class="col-3" data-nav="3" tabindex="-1" aria-label="Carousel Page 4" aria-controls="product">
                <div class="thumbnails-img">

                  <img src="../assets/images/products/product-single-img-4.jpg" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="ps-lg-10 mt-6 mt-md-0">

            <h1 class="mb-1">{props.product.data.name} </h1>
            <div class="mb-4">
   <small class="text-warning"> <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-half"></i></small><a href="#" class="ms-2">(30 reviews)</a></div>
            <div class="fs-4">
<span class="fw-bold text-dark">${props.product.data.price}</span> <span class="text-decoration-line-through text-muted">$35</span><span><small class="fs-6 ms-2 text-danger">26%
                  Off</small></span>
            </div>
        
            <hr class="my-6"/>
            <div class="mb-5"><button type="button" class="btn btn-outline-secondary">250g</button>
           <button type="button" class="btn btn-outline-secondary">500g</button>
           <button type="button" class="btn btn-outline-secondary">1kg</button></div>
              <div>
                <div class="input-group input-spinner  ">
                  <input type="button" value="-" class="button-minus  btn  btn-sm " data-field="quantity"/>
                  <input type="number" step="1" max="10" value="1" name="quantity" class="quantity-field form-control-sm form-input   "/>
                  <input type="button" value="+" class="button-plus btn btn-sm " data-field="quantity"/>
                </div>
            
            </div>
            <div class="mt-3 row justify-content-start g-2 align-items-center">
            
              <div class="col-xxl-4 col-lg-4 col-md-5 col-5 d-grid">
          <button type="button" class="btn btn-primary"><i class="feather-icon icon-shopping-bag me-2"></i>Add to
                  cart</button>
              </div>
              <div class="col-md-4 col-4">

                <a class="btn btn-light " href="#" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Compare"><i class="bi bi-arrow-left-right"></i></a>
                <a class="btn btn-light " href="shop-wishlist.html" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Wishlist"><i class="feather-icon icon-heart"></i></a>
              </div>
            </div>

            <hr class="my-6"/>
            <div>

              <table class="table table-borderless">

                <tbody>
                  <tr>
                    <td>Product Code:</td>
                    <td>FBB00255</td>

                  </tr>
                  <tr>
                    <td>Availability:</td>
                    <td>In Stock</td>

                  </tr>
                  <tr>
                    <td>Type:</td>
                    <td>Fruits</td>

                  </tr>
                  <tr>
                    <td>Shipping:</td>
                    <td><small>01 day shipping.<span class="text-muted">( Free pickup today)</span></small></td>

                  </tr>


                </tbody>
              </table>

            </div>
            <div class="mt-8">
             <div class="dropdown">
                <a class="btn btn-outline-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Share
                </a>

                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#"><i class="bi bi-facebook me-2"></i>Facebook</a></li>
                  <li><a class="dropdown-item" href="#"><i class="bi bi-twitter me-2"></i>Twitter</a></li>
                  <li><a class="dropdown-item" href="#"><i class="bi bi-instagram me-2"></i>Instagram</a></li>
                </ul>
              </div>
            </div>
        </div>

        <div class="col-md-12">
          <ul class="nav nav-pills nav-lb-tab" id="myTab" role="tablist">

            <li class="nav-item" role="presentation">
                 <button class="nav-link active" id="product-tab" data-bs-toggle="tab" data-bs-target="#product-tab-pane" type="button" role="tab" aria-controls="product-tab-pane" aria-selected="true">Product Details</button>
            </li>

            <li class="nav-item" role="presentation">
              <button class="nav-link" id="details-tab" data-bs-toggle="tab" data-bs-target="#details-tab-pane" type="button" role="tab" aria-controls="details-tab-pane" aria-selected="false" tabindex="-1">Information</button>
            </li>
           
            <li class="nav-item" role="presentation">
               <button class="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews-tab-pane" type="button" role="tab" aria-controls="reviews-tab-pane" aria-selected="false" tabindex="-1">Reviews</button>
            </li>
            
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="sellerInfo-tab" data-bs-toggle="tab" data-bs-target="#sellerInfo-tab-pane" type="button" role="tab" aria-controls="sellerInfo-tab-pane" aria-selected="false" disabled="" tabindex="-1">Seller
                Info</button>
            </li>
          </ul>
          
          <div class="tab-content" id="myTabContent">
         
            <div class="tab-pane fade show active" id="product-tab-pane" role="tabpanel" aria-labelledby="product-tab" tabindex="0">
              <div class="my-8">
                <div class="mb-5">
                 
                  <h4 class="mb-1">Nutrient Value &amp; Benefits</h4>
                  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, tellus iaculis urna
                    bibendum
                    in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit. Vel, varius
                    habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum netus risus adipiscing
                    sagittis sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div class="mb-5">
                  <h5 class="mb-1">Storage Tips</h5>
                  <p class="mb-0">Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed
                    magnis eu
                    nisi nunc sit. Vel, varius habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum
                    netus risus adipiscing sagittis sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                
                <div class="mb-5">
                  <h5 class="mb-1">Unit</h5>
                  <p class="mb-0">3 units</p>
                </div>
                <div class="mb-5">
                  <h5 class="mb-1">Seller</h5>
                  <p class="mb-0">DMart Pvt. LTD</p>
                </div>
                <div>
                  <h5 class="mb-1">Disclaimer</h5>
                  <p class="mb-0">Image shown is a representation and may slightly vary from the actual product. Every
                    effort
                    is made to maintain accuracy of all information displayed.</p>
                </div>
              </div>
            </div>
          
            <div class="tab-pane fade" id="details-tab-pane" role="tabpanel" aria-labelledby="details-tab" tabindex="0">
              <div class="my-8">
                <div class="row">
                  <div class="col-12">
                    <h4 class="mb-4">Details</h4>
                  </div>
                  <div class="col-12 col-lg-6">
                    <table class="table table-striped">
               
                      <tbody>
                        <tr>
                          <th>Weight</th>
                          <td>1000 Grams</td>
                        </tr>
                        <tr>
                          <th>Ingredient Type</th>
                          <td>Vegetarian</td>
                        </tr>
                        <tr>
                          <th>Brand</th>
                          <td>Dmart</td>
                        </tr>
                        <tr>
                          <th>Item Package Quantity</th>
                          <td>1</td>
                        </tr>
                        <tr>
                          <th>Form</th>
                          <td>Larry the Bird</td>
                        </tr>
                        <tr>
                          <th>Manufacturer</th>
                          <td>Dmart</td>
                        </tr>
                        <tr>
                          <th>Net Quantity</th>
                          <td>340.0 Gram</td>
                        </tr>
                        <tr>
                          <th>Product Dimensions</th>
                          <td>9.6 x 7.49 x 18.49 cm</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="col-12 col-lg-6">
                    <table class="table table-striped">
                     
                      <tbody>
                        <tr>
                          <th>ASIN</th>
                          <td>SB0025UJ75W</td>
                        </tr>
                        <tr>
                          <th>Best Sellers Rank</th>
                          <td>#2 in Fruits</td>
                        </tr>
                        <tr>
                          <th>Date First Available</th>
                          <td>30 April 2022</td>
                        </tr>
                        <tr>
                          <th>Item Weight</th>
                          <td>500g</td>
                        </tr>
                        <tr>
                          <th>Generic Name</th>
                          <td>Banana Robusta</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
           

                    </div>
                  </div>
              
                    
                  </div>


        
    )
};

export default Product;