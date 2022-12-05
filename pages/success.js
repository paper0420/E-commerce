import useCart from "../hooks/useCart";
import { useEffect } from "react";
const Success = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div>
      <h1>Payment Successfully</h1>
      <p>Thank you for your purchase</p>
    </div>
  );
};

export default Success;
