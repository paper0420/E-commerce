import Link from "next/link";
import React from "react";
import { useSession, signIn, signOut, getProviders } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();

  const handleLogin = async (loginSession) => {
    const email = loginSession.user.email;
    const name = loginSession.user.name;
    let data = {
      email: email,
      name: name,
    };

    console.log("submit user" + data);
    const response = await fetch("/api/sendpost", {
      method: "POST",
      body: JSON.stringify(data),
    });

    var res = await response.json();
    console.log("user name has been uploaded   :" + res);
  };

  if (session) {
    handleLogin(session);
    return (
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card card-body p-5 text-center"
              style={{ borderRadius: "1rem" }}
            >
              <h1>Login success!</h1>
              <p>Welcome, {session.user.email}</p>
              <button
                className="btn btn-outline-secondary m-1"
                onClick={() => signOut()}
              >
                Sign-out
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card card-body p-5 text-center"
              style={{ borderRadius: "1rem" }}
            >
              <h2 className="fw-bold mb-2 text-uppercase">Please Login</h2>
              <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" className="text-dark">
                  <i
                    className="bi bi-facebook fa-lg"
                    onClick={() => signIn("facebook")}
                  ></i>
                </a>
                <a href="#!" className="text-dark">
                  <i
                    className="bi bi-google fa-lg"
                    onClick={() => signIn("google")}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Login;
