import React, { useState } from "react";
import styles from "../../pages/auth/register.module.css";

const InitialInfo = ({ setStep, step, setUserInfo, userInfo }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);


  const handleStepsAndData = async () => {
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    let isValid = true;

    if (!email) {
      setEmailError("Please enter an email.");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Please enter a password.");
      isValid = false;
    }

    if (!confirm_password) {
      setConfirmPasswordError("Please confirm your password.");
      isValid = false;
    }

    if (password !== confirm_password) {
      setConfirmPasswordError(
        "Passwords do not match. Please confirm your password."
      );
      isValid = false;
    }

    if (isValid) {
      // Rest of your code to update userInfo and perform other tasks
      setUserInfo({
        ...userInfo,
        email,
        password,
        confirm_password,
      });

      console.log("Updated userInfo:", {
        ...userInfo,
        email,
        password,
        confirm_password,
      });

      setStep(step + 1);

      const res = await fetch("https://squaddeck.onrender.com/public/api/otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      console.log(res);
    } else {
      // Form data is not valid, prevent navigation
      console.log("Form data is not valid. Cannot proceed to the next step.");
    }
  };

  return (
    <>
      <div className="col-lg-6 fs-4 p-4">
        <div className="p-lg-5">
          <div>
            <h5 className="quote-color fs-2 fw-bold">Register Account</h5>
            <p className="text-muted fs-5">
              Get your Free SquadDeck account now.
            </p>
          </div>

          <div className="mt-4">
            <form className="needs-validation">
              <div className="mb-3">
                <label htmlFor="useremail" className="form-label">
                  Email <span className="text-danger ">*</span>
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control fs-4 mb-2"
                  placeholder="Enter email address"
                  required
                />
                {emailError && (
                  <span className="text-danger">{emailError}</span>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="password-input">
                  Password
                </label>
                <div className="position-relative auth-pass-inputgroup">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type={passwordShow ? "text": "password"}
                    className="form-control pe-5 password-input mb-2 fs-4"
                    onPaste={(e) => e.preventDefault()}
                    placeholder="Enter password"
                    aria-describedby="passwordInput"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    required
                  />
                  <button
                    className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon px-3"
                    type="button"
                    id="password-addon"
                    onClick={() => setPasswordShow(!passwordShow)} 
                    style={{backgroundColor: "transparent"}}
                  >
                    <i className={`${passwordShow ? "ri-eye-off-line align-middle" : "ri-eye-fill align-middle"}`}></i>
                  </button>
                  {passwordError && (
                    <span className="text-danger">{passwordError}</span>
                  )}
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="password-input">
                  Confirm Password
                </label>
                <div className="position-relative auth-pass-inputgroup pb-4">
                  <input
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    className="form-control pe-5 password-input mb-2 fs-4"
                    onPaste={(e) => e.preventDefault()}
                    placeholder="Enter password"
                    aria-describedby="passwordInput"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    required
                  />
                  <button
                    className="position-absolute end-0 top-0 text-decoration-none text-muted px-3"
                    type="button"
                    style={{backgroundColor: "transparent"}}
                    onClick={() => setPasswordShow(!passwordShow)} 
                  >
                    <i className={`${passwordShow ? "ri-eye-off-line align-middle" : "ri-eye-fill align-middle"}`}></i>
                  </button>
                  {confirmPasswordError && (
                    <span className="text-danger">{confirmPasswordError}</span>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <button
                  onClick={handleStepsAndData}
                  className={`${styles.button} btn btn-success w-100 fs-4`}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default InitialInfo;
