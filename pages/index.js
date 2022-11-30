import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import fs from 'fs'
import matter from "gray-matter"
import Link from 'next/link'
import useCart from '../hooks/useCart'
import Product from '../components/Product'
import Banner from '../components/Banner'

export default function Home(props) {
  const { cart, addItemToCart } = useCart();

  return (
    <>
    <Banner/>
    <div className="row g-3 row-cols-lg-5 row-cols-2 row-cols-md-3">
      {props.products.map(product => {
        const handleClick = (e) => {
          e.stopPropagation();
          addItemToCart(product);
        }

        return (
          <Product key={product.id} product={product} addProduct={handleClick}/>

        )
      })}
    </div>
    </>
  )
}

export const getStaticProps = async () => {
  const directory = `${process.cwd()}/contents`;
  const filenames = fs.readdirSync(directory);

  const products = filenames.map(filename => {
    //red the file from fs
    const fileContent = fs.readFileSync(`${directory}/${filename}`).toString();
    //pull out frontmatter => name
    const { data } = matter(fileContent);
    const slug = `/products/${filename.replace('.md', '')}`;

    return {
      ...data,
      slug: slug
    }
  });

  return {
    props: {
      products: products
    }
  }
}
