import React from "react";
import ProductCard from "./ProductCard";
import useCart from "../hooks/useCart";

const ProductCardLists = (props) => {
  const { cart, addItemToCart } = useCart();
  return (
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
  );
};

export default ProductCardLists;
