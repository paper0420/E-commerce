import Link from "next/link";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const login = () => {
  const { data: session } = useSession();

  const handleLogin = async () => {
    const email = document.querySelector("#typeEmailX").value;
    const password = document.querySelector("#typePasswordX").value;
    let data = {
      email: email,
      password: password,
    };

    console.log(data);
    const response = await fetch("/api/sendpost", {
      method: "POST",
      body: JSON.stringify(data),
    });

    var res = await response.json();
    console.log("login   :" + res);
  };

  if (session) {
    return (
      <div>
        <h1>Login success!</h1>
        <p>Welcome, {session.user.email}</p>
      </div>
    );
  } else {
    return (
      <section className="gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card " style={{ borderRadius: "1rem" }}>
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className=" mb-5">
                      Please enter your login and password!
                    </p>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="typeEmailX">
                        Email
                      </label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="typePasswordX">
                        Password
                      </label>
                    </div>

                    <p className="small mb-5 pb-lg-2">
                      <a className="text-dark" href="#!">
                        Forgot password?
                      </a>
                    </p>

                    <button
                      className="btn btn-outline-dark btn-lg px-5"
                      type="submit"
                      onClick={handleLogin}
                    >
                      Login
                    </button>

                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="text-dark">
                        <i className="bi bi-facebook fa-lg"></i>
                      </a>
                      <a href="#!" className="text-dark">
                        <i className="bi bi-twitter fa-lg mx-4 px-2"></i>
                      </a>
                      <a href="#!" className="text-dark">
                        <i
                          className="bi bi-google fa-lg"
                          onClick={() => signIn()}
                        ></i>
                      </a>
                    </div>
                  </div>

                  <div>
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <Link href="/signup" className="text-white-50 fw-bold">
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default login;
