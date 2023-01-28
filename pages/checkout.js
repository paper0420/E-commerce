import useCart from "../hooks/useCart";
import styles from "./checkout.module.scss";
import { useRouter } from "next/router";
import { useSession, getSession } from "next-auth/react";

const Checkout = (props) => {
  const { cart, total } = useCart();
  const { data: session, status } = useSession();
  console.log(props.address.accountId);

  const processPayment = async () => {
    const cartItems = cart.map(({ id, qty }) => ({
      id,
      qty,
    }));

    const response = await fetch("/api/checkout_session", {
      method: "POST",
      body: JSON.stringify(cartItems),
    });

    var session = await response.json();
    window.location = session.url;
  };

  return (
    <div>
      <h1>Checkout</h1>
      {cart.length > 0 ? (
        <div>
          <ul className={styles.ul}>
            {cart.map((item) => {
              return (
                <li className={styles.item} key={item.id}>
                  <span>
                    {item.qty} X {item.name}
                  </span>
                  <span>${item.price / 100}</span>
                </li>
              );
            })}
          </ul>
          <div className={styles.total}>
            <span>Total</span>
            <span>${total / 100}</span>
          </div>
          <button
            className={`btn btn-dark mt-3 m-2 ${styles.checkoutButton}`}
            onClick={processPayment}
          >
            Process Payment
          </button>
        </div>
      ) : (
        <p>No item</p>
      )}
    </div>
  );
};

export default Checkout;

const getAddress = async (loginSession) => {
  const email = loginSession.user.email;
  const name = loginSession.user.name;
  let data = {
    email: email,
    name: name,
  };

  const response = await fetch(
    "https://e-commerce-indol-nine.vercel.app//api/getAddress",
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  );

  var res = await response.json();
  return {
    // res,
    houseId: res.address.HouseId,
    street: res.address.Street,
    city: res.address.City,
    zipCode: res.address.ZipCode,
    country: res.address.Country,
    phoneNumber: res.address.Phonenumber,
    accountId: res.accountId,
  };
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  } else {
    const address = await getAddress(session);
    return {
      props: {
        address: address,
      },
    };
  }
};
