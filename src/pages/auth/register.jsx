/* eslint-disable react/no-unescaped-entities */

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import DetailsInfo from "@/components/register/DetailsInfo";
import InitialInfo from "@/components/register/InitialInfo";
import EmailDone from "@/components/register/EmailDone";
import EmailOtp from "@/components/register/EmailOtp";
import mainLogo from "../../../public/assets/img/main_logo.png";
import styles from './register.module.css';
import Icon from '@mdi/react';
import { mdiHeart } from '@mdi/js';

const Register = () => {
  const [step, setStep] = useState(1);
  const [userInfo, setUserInfo] = useState({
    organisation_name: "",
    subdomain: "",
    phone: "",
    sports_category: "",
    country: "",
    email: "",
    password: "",
    confrim_password: "",
  });
  
  //console.log("u ", userInfo);
  return (
    <>
      {/* <!-- auth-page wrapper --> */}
      <div className={`${styles.auth_page_wrapper} ${styles.auth_bg_cover} d-flex flex-column justify-content-center align-items-center min-vh-100 pt-5 pb-2`}>
        <div className={styles.bg_overlay}></div>
        {/* <!-- auth-page content --> */}
        <div className={`${styles.auth_page_content} overflow-hidden pt-lg-5`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="card overflow-hidden border-0">
                  <div className="row justify-content-center g-0">
                    <div className="col-lg-6">
                      <div className={`p-lg-5 p-4 position-relative ${styles.auth_one_bg} h-100`}>
                        <div className={styles.card_overlay}></div>
                        <div className="position-relative h-100 d-flex flex-column">
                          <div className="mb-4">
                            <Link href="/" className="d-block">
                              <Image src={mainLogo} alt="" priority={true} />
                            </Link>
                          </div>
                          <div className="mt-auto">
                            <div className="mb-3">
                              <i className={`ri-double-quotes-l display-1 ${styles.text_primary}`}></i>
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
                                  <p className="fs-4 fst-italic">
                                    " Great! Clean code, clean design, easy for
                                    customization. Thanks very much! "
                                  </p>
                                </div>
                                <div className="carousel-item">
                                  <p className="fs-4 fst-italic">
                                    " The theme is really great with an amazing
                                    customer support. Thanks very much!"
                                  </p>
                                </div>
                                <div className="carousel-item">
                                  <p className="fs-4 fst-italic">
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
                    {step === 1 && (
                      <InitialInfo
                        setUserInfo={setUserInfo}
                        userInfo={userInfo}
                        step={step}
                        setStep={setStep}
                      />
                    )}
                    {step === 2 && (
                      <EmailOtp
                        userEmail={userInfo.email}
                        step={step}
                        setStep={setStep}
                      />
                    )}
                    {step === 3 && <EmailDone step={step} setStep={setStep} />}
                    {step === 4 && (
                      <DetailsInfo
                        userInfo={userInfo}
                        setUserInfo={setUserInfo}
                        step={step}
                        setStep={setStep}
                      />
                    )}
                  </div>
                </div>
                {/* <!-- end card --> */}
              </div>
              {/* <!-- end col --> */}
            </div>
            {/* <!-- end row --> */}
          </div>
          {/* <!-- end container --> */}
        </div>
        {/* <!-- end auth page content --> */}

        {/* <!-- footer --> */}
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center">
                  <p className="mb-0 fs-5 text-light">
                    &copy; {new Date().getFullYear()} SquadDeck. Crafted with{" "}
                    <Icon path={mdiHeart} size={1} color="red"/> by NETMOW
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* <!-- end Footer --> */}
      </div>
      {/* <!-- end auth-page-wrapper --> */}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" />
    </>
  );
};

export default Register;
