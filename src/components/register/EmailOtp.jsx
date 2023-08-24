/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { createRef, useState } from "react";


const EmailOtp = ({ step, setStep, userEmail }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = [0, 1, 2, 3].map(() =>
    createRef()
  );

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (!isNaN(parseInt(value))) {
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index] = value;

        return newOtp;
      });
      if (index < inputRefs.length - 1) {
        const nextInputRef = inputRefs[
          index + 1
       ];
        if (nextInputRef && "current" in nextInputRef && nextInputRef.current) {
          nextInputRef.current.focus();
        }
      }
    }
  };

  const handleKeyDown = (event) => {
    const keyboardEvent = event;
    if (keyboardEvent.key === "Backspace" && index >= 0) {
      if (index < 1) {
        const newOtp = [...otp];
        newOtp[0] = "";
        setOtp(newOtp);
      } else {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);

        const prevInputRef = inputRefs[
          index - 1
        ];
        if (prevInputRef.current) {
          prevInputRef.current.focus();
        }
      }
    }
  };

  const confrimHandler = async (e) => {
    e.preventDefault();
    const body = {
      email: userEmail,
      code: otp.join(""),
    };
    // dispatch action
    // here

    console.log(body);
    setStep(step + 1);

    const res = await fetch(
      "https://squaddeck.onrender.com/public/api/check-otp",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userEmail, otp: parseInt(otp.join("")) }),
      }
    );

    console.log(res);
  };
  console.log(userEmail);
  return (
    <>
      <div className="col-lg-6 p-4">
        <div className="p-lg-5">
          <div className="mb-4 p-4">
            <div className="avatar-lg mx-auto">
              <div className="avatar-title bg-light text-primary display-5 rounded-circle">
                <i className="ri-mail-line"></i>
              </div>
            </div>
          </div>
          <div className="text-muted text-center fs-2 mx-lg-3">
            <h4 className="fs-1 pb-3">Verify Your Email</h4>
            <p>
              Please enter the 4 digit code sent to{" "}
              <span className="fw-semibold">example@abc.com</span>
            </p>
          </div>

          <div className="pt-4">
            <div>
              <div className="row d-flex justify-content-center align-items-center p-4">
                {otp.map((digit, index) => (
                  <div className="col-2" key={index}>
                    <div className="mb-3">
                      <label
                        htmlFor={`digit${index + 1}-input`}
                        className="visually-hidden"
                      >
                        Digit {index + 1}
                      </label>
                      <input
                        autoComplete="off"
                        type="text"
                        ref={inputRefs[index]}
                        value={digit}
                        className="form-control p-3 text-center bg-light border-light"
                        maxLength={1}
                        id={`digit${index + 1}-input`}
                        onChange={(e) => handleInputChange(index, e)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <button
                  onClick={(e) => confrimHandler(e)}
                  className="btn btn-success fs-2 w-100"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 text-center fs-2">
            <p className="mb-0">
              Didn't receive a code ?{" "}
              <a
                href="auth-pass-reset-cover.html"
                className="fw-semibold text-primary text-decoration-underline"
              >
                Resend
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailOtp;
