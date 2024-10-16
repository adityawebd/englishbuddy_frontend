"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
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

  const showToast = (type, message, options = {}) => {
    const toastOptions = {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
      ...options, // Merge any additional options
    };

    switch (type) {
      case "success":
        toast.success(message, toastOptions);
        break;
      case "info":
        toast.info(message, toastOptions);
        break;
      case "error":
        toast.error(message, toastOptions);
        break;
      default:
        toast(message, toastOptions); // Fallback to a default toast
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      const data = {
        firstname,
        lastname,
        email,
        phone,
        country,
        city,
        message,
      };

      try {
        const response = await axios.post("/api/contactus", data);
        showToast("success", "Request Submitted successfully", {
          autoClose: 3000,
        });

        // Reset all form fields to empty
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setCountry("");
        setCity("");
        setMessage("");
      } catch (error) {
        console.error("Error submitting data:", error);
        showToast("error", "❌ Error! Something went wrong.", {
          autoClose: 3000,
        });
      }
    } else {
      setErrors(errors);
    }
  };

  const handleInputChange = (field, value) => {
    // Clear error when the input is valid
    if (field === "firstname" && value.trim().length >= 3) {
      setErrors((prevErrors) => ({ ...prevErrors, firstname: null }));
    }
    if (field === "email" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: null }));
    }
    if (field === "phone" && value.length === 10) {
      setErrors((prevErrors) => ({ ...prevErrors, phone: null }));
    }
    if (field === "country" && value.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, country: null }));
    }
    if (field === "city" && value.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, city: null }));
    }
    if (field === "message" && value.length >= 10) {
      setErrors((prevErrors) => ({ ...prevErrors, message: null }));
    }

    switch (field) {
      case "firstname":
        setFirstName(value);
        break;
      case "lastname":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        // Allow only up to 10 digits
        if (value.length <= 10) {
          setPhone(value);
        }
        break;
      case "country":
        setCountry(value);
        setCity(""); // Reset city when country changes
        break;
      case "city":
        setCity(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
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
        <h2 className="text-blackClr text-3xl font-bold mb-3 max-sm:text-xl max-sm:mt-5">
          Get In Touch With Us!
        </h2>
        <div className="contact_form p-10 rounded-3xl" onSubmit={handleSubmit}>
          <form>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
              <div className="form-group">
                <input
                  type="text"
                  id="firstName"
                  value={firstname}
                  onChange={(e) =>
                    handleInputChange("firstname", e.target.value)
                  }
                  placeholder="Enter first name"
                  required
                />
                {errors.firstname && (
                  <p className="error-message">{errors.firstname}</p>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="lastName"
                  value={lastname}
                  onChange={(e) =>
                    handleInputChange("lastname", e.target.value)
                  }
                  placeholder="Enter last name"
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  gap-4">
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Email"
                  required
                />
                {errors.email && (
                  <p className="error-message">{errors.email}</p>
                )}
              </div>
              <div className="form-group">
                <input
                  type="number"
                  id="phone"
                  value={phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
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
                <select
                  id="country"
                  value={country}
                  onChange={(e) => handleInputChange("country", e.target.value)}
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
                <select
                  id="city"
                  value={city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
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
            <div className="grid grid-cols-1 gap-4">
              <textarea
                rows="4"
                cols="50"
                value={message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="Type your message"
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
