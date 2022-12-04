import fs from 'fs'
import matter from 'gray-matter'
import useCart from "../../../hooks/useCart";
import Link from 'next/link';

export const getStaticPaths = () => {
    const directory = `${process.cwd()}/contents`;
    const categoryNames = fs.readdirSync(directory);
    let paths = [];

      categoryNames.forEach(category => {

      const categoryPath = `${process.cwd()}/contents/${category}`;
      const filenames = fs.readdirSync(categoryPath);
      let subPaths = filenames.map(filename=>{
        var y = {
          params:{
            product: `${filename.replace('.md', '')}`,
            category: category,
            
          }
        }

        console.log(y);

        return y;
      })

      paths = [...paths,...subPaths];    
     

    });

    //paths.forEach(path=>console.log("Show each path :   "+path.params.category));

    // const filenames = fs.readdirSync(directory);
    // const paths = filenames.map(filename => {
    //     return {
    //         params: {
    //             product: filename.replace('.md', '')
    //         }
    //     }
    // });

    var x = {
        paths: paths,
        fallback: false
    }

    return x;
}

export const getStaticProps = async (context) => {
    console.log(context);

    let productName = context.params.product;
  
    const filePath = `${process.cwd()}/contents/${context.params.category}/${productName}.md`;
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
  const { cart, addItemToCart } = useCart();
  const handleClick = (e) => {
    e.stopPropagation();
    addItemToCart(props.product);
  };

    return (
        <div key={props.product.data.id}>
          <div className="container-fluid">
            <img src={props.product.data.image} width={300} height={500}/>
          </div>
          <div className="ps-lg-10 mt-6 mt-md-0">
            <h1 className="mb-1">{props.product.data.name} </h1>
            <div className="mb-4">
              <small className="text-warning">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
              </small>
              <a href="#" className="ms-2">(30 reviews)</a>
            </div>
            <div className="fs-4">
                <span className="fw-bold text-dark">${props.product.data.price}</span> 
                <span className="text-decoration-line-through text-muted">$35</span>
                <span><small className="fs-6 ms-2 text-danger">26% Off</small></span>
            </div>

            <div className="mt-3 row justify-content-start g-2 align-items-center">          
              <div className="col-xxl-4 col-lg-4 col-md-5 col-5 d-grid">
              <button type="button" className="btn btn-primary" onClick={handleClick}>Add to cart</button>
              </div>
            </div>

            <hr className="my-6"/>
            <div>
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td>Product Code:</td>
                    <td>{props.product.data.id}</td>

                  </tr>
                  <tr>
                    <td>Availability:</td>
                    <td>In Stock</td>

                  </tr>
                  <tr>
                    <td>Type:</td>
                    <td>{}</td>

                  </tr>
                  <tr>
                    <td>Shipping:</td>
                    <td><small>01 day shipping.<span className="text-muted">( Free pickup today)</span></small></td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>

        <div className="col-md-12">          
          <div className="tab-content" id="myTabContent">         
            <div className="tab-pane fade show active" id="product-tab-pane" role="tabpanel" aria-labelledby="product-tab" tabIndex="0">
              <div className="my-8">
                <div className="mb-5">               
                  <h4 className="mb-1">Product description &amp; Benefits</h4>
                  <p className="mb-0">{props.product.data.description}</p>
                </div>
                <div className="mb-5">
                  <h5 className="mb-1">Product detail</h5>
                  <p className="mb-0">{props.product.content}
                  </p>
                </div>
              </div>
            </div>   
            </div>
            </div>           
        </div>
        
    )
};

export default Product;