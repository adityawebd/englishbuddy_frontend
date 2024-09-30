"use client";
import React, { useState, useEffect } from "react";

import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [redirectToHome, setRedirectToHome] = useState(false);

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

  const cityOptions = {
    "United States": [
      "New York",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Phoenix",
    ],
    Canada: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
    Australia: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
    India: ["Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad"],
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Reset all form fields to empty
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setCountry("");
      setCity("");
      setMessage("");
      notify();
      //   alert("Form Submitted Successfully!");
      setRedirectToHome(true);
    } else {
      setErrors(errors);
    }
  };

  const validateForm = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstname.trim()) {
      errors.firstname = "First Name is required";
    } else if (firstname.length < 3) {
      errors.firstname = "First name should not be less than 3 characters";
    }

    if (!email.trim()) {
      errors.email = "Email  is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!phone.trim()) {
      errors.phone = "Phone Number is required";
    } else if (phone.length < 10) {
      errors.phone = "Phone must have valid character length";
    }

    if (!country.trim()) {
      errors.country = "Country is required";
    }

    if (!city.trim()) {
      errors.city = "City is required";
    }

    if (message.length < 10) {
      errors.message = "Message should be greater than 10 characters";
    }

    return errors;
  };

  useEffect(() => {
    if (redirectToHome) {
      window.location.href = "/";
    }
  }, [redirectToHome]);

  return (
    <>
      <ToastContainer />
      <div className="container flex flex-col justify-center items-center">
        <h2 className="text-blackClr text-3xl font-bold mb-3">
          Get In Touch With Us!
        </h2>
        <div
          className="contact_form border p-10 bg-gray-200"
          onSubmit={handleSubmit}
        >
          <form>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
              <div className="form-group">
                <label htmlFor="firstName">
                  First Name<span className="asterik">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter first name"
                  required
                />
                {errors.firstname && (
                  <p className="error-message">{errors.firstname}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  gap-4">
              <div className="form-group">
                <label htmlFor="email">
                  Email Address<span className="asterik">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
                {errors.email && (
                  <p className="error-message">{errors.email}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="phone">
                  Phone Number<span className="asterik">*</span>
                </label>
                <input
                  type="number"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter Phone Number"
                  required
                />
                {errors.phone && (
                  <p className="error-message">{errors.phone}</p>
                )}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
              <div className="form-group">
                <label htmlFor="country" className="block">
                  Desired Country<span className="asterik">*</span>
                </label>
                <select
                  id="country"
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                    setCity(""); // Reset city when country changes
                  }}
                  required
                >
                  <option value="">-- Select Country --</option>
                  {Object.keys(cityOptions).map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                {errors.country && (
                  <p className="error-message">{errors.country}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="city" className="block">
                  Nearest City<span className="asterik">*</span>
                </label>
                <select
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  disabled={!country} // Disable if no country is selected
                  required
                >
                  <option value="">-- Select City --</option>
                  {country &&
                    cityOptions[country].map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                </select>
                {errors.city && <p className="error-message">{errors.city}</p>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Your Query<span className="asterik">*</span>
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="My query is regarding..."
                required
              />
              {errors.message && (
                <p className="error-message">{errors.message}</p>
              )}
            </div>

            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
