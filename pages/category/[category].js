import fs from 'fs'
import matter from 'gray-matter'
import useCart from "../../hooks/useCart";
import ProductCard from "../../components/ProductCard";
import Banner from "../../components/Banner";

export const getStaticPaths = () => {
    const directory = `${process.cwd()}/contents`;
    const categoryNames = fs.readdirSync(directory);
    const paths = categoryNames.map(category => {
        var y = {
            params:{
                category: category,
                }
        }
        console.log(y);

        return y;
 
    });
    var x = {
        paths: paths,
        fallback: false
    }
    console.log(x);

    return x;
}

export const getStaticProps = async (context) => {
    const directory = `${process.cwd()}/contents/${context.params.category}`;
    const filenames = fs.readdirSync(directory);
  
    const products = filenames.map((filename) => {
      //red the file from fs
      const fileContent = fs.readFileSync(`${directory}/${filename}`).toString();
      //pull out frontmatter => name
      const { data } = matter(fileContent);
      const slug = `/products/${context.params.category}/${filename.replace(".md", "")}`;
  
      return {
        ...data,
        slug: slug,
      };
    });
  
    return {
      props: {
        products: products,
      },
    };
  };

const Category = (props) => {
    const { cart, addItemToCart } = useCart();
    return (
       <>
      <Banner />
      <div className="row g-3 row-cols-lg-5 row-cols-2 row-cols-md-3">
        {props.products.map((product) => {
          const handleClick = (e) => {
            e.stopPropagation();
            addItemToCart(product);
          };

          return (
            <ProductCard
              key={product.id}
              product={product}
              addProduct={handleClick}
            />
          );
        })}
      </div>
    </>
    )
}

export default Category;