import fs from "fs";
import matter from "gray-matter";
import Banner from "../../components/Banner";
import useSearchBox from "../../hooks/useSearchBox";
import ProductCardLists from "../../components/ProductCardLists";

export const getStaticPaths = () => {
  const directory = `${process.cwd()}/contents`;
  const categoryNames = fs.readdirSync(directory);
  const paths = categoryNames.map((category) => {
    var y = {
      params: {
        category: category,
      },
    };
    console.log(y);

    return y;
  });
  var x = {
    paths: paths,
    fallback: false,
  };
  console.log(x);

  return x;
};

export const getStaticProps = async (context) => {
  const directory = `${process.cwd()}/contents/${context.params.category}`;
  const filenames = fs.readdirSync(directory);

  const products = filenames.map((filename) => {
    //red the file from fs
    const fileContent = fs.readFileSync(`${directory}/${filename}`).toString();
    //pull out frontmatter => name
    const { data } = matter(fileContent);
    const slug = `/products/${context.params.category}/${filename.replace(
      ".md",
      ""
    )}`;

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
  const { keyword } = useSearchBox();
  const filteredProducts = props.products.filter((product) =>
    product.description.toLowerCase().includes(keyword)
  );

  return (
    <>
      <Banner />
      <div className="">
        {keyword.length <= 0 ? (
          <ProductCardLists products={props.products} />
        ) : (
          <ProductCardLists products={filteredProducts} />
        )}
      </div>
    </>
  );
};

export default Category;
