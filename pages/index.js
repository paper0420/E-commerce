import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import fs from 'fs'
import matter from "gray-matter"
import Link from 'next/link'
import useCart from '../hooks/useCart'

export default function Home(props) {
  // const [totalNumberOfClicks, setTotalNumOfClicks] = useState(0);
  // const incrementNumberOfClicks = () => {
  //   setTotalNumOfClicks(totalNumberOfClicks+1);
  // }

  const {cart, addItemToCart} = useCart();
  console.log("Index:" + cart);

  return (
    <div className={styles.productContainer}>
        {props.products.map(product => {
            const handleClick = (e)=>{
              e.preventDefault();
              e.stopPropagation();
              addItemToCart(product.id);
            }


          return (
            <div className={styles.product} key={product.id}>
              <Link href={product.slug} >
                <a>
                  <h1>{product.name}</h1>
                </a>
              </Link>
              <p>{product.description}</p>
              <button onClick={handleClick}>Add to cart</button>
              <p className={styles.price}>${product.price/100}</p>
            </div>
          )
        })}
    </div>
  )
}

export const getStaticProps = async () =>{
  const directory = `${process.cwd()}/contents`;
  const filenames = fs.readdirSync(directory);

  const products = filenames.map(filename => {
    //red the file from fs
    const fileContent = fs.readFileSync(`${directory}/${filename}`).toString();
    //pull out frontmatter => name
    const {data} = matter(fileContent);
    const slug = `/products/${filename.replace('.md','')}`;
    const product = {
      ...data,
      slug: slug
    }
    return product;
    
  });
  return{
    props:{
      products:products
    }
  }
}
