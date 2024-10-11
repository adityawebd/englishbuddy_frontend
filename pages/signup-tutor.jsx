"use client";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";

import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";

export default function SignUp() {
  const [fullname, setFullName] = useState("");
  const [indiEmail, setIndiEmail] = useState("");
  const [indiPhone, setIndiPhone] = useState("");
  const [gender, setGender] = useState("");
  const [indipincode, setIndiPincode] = useState("");
  const [indicategory, setIndiCategory] = useState("");

  const [instituteName, setInstituteName] = useState("");
  const [ownerName, setInstituteOwnerName] = useState("");
  const [instituteEmail, setInstituteEmail] = useState("");
  const [instituePhone, setInstituePhone] = useState("");
  const [instituePincode, setInstituePincode] = useState("");
  const [instituteCategory, setInstituteCategory] = useState("");

  const [indiPassword, setIndiPassword] = useState("");
  const [indiConfirmPassword, setIndiConfirmPassword] = useState("");
  const [institutePassword, setInstitutePassword] = useState("");
  const [instituteConfirmPassword, setInstituteConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to toggle confirm password visibility

  const [showPassword2, setShowPassword2] = useState(false); // State to toggle password visibility
  const [showConfirmPassword2, setShowConfirmPassword2] = useState(false); // State to toggle confirm password visibility

  const [errors, setErrors] = useState({});
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [selectedForm, setSelectedForm] = useState("individual"); // new state to track selected form

  const notify = () =>
    toast.success("Form Submitted Successfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Reset all form fields to empty
      setFullName("");
      setIndiEmail("");
      setIndiPhone("");
      setGender("");
      setIndiPincode("");
      setIndiCategory("");
      setIndiPassword("");
      setIndiConfirmPassword("");

      setInstituteName("");
      setInstituteOwnerName("");
      setInstituteEmail("");
      setInstituePhone("");
      setInstituePincode("");
      setInstituteCategory("");
      setInstitutePassword("");
      setInstituteConfirmPassword("");

      notify();
      setRedirectToHome(true);
    } else {
      setErrors(validationErrors);
    }
  };

  // const validateForm = () => {
  //   let validationErrors = {};
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   const emailRegex2 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   const phoneRegex = /^[0-9]{10}$/; // Only allows 10-digit numbers
  //   const phoneRegex2 = /^[0-9]{10}$/; // Only allows 10-digit numbers

  //   if (!fullname.trim()) {
  //     validationErrors.fullname = "Full Name is required";
  //   } else if (fullname.length < 3) {
  //     validationErrors.fullname =
  //       "Full name should be at least 3 characters long";
  //   }

  //   if (!indiEmail.trim()) {
  //     validationErrors.indiEmail = "Email is required";
  //   } else if (!emailRegex.test(indiEmail)) {
  //     validationErrors.indiEmail = "Please enter a valid email address";
  //   }

  //   if (!indiPhone.trim()) {
  //     validationErrors.indiPhone = "Phone Number is required";
  //   } else if (!phoneRegex.test(indiPhone)) {
  //     validationErrors.indiPhone = "Please enter a valid 10-digit phone number";
  //   }

  //   if (!gender.trim()) {
  //     validationErrors.gender = "Gender is required";
  //   }

  //   if (!instituteName.trim()) {
  //     validationErrors.instituteName = "Institue Name is required";
  //   } else if (instituteName.length < 3) {
  //     validationErrors.instituteName =
  //       "Institue name should be at least 3 characters long";
  //   }

  //   if (!instituteEmail.trim()) {
  //     validationErrors.instituteEmail = "Institute Email is required";
  //   } else if (!emailRegex2.test(instituteEmail)) {
  //     validationErrors.instituteEmail = "Please enter a valid email address";
  //   }

  //   if (!instituePhone.trim()) {
  //     validationErrors.instituePhone = "Phone Number is required";
  //   } else if (!phoneRegex2.test(instituePhone)) {
  //     validationErrors.instituePhone = "Please enter a valid 10-digit phone number";
  //   }

  //   if (!pincode.trim()) {
  //     validationErrors.pincode = "Pincode/Locality is required";
  //   } else if (pincode.length < 6) {
  //     validationErrors.pincode = "Pincode should be 6 digits long";
  //   }

  //   if (category.length < 5) {
  //     validationErrors.category = "Category should be at least 5 characters long";
  //   }

  //   return validationErrors;
  // };
  const validateForm = () => {
    let validationErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/; // Only allows 10-digit numbers

    if (selectedForm === "individual") {
      // Validate individual fields
      if (!fullname.trim()) {
        validationErrors.fullname = "Full Name is required";
      } else if (fullname.length < 3) {
        validationErrors.fullname =
          "Full name should be at least 3 characters long";
      }

      if (!indiEmail.trim()) {
        validationErrors.indiEmail = "Email is required";
      } else if (!emailRegex.test(indiEmail)) {
        validationErrors.indiEmail = "Please enter a valid email address";
      }

      if (!indiPhone.trim()) {
        validationErrors.indiPhone = "Phone Number is required";
      } else if (!phoneRegex.test(indiPhone)) {
        validationErrors.indiPhone =
          "Please enter a valid 10-digit phone number";
      }

      if (!gender.trim()) {
        validationErrors.gender = "Gender is required";
      }

      // Shared fields validation (for both individual and institute)
      if (!indipincode.trim()) {
        validationErrors.indipincode = "Pincode/Locality is required";
      } else if (indipincode.length < 6) {
        validationErrors.indipincode = "Pincode should be 6 digits long";
      }

      if (indicategory.length < 5) {
        validationErrors.indicategory =
          "Category should be at least 5 characters long";
      }

      if (!indiPassword.trim()) {
        validationErrors.indiPassword = "Password is required";
      } else if (indiPassword.length < 6) {
        validationErrors.indiPassword =
          "Password should be at least 6 characters long";
      }

      if (!indiConfirmPassword.trim()) {
        validationErrors.indiConfirmPassword = "Confirm Password is required";
      } else if (indiConfirmPassword.length < 6) {
        validationErrors.indiConfirmPassword =
          "Confirm Password should be at least 6 characters long";
      }

      if (indiPassword !== indiConfirmPassword) {
        validationErrors.indiPassword =
          "Password and Confirm Password do no match";
      }
    } else if (selectedForm === "institute") {
      // Validate institute fields
      if (!instituteName.trim()) {
        validationErrors.instituteName = "Institute Name is required";
      } else if (instituteName.length < 3) {
        validationErrors.instituteName =
          "Institute name should be at least 3 characters long";
      }

      if (!ownerName.trim()) {
        validationErrors.ownerName = "Owner Name is required";
      }

      if (!instituteEmail.trim()) {
        validationErrors.instituteEmail = "Email is required";
      } else if (!emailRegex.test(instituteEmail)) {
        validationErrors.instituteEmail = "Please enter a valid email address";
      }

      if (!instituePhone.trim()) {
        validationErrors.instituePhone = "Phone Number is required";
      } else if (!phoneRegex.test(instituePhone)) {
        validationErrors.instituePhone =
          "Please enter a valid 10-digit phone number";
      }

      // Shared fields validation (for both individual and institute)
      if (!instituePincode.trim()) {
        validationErrors.instituePincode = "Pincode/Locality is required";
      } else if (instituePincode.length < 6) {
        validationErrors.instituePincode = "Pincode should be 6 digits long";
      }

      if (instituteCategory.length < 5) {
        validationErrors.instituteCategory =
          "Category should be at least 5 characters long";
      }

      if (!institutePassword.trim()) {
        validationErrors.institutePassword = "Confirm Password is required";
      } else if (institutePassword.length < 6) {
        validationErrors.institutePassword =
          "Confirm Password should be at least 6 characters long";
      }

      if (!instituteConfirmPassword.trim()) {
        validationErrors.instituteConfirmPassword = "Password is required";
      } else if (instituteConfirmPassword.length < 6) {
        validationErrors.instituteConfirmPassword =
          "Password should be at least 6 characters long";
      }

      if (institutePassword !== instituteConfirmPassword) {
        validationErrors.institutePassword =
          "Password and Confirm Password do no match";
      }
    }

    return validationErrors;
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };
  const toggleConfirmPasswordVisibility2 = () => {
    setShowConfirmPassword2(!showConfirmPassword2);
  };

  useEffect(() => {
    if (redirectToHome) {
      window.location.href = "/login";
    }
  }, [redirectToHome]);

  return (
    <Layout>
      <ToastContainer />
      <div className="pt-28 container flex flex-col justify-center items-center py-10">
        <div className="text-lg bg-secondary text-white rounded-full px-4 py-1">
          Signup
        </div>
        <h2 className="text-blackClr text-3xl font-bold mb-3">As a Tutor</h2>

        <div className="contact_form border p-10 bg-gray-200">
          {/* Checkbox selection for form type */}
          <div className="mb-5 bg-primary/20 rounded-full px-4 py-2 max-sm:rounded-lg">
            <label className="mr-4 max-sm:block ">
              <input
                type="radio"
                name="formType"
                value="individual"
                onChange={() => setSelectedForm("individual")}
                checked={selectedForm === "individual"}
              />{" "}
              <span>I am an Individual</span>
            </label>
            <label>
              <input
                type="radio"
                name="formType"
                value="institute"
                onChange={() => setSelectedForm("institute")}
                checked={selectedForm === "institute"}
              />{" "}
              I run an Institute
            </label>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Render the individual tutor form only when selected */}
            {selectedForm === "individual" && (
              <div className="individualTutor">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
                  <div className="form-group">
                    <label htmlFor="fullname">
                      Full Name<span className="asterisk">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      value={fullname}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your full name (e.g. Aditya Raj)"
                      required
                    />
                    {errors.fullname && (
                      <p className="error-message">{errors.fullname}</p>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="indiEmail">
                      Email Address<span className="asterisk">*</span>
                    </label>
                    <input
                      type="email"
                      id="indiEmail"
                      value={indiEmail}
                      onChange={(e) => setIndiEmail(e.target.value)}
                      placeholder="Enter your email (e.g. aditya@gmail.com)"
                      required
                    />
                    {errors.indiEmail && (
                      <p className="error-message">{errors.indiEmail}</p>
                    )}
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
                  <div className="form-group">
                    <label htmlFor="indiPhone">
                      Phone Number<span className="asterisk">*</span>
                    </label>
                    <input
                      type="text"
                      id="indiPhone"
                      value={indiPhone}
                      onChange={(e) => setIndiPhone(e.target.value)}
                      placeholder="Enter your phone number"
                      required
                    />
                    {errors.indiPhone && (
                      <p className="error-message">{errors.indiPhone}</p>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="gender" className="block">
                      Gender<span className="asterisk">*</span>
                    </label>
                    <select
                      id="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.gender && (
                      <p className="error-message">{errors.gender}</p>
                    )}
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
                  <div className="form-group relative">
                    <label htmlFor="indiPassword">
                      Password<span className="asterisk">*</span>
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="indiPassword"
                      value={indiPassword}
                      onChange={(e) => setIndiPassword(e.target.value)}
                      placeholder="********"
                      required
                    />
                    {/* Toggle password visibility */}
                    <span
                      className="absolute right-2 top-9 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                    {errors.indiPassword && (
                      <p className="error-message">{errors.indiPassword}</p>
                    )}
                  </div>

                  <div className="form-group relative">
                    <label htmlFor="indiConfirmPassword">
                      Confirm Password<span className="asterisk">*</span>
                    </label>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="indiConfirmPassword"
                      value={indiConfirmPassword}
                      onChange={(e) => setIndiConfirmPassword(e.target.value)}
                      placeholder="********"
                      required
                    />
                    {/* Toggle password visibility */}
                    <span
                      className="absolute right-2 top-9 cursor-pointer"
                      onClick={toggleConfirmPasswordVisibility}
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                    {errors.indiConfirmPassword && (
                      <p className="error-message">
                        {errors.indiConfirmPassword}
                      </p>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="indipincode">
                    Pincode/Locality<span className="asterik">*</span>
                  </label>
                  <input
                    id="indipincode"
                    value={indipincode}
                    onChange={(e) => setIndiPincode(e.target.value)}
                    placeholder="Enter pincode or locaity (e.g. 560076 or Netaji Subash Place)"
                    required
                  />
                  {errors.indipincode && (
                    <p className="error-message">{errors.indipincode}</p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="indicategory">
                    Main Categories<span className="asterik">*</span>
                  </label>
                  <textarea
                    id="indicategory"
                    value={indicategory}
                    onChange={(e) => setIndiCategory(e.target.value)}
                    placeholder="Enter main category you teach, more could be added later"
                    required
                  />
                  {errors.indicategory && (
                    <p className="error-message">{errors.indicategory}</p>
                  )}
                </div>
              </div>
            )}

            {/* Render the institute tutor form only when selected */}
            {selectedForm === "institute" && (
              <div className="instituteTutor">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
                  <div className="form-group">
                    <label htmlFor="instituteName">
                      Institute Name<span className="asterisk">*</span>
                    </label>
                    <input
                      type="text"
                      id="instituteName"
                      value={instituteName}
                      onChange={(e) => setInstituteName(e.target.value)}
                      placeholder="Enter institute name (e.g. T.I.M.E)"
                      required
                    />
                    {errors.instituteName && (
                      <p className="error-message">{errors.instituteName}</p>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="ownerName">
                      Owner Name<span className="asterisk">*</span>
                    </label>
                    <input
                      type="text"
                      id="ownerName"
                      value={ownerName}
                      onChange={(e) => setInstituteOwnerName(e.target.value)}
                      placeholder="Owner or contact person's name"
                      required
                    />
                    {errors.ownerName && (
                      <p className="error-message">{errors.ownerName}</p>
                    )}
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
                  <div className="form-group">
                    <label htmlFor="instituteEmail">
                      Email Address<span className="asterisk">*</span>
                    </label>
                    <input
                      type="email"
                      id="instituteEmail"
                      value={instituteEmail}
                      onChange={(e) => setInstituteEmail(e.target.value)}
                      placeholder="Enter institue email (e.g. time@gmail.com)"
                      required
                    />
                    {errors.instituteEmail && (
                      <p className="error-message">{errors.instituteEmail}</p>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="instituePhone">
                      Phone Number<span className="asterisk">*</span>
                    </label>
                    <input
                      type="text"
                      id="instituePhone"
                      value={instituePhone}
                      onChange={(e) => setInstituePhone(e.target.value)}
                      placeholder="Enter institute phone number"
                      required
                    />
                    {errors.instituePhone && (
                      <p className="error-message">{errors.instituePhone}</p>
                    )}
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
                  <div className="form-group relative">
                    <label htmlFor="institutePassword">
                      Password<span className="asterisk">*</span>
                    </label>
                    <input
                      type={showPassword2 ? "text" : "password"}
                      id="institutePassword"
                      value={institutePassword}
                      onChange={(e) => setInstitutePassword(e.target.value)}
                      placeholder="********"
                      required
                    />
                    {/* Toggle password visibility */}
                    <span
                      className="absolute right-2 top-9 cursor-pointer"
                      onClick={togglePasswordVisibility2}
                    >
                      {showPassword2 ? <FaEyeSlash /> : <FaEye />}
                    </span>
                    {errors.institutePassword && (
                      <p className="error-message">
                        {errors.institutePassword}
                      </p>
                    )}
                  </div>

                  <div className="form-group relative">
                    <label htmlFor="instituteConfirmPassword">
                      Confirm Password<span className="asterisk">*</span>
                    </label>
                    <input
                      type={showConfirmPassword2 ? "text" : "password"}
                      id="instituteConfirmPassword"
                      value={instituteConfirmPassword}
                      onChange={(e) =>
                        setInstituteConfirmPassword(e.target.value)
                      }
                      placeholder="********"
                      required
                    />
                    {/* Toggle password visibility */}
                    <span
                      className="absolute right-2 top-9 cursor-pointer"
                      onClick={toggleConfirmPasswordVisibility2}
                    >
                      {showConfirmPassword2 ? <FaEyeSlash /> : <FaEye />}
                    </span>
                    {errors.instituteConfirmPassword && (
                      <p className="error-message">
                        {errors.instituteConfirmPassword}
                      </p>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="instituePincode">
                    Pincode/Locality<span className="asterik">*</span>
                  </label>
                  <input
                    id="instituePincode"
                    value={instituePincode}
                    onChange={(e) => setInstituePincode(e.target.value)}
                    placeholder="Enter pincode or locaity (e.g. 560076 or Netaji Subash Place)"
                    required
                  />
                  {errors.instituePincode && (
                    <p className="error-message">{errors.instituePincode}</p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="instituteCategory">
                    Main Categories<span className="asterik">*</span>
                  </label>
                  <textarea
                    id="instituteCategory"
                    value={instituteCategory}
                    onChange={(e) => setInstituteCategory(e.target.value)}
                    placeholder="Enter main category you teach, more could be added later"
                    required
                  />
                  {errors.instituteCategory && (
                    <p className="error-message">{errors.instituteCategory}</p>
                  )}
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button type="submit">create profile</button>

            <div className="text-center pt-5 text-sm">
              Already have an account?
              <Link href="/login" className="font-semibold pl-1 hover:underline">Login here</Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
