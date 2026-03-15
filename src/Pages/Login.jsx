import React, { useState } from "react";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  bg-linear-to-r from-[#b2e6e7] to-[#B5C6E0]">

      <h1 className="text-3xl font-bold mb-8">HOTEL BOOKING</h1>

      <div className="w-80 bg-white p-8 rounded-2xl shadow-lg">

        <h2 className="text-xl font-semibold mb-1">Login now</h2>
        <p className="text-gray-500 text-sm mb-4">
          Please sign in to your account
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg mt-2"
          >
            Log in
          </button>

        </form>

        <p className="text-sm text-center mt-4">
          Don't have an account? <span className="text-purple-500 cursor-pointer">Sign up</span>
        </p>

      </div>

    </div>
  );
}

export default Login;