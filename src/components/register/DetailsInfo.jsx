"use client";
import { useRouter } from "next/navigation";
import React, { useState, ChangeEvent } from "react";


const DetailsInfo = ({ userInfo, setUserInfo }) => {
  const [organisation_name, setOrganizationName] = useState("");
  const [subdomain, setSubDomain] = useState("");
  const [sports_category, setSelectSports] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");

  const navigate = useRouter();

  const handleSportsCategoryChange = (e) => {
    setSelectSports(e.target.value);
  };
  const handleLocationCategoryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleUserAllDataToRegister = async (e) => {
    e.preventDefault();
    console.log("newData:");
    setUserInfo({
      ...userInfo,
      organisation_name,
      subdomain,
      phone,
      sports_category,
      country,
    });

    const newData = {
      ...userInfo,
      organisation_name,
      subdomain,
      phone,
      sports_category,
      country,
    };

    const res = await fetch(
      "https://squaddeck.onrender.com/public/api/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      }
    );

    navigate.push("/login");
    console.log("newData:", newData);
    console.log(res);
  };

  console.log("Updated userInfo:", userInfo);

  return (
    <>
      <div className="col-lg-6 fs-3 p-4">
        <div className="m-4">
          <div>
            <h5 className="quote-color fs-2 pb-2">
              Enter your necessary information
            </h5>
            <p className="text-danger text-bold">All Fields Are Required</p>
          </div>

          <div className="mt-3">
            <form
              onSubmit={(e) => handleUserAllDataToRegister(e)}
              className="needs-validation"
            >
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Organisation name <span className="text-danger">*</span>
                </label>
                <input
                  onChange={(e) => setOrganizationName(e.target.value)}
                  type="text"
                  className="form-control fs-4"
                  id="username"
                  placeholder="Enter organisation name"
                  required
                />
                <div className="invalid-feedback">
                  Organisation name is required
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="subdomain" className="form-label">
                  Subdomain name (part of URL, cannot be changed){" "}
                  <span className="text-danger">*</span>
                </label>
                <input
                  onChange={(e) => setSubDomain(e.target.value)}
                  type="text"
                  className="form-control fs-4"
                  id="username"
                  placeholder="Enter subdomain"
                  required
                />
                <div className="invalid-feedback">Sub domain is required</div>
              </div>

              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Select Sports <span className="text-danger">*</span>
                </label>
                <select
                  name="category"
                  id="category"
                  className="form-select fs-4"
                  required
                  onChange={(e) => handleSportsCategoryChange(e)}
                >
                  <option defaultValue="Basketball">Basketball</option>
                  <option>Cricket</option>
                  <option>Football</option>
                  <option>Rugby</option>
                  <option>Boxing</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Work Phone <span className="text-danger">*</span>
                </label>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  className="form-control fs-4"
                  id="phone"
                  placeholder="Enter work phone"
                  required
                />
                <div className="invalid-feedback">Please enter work phone</div>
              </div>

              <div className="mb-3">
                <label htmlFor="location" className="form-label">
                  Location <span className="text-danger">*</span>
                </label>
                <select
                  name="location"
                  id="location"
                  className="form-select fs-4"
                  required
                  onChange={(e) => handleLocationCategoryChange(e)}
                >
                  <option defaultValue="Australia">Australia</option>
                  <option>Bangladesh</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                </select>
              </div>

              <div className="mt-4 pt-2">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-success pt-3 fs-2 w-100"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsInfo;
