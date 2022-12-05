import "../styles/globals.css";
import Head from "next/head";
import Navbar from "../components/Navbar";
import React from "react";
import CartProvider from "../context/Cart";
import SearchBoxProvider from "../context/SearchBox";
import Cart from "../components/Cart";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => {
    setIsOpen(true);
  };
  const closeCart = () => {
    setIsOpen(false);
  };

  return (
    <SearchBoxProvider>
      <CartProvider>
        <div className="container-fluid">
          <Head>
            <title>E-Commerce</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>

          <div className="container-sm mainBgAndFont">
            <Navbar cart={isOpen} openCart={openCart} />
            <Component {...pageProps} />
            <Cart isOpen={isOpen} closeCart={closeCart} />
          </div>

          <footer>
            <a>
              Kasie J{" "}
              <span>
                {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
              </span>
            </a>
          </footer>
        </div>
      </CartProvider>
    </SearchBoxProvider>
  );
}

export default MyApp;
