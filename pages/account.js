import { useSession, signOut, getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import AddressForm from "../components/AddressForm";

const Account = (props) => {
  const { data: session, status } = useSession();
  const [address, setAddress] = useState({});
  const [isOpen, setIsOpen] = useState(false);

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
          Address: {props.address.houseId} {props.address.street}{" "}
          {props.address.city} {props.address.zipCode} {props.address.country}
        </p>
        <p>Phone Number: {props.address.phoneNumber}</p>
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

  const response = await fetch("http://localhost:3000//api/getAddress", {
    method: "POST",
    body: JSON.stringify(data),
  });

  var res = await response.json();
  return {
    houseId: res.HouseId,
    street: res.Street,
    city: res.City,
    zipCode: res.ZipCode,
    country: res.Country,
    phoneNumber: res.Phonenumber,
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
    console.log("HI");
    const address = await getAddress(session);
    console.log(address);
    return {
      props: {
        address: address,
      },
    };
  }
};
