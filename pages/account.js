import { useSession, signOut, getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import AddressForm from "../components/AddressForm";

const Account = (props) => {
  const { data: session, status } = useSession();
  const [address, setAddress] = useState(props.address);

  const [isOpen, setIsOpen] = useState(false);

  const handleAddressUpdate = (newAddress) => {
    setAddress(newAddress);
  };

  const openCart = () => {
    setIsOpen(true);
  };
  const closeCart = () => {
    setIsOpen(false);
  };

  if (status == "authenticated") {
    return (
      <div>
        <h1>Welcome {session.user.name}</h1>
        <p>
          Address: {address.houseId} {address.street} {address.city}{" "}
          {address.zipCode} {address.country}
        </p>
        <p>Phone Number: {address.phoneNumber}</p>
        <button
          className="btn btn-outline-secondary m-1"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
        <button className="btn btn-outline-secondary m-1" onClick={openCart}>
          Edit address
        </button>
        <AddressForm
          isOpen={isOpen}
          closeCart={closeCart}
          name={session.user.name}
          email={session.user.email}
          id={props.address.accountId}
          onAddressUpdate={handleAddressUpdate}
        />
      </div>
    );
  } else {
    return (
      <div>
        <h1>You are not sign in</h1>
      </div>
    );
  }
};

export default Account;

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
  console.log(res);
  return res;
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
