import useCart from "../hooks/useCart";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Success = () => {
  const { clearCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    clearCart();
    //const { id } = router.query;
    console.log(window.location);
    var params = new URLSearchParams(window.location.search); //123;
    console.log(params.get("id"));
  }, []);

  return (
    <div>
      <h1>Payment Successfully</h1>
      <p>Thank you for your purchase</p>
    </div>
  );
};

export default Success;
