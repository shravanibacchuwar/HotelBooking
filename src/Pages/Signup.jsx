import React, { useState } from "react";

function Signup() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Signup Data:", formData);

    // yaha API call kar sakte ho backend ke liye
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-[#b2e6e7] to-[#B5C6E0]">

      <div className="w-80 bg-white p-8 rounded-2xl shadow-lg">

        <h2 className="text-xl font-semibold mb-1">Create new account</h2>
        <p className="text-gray-500 text-sm mb-4">
          Please fill the form to continue
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Phone number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg mt-2"
          >
            Sign up
          </button>

        </form>

        <p className="text-sm text-center mt-4">
          Have an account? <span className="text-purple-500 cursor-pointer">Sign in</span>
        </p>

      </div>

    </div>
  );
}

export default Signup;