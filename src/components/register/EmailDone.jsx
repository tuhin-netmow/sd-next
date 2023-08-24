"use client";
import React from "react";

const EmailDone = ({ step, setStep }) => {
  return (
    <>
      <div className="col-lg-6 fs-2">
        <div className="p-lg-5 p-4 text-center">
          <div className="avatar-lg mx-auto mt-2">
            <div className="avatar-title bg-light text-success display-3 rounded-circle">
              <i className="ri-checkbox-circle-fill"></i>
            </div>
          </div>
          <div className="mt-4 pt-2">
            <h4 className="fs-2 p-2">Email Verification Done !</h4>
            <p className="text-muted mx-4">
              Aww yeah, you successfully read this important message.
            </p>
            <div className="mt-4 py-4">
              <button
                onClick={() => setStep(step + 1)}
                className="btn btn-success fs-2 w-100"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailDone;
