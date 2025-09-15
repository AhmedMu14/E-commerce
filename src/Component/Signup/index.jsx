import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  // ✅ Validation schema
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "First name too short")
      .required("First name is required"),
    lastName: Yup.string()
      .min(2, "Last name too short")
      .required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <div className="min-h-screen flex">
      {/* Left image */}
      <div className="w-1/2 hidden md:block">
        <img
          src="https://www.lovethegarden.com/sites/default/files/styles/header_image_fallback/public/content/articles/When%20to%20plant%20vegetables%20article%20-%20Hero.jpg?itok=yhhnrl9v"
          alt="Sign Up"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="max-w-md w-full p-8 shadow-lg rounded">
          <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>

          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              try {
                const payload = {
                  name: `${values.firstName} ${values.lastName}`, // combine name
                  email: values.email,
                  password: values.password,
                };
                console.log("👉 Sending payload:", payload);

                const res = await axios.post(
                  "http://localhost:5000/signup",
                  payload,
                  {
                    withCredentials: true,
                  }
                );

                toast.success(res.data.message || "Signup successful");
                resetForm();
                navigate("/signin");
              } catch (err) {
                toast.error(err.response?.data?.error || "Signup failed");
              }
              setSubmitting(false);
            }}
          >
            {({ isSubmitting, isValid }) => (
              <Form className="space-y-4">
                {/* First Name */}
                <div>
                  <label className="block text-gray-700">First Name</label>
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    className="w-full border border-gray-300 p-2 rounded focus:outline-none"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-gray-700">Last Name</label>
                  <Field
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name"
                    className="w-full border border-gray-300 p-2 rounded focus:outline-none"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700">Email</label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 p-2 rounded focus:outline-none"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-gray-700">Password</label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="w-full border border-gray-300 p-2 rounded focus:outline-none"
                  />
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !isValid}
                  className={`w-full p-2 rounded text-white ${
                    isValid
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  {isSubmitting ? "Signing Up..." : "Sign Up"}
                </button>

                {/* Sign In Link */}
                <p className="text-sm text-center mt-2">
                  Already have an account?{" "}
                  <span
                    className="text-blue-600 cursor-pointer underline"
                    onClick={() => navigate("/signin")}
                  >
                    Sign In
                  </span>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
