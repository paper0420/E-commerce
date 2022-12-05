import fs from "fs";
import matter from "gray-matter";
import Banner from "../components/Banner";
import useSearchBox from "../hooks/useSearchBox";
import ProductCardLists from "../components/ProductCardLists";

export default function Home(props) {
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
}

export const getStaticProps = async () => {
  const directory = `${process.cwd()}/contents`;
  const categoryNames = fs.readdirSync(directory);
  let products = [];
  categoryNames.forEach((category) => {
    const categoryPath = `${process.cwd()}/contents/${category}`;
    const filenames = fs.readdirSync(categoryPath);

    let subProduct = filenames.map((filename) => {
      const fileContent = fs
        .readFileSync(`${directory}/${category}/${filename}`)
        .toString();
      //pull out frontmatter => name
      const { data } = matter(fileContent);
      const slug = `/products/Earrings/${filename.replace(".md", "")}`;
      var y = {
        ...data,
        slug: slug,
      };
      return y;
    });

    products = [...products, ...subProduct];
  });
  return {
    props: {
      products: products,
    },
  };
};
