"use client";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const notify = () =>
    toast.success("Login Successful!", {
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
      // Reset form fields to empty after successful login
      setEmail("");
      setPassword("");

      notify();
      setRedirectToHome(true);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    let validationErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      validationErrors.email = "Please enter a valid email address";
    }

    if (!password.trim()) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password =
        "Password should be at least 6 characters long";
    }

    return validationErrors;
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (redirectToHome) {
      window.location.href = "/";
    }
  }, [redirectToHome]);

  return (
    <Layout>
      <ToastContainer />
      <div className="login_page_bg">
        <div className="pt-28 flex flex-col justify-center items-center py-10">
          <div className="login_form border p-10 bg-white rounded-3xl shadow-2xl lg:w-[50%] md:w-[80%] max-sm:w-[90%]">
            <div className="text-lg bg-secondary text-white rounded-full px-4 py-1">
              Login to your Account
            </div>
            <h2 className="text-blackClr text-3xl font-bold mb-10">
              As a Tutor/Student
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">
                  Email Address<span className="asterisk">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email (e.g. aditya@gmail.com)"
                  required
                />
                {errors.email && (
                  <p className="error-message text-red-600 text-sm">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="form-group relative">
                <label htmlFor="password">
                  Password<span className="asterisk">*</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                {errors.password && (
                  <p className="error-message text-red-600 text-sm">
                    {errors.password}
                  </p>
                )}
              </div>

              <div className="flex justify-center items-center text-xs mt-2">
                <Link href="/forget-password">Forgot Password?</Link>
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Login
              </button>

              <div className="text-center pt-5 text-sm">
                Don't have account?
                <Link
                  href="/signup-option"
                  className="font-semibold pl-1 hover:underline"
                >
                  Signup Now
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
