import { useSession, signOut, getSession } from "next-auth/react";

const Account = () => {
  const { data: session, status } = useSession();
  if (status == "authenticated") {
    return (
      <div>
        <h1>Welcome {session.user.name}</h1>
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
