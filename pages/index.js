import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import useCart from "../hooks/useCart";
import ProductCard from "../components/ProductCard";
import Banner from "../components/Banner";

export default function Home(props) {
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
  );
}

export const getStaticProps = async () => {
  const directory = `${process.cwd()}/contents`;
  const categoryNames = fs.readdirSync(directory);
  let products = [];
  categoryNames.forEach(category => {
    const categoryPath = `${process.cwd()}/contents/${category}`;
    const filenames = fs.readdirSync(categoryPath);

    let subProduct = filenames.map(filename=>{
      const fileContent = fs.readFileSync(`${directory}/${category}/${filename}`).toString();
      //pull out frontmatter => name
      const { data } = matter(fileContent);
      const slug = `/products/Earrings/${filename.replace(".md", "")}`;
      var y = {
        ...data,
        slug: slug,          
        }
      return y;
    })
    
    products = [...products,...subProduct];
  });    
  return {
    props: {
      products: products,
    },
  };
};
