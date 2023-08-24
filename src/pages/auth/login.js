/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { useState } from "react";
import { useRouter } from "next/navigation";

import mainLogo from "../../../public/assets/img/main_logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginData = {
      email,
      password,
    };

    const res = await fetch("https://squaddeck.onrender.com/public/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    const data = await res.json();

    if (res.status === 200) {
      console.log(data);
      navigate.push("/dashboard");
    } else if (res.status === 404) {
      console.log("Email not found");
    } else {
      console.log("An error occurred");
    }

    // window.location.assign("http://abcd.localhost:3001/dashboard");
    event.target.reset();
    // console.log(res);
  };

  const getCurrentYear = () => {
    const yearAndData = new Date().getFullYear();
    return yearAndData;
  };
  return (
    <>
      {/* <!-- auth-page wrapper --> */}
      <div className="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
        <div className="bg-overlay"></div>
        {/* <!-- auth-page content --> */}
        <div className="auth-page-content overflow-hidden ">
          <div className="container ">
            <div className="row">
              <div className="col-lg-12 fs-4 ">
                <div className="card overflow-hidden y-5">
                  <div className="row justify-content-center g-0">
                    <div className="col-lg-6">
                      <div className="p-lg-5 p-4 auth-one-bg h-100">
                        <div className="bg-overlay "></div>
                        <div className="position-relative h-100 d-flex flex-column">
                          <div className="mb-4">
                            <Link href="/dashboard" className="d-block">
                              <Image src={mainLogo} alt="" priority={true} />
                            </Link>
                          </div>
                          <div className="mt-auto">
                            <div className="mb-3">
                              <i className="ri-double-quotes-l display-4 quote-color"></i>
                            </div>

                            <div
                              id="carouselExampleCaptions"
                              className="carousel slide"
                              data-bs-ride="carousel"
                            >
                              <div className="carousel-indicators">
                                <button
                                  type="button"
                                  data-bs-target="#carouselExampleCaptions"
                                  data-bs-slide-to="0"
                                  className="active"
                                  aria-current="true"
                                  aria-label="Slide 1"
                                ></button>
                                <button
                                  type="button"
                                  data-bs-target="#carouselExampleCaptions"
                                  data-bs-slide-to="1"
                                  aria-label="Slide 2"
                                ></button>
                                <button
                                  type="button"
                                  data-bs-target="#carouselExampleCaptions"
                                  data-bs-slide-to="2"
                                  aria-label="Slide 3"
                                ></button>
                              </div>
                              <div className="carousel-inner text-center text-white-50 pb-5">
                                <div className="carousel-item active">
                                  <p className="fs-15 fst-italic">
                                    " Great! Clean code, clean design, easy for
                                    customization. Thanks very much! "
                                  </p>
                                </div>
                                <div className="carousel-item">
                                  <p className="fs-15 fst-italic">
                                    " The theme is really great with an amazing
                                    customer support. Thanks very much!"
                                  </p>
                                </div>
                                <div className="carousel-item">
                                  <p className="fs-15 fst-italic">
                                    " Great! Clean code, clean design, easy for
                                    customization. Thanks very much! "
                                  </p>
                                </div>
                              </div>
                            </div>
                            {/* <!-- end carousel --> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- end col --> */}

                    <div className="col-lg-6">
                      <div className="p-lg-5 p-4">
                        <div>
                          <h5 className="quote-color fs-2">Welcome Back !</h5>
                          <p className="text-muted">
                            Sign in to continue to SquadDeck.
                          </p>
                        </div>

                        <div className="mt-4">
                          <form onSubmit={handleSubmit}>
                            <div className="mb-3 pb-3">
                              <label htmlFor="username" className="form-label">
                                User Email
                              </label>
                              <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                name="umail"
                                className="form-control fs-4"
                                id="username"
                                placeholder="Enter Your Email"
                              />
                            </div>

                            <div className="mb-3 ">
                              <div className="float-end ">
                                <Link
                                  href=""
                                  className="text-muted text-primary fw-semibold text-decoration-underline "
                                >
                                  Forgot password?
                                </Link>
                              </div>
                              <label
                                className="form-label"
                                htmlFor="password-input"
                              >
                                Password
                              </label>
                              <div className="position-relative auth-pass-inputgroup pb-3">
                                <input
                                  onChange={(e) => setPassword(e.target.value)}
                                  type="password"
                                  name="pass"
                                  className="form-control fs-4 password-input"
                                  placeholder="Enter Password"
                                  id="password-input"
                                />

                                <button
                                  className="btn btn-link position-absolute pb-4 end-0 top-0 text-decoration-none text-muted"
                                  type="button"
                                >
                                  <i className="ri-eye-fill align-middle "></i>
                                </button>
                              </div>
                            </div>

                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="auth-remember-check"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="auth-remember-check"
                              >
                                Remember me
                              </label>
                            </div>

                            <div className="mt-4 ">
                              <input
                                type="submit"
                                value="Sign In"
                                className="btn btn-success w-100 fs-4"
                              />
                            </div>

                            {/* <div className="mt-4 text-center">
                              <div className="signin-other-title">
                                <h5 className="fs-13 mb-4 title">
                                  Sign In with
                                </h5>
                              </div>

                              <div className="social-icons">
                                <button
                                  type="button"
                                  className="btn btn-primary btn-icon waves-effect waves-light "
                                >
                                  <i className="ri-facebook-fill fs-16"></i>
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-danger btn-icon waves-effect waves-light"
                                >
                                  <i className="ri-google-fill fs-16"></i>
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-dark btn-icon waves-effect waves-light"
                                >
                                  <i className="ri-github-fill fs-16"></i>
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-info btn-icon waves-effect waves-light"
                                >
                                  <i className="ri-twitter-fill fs-16"></i>
                                </button>
                              </div>
                            </div> */}
                          </form>
                        </div>

                        <div className="mt-5 fs-3 text-center">
                          <p className="mb-0">
                            Don't have an account ?{" "}
                            <Link
                              href="/register"
                              className="fw-semibold text-primary text-decoration-underline"
                            >
                              {" "}
                              Signup
                            </Link>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <!-- end col --> */}
                  </div>
                  {/* <!-- end row -->
                        </div> */}
                  {/* <!-- end card --> */}
                </div>
                {/* <!-- end col -->/ */}
              </div>
            </div>
          </div>

          {/* <!-- footer --> */}
          <footer className="footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="text-center">
                    <p className="mb-0 fs-2">
                      &copy; {getCurrentYear()} SquadDeck. Crafted with{" "}
                      <i className="mdi mdi-heart text-danger"></i> by Netmow
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          {/* <!-- end Footer --> */}
        </div>
      </div>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
        crossOrigin="anonymous"
      />
    </>
  );
};

export default Login;
