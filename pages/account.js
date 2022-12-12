import { useSession, signOut, getSession } from "next-auth/react";

const Account = () => {
  const { data: session, status } = useSession();

  const getAddress = async (loginSession) => {
    const email = loginSession.user.email;
    const name = loginSession.user.name;
    let data = {
      email: email,
      name: name,
    };

    const response = await fetch("/api/getAddress", {
      method: "POST",
      body: JSON.stringify(data),
    });

    var res = await response.json();
    return {
      city: res.City,
      zipCode: res.ZipCode,
    };
  };

  if (status == "authenticated") {
    return (
      <div>
        <h1>Welcome {session.user.name}</h1>
        <p>Address: </p>
        <button
          className="btn btn-outline-secondary m-1"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
    );
  } else {
    <div>
      <h1>You are not sign in</h1>
    </div>;
  }
};

export default Account;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }

  return {
    props: { session },
  };
};
