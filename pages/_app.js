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
import { SessionProvider } from "next-auth/react";
import Script from "next/script";

function MyApp({ Component, pageProps, session }) {
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => {
    setIsOpen(true);
  };
  const closeCart = () => {
    setIsOpen(false);
  };

  return (
    <SessionProvider session={session}>
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

            <Script
              src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
              integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
              crossorigin="anonymous"
            ></Script>
            <Script
              src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
              integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
              crossorigin="anonymous"
            ></Script>

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
    </SessionProvider>
  );
}

export default MyApp;
