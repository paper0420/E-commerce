import '../styles/globals.css'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import {Normalize} from 'styled-normalize'
import Navbar from '../components/Navbar'
import React from 'react'
import CartProvider from '../context/Cart'
import Cart from '../components/Cart'
import Banner from '../components/Banner'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap-icons/font/bootstrap-icons.css";



function MyApp({ Component, pageProps }) {
  const [isOpen,setIsOpen] = useState(false);

  const openCart = () => {
    setIsOpen(true);
}
const closeCart = () => {
    setIsOpen(false);
}

  return (
   <CartProvider>
    <div className="container-fluid" >
    <Normalize/>
    <Head>
      <title>E-Commerce</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"/>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    </Head>

    <div className="mainBgAndFont">
      <div className="container-sm">
        <Navbar cart={isOpen} openCart={openCart}/>
        <Banner/>
        <Component {...pageProps} />
        <Cart isOpen={isOpen} closeCart={closeCart}/>
      </div>

    </div>


    <footer>
        <a>
          Sumi J{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>

  </div>
  </CartProvider>
    
  
  
  )
}

export default MyApp
