import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
          <span className="text-blue-600">AGEN</span>CY
        </h1>

        {/* Form */}
        <h2 className="text-xl font-semibold text-center mb-4 text-gray-700">
          Login to your Account
        </h2>
        <form>
          {/* Username Field */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit and Forgot Password */}
          <div className="flex justify-between items-center mb-6">
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-6 rounded-full hover:opacity-90 transition duration-300"
            >
              Submit
            </button>
            <a
              href="#"
              className="text-blue-500 hover:underline text-sm font-medium"
            >
              Forgot Password?
            </a>
          </div>

          {/* Divider */}
          <hr className="my-6" />

          {/* Social Login */}
          <div className="text-center">
            <p className="mb-4 text-gray-600 font-medium">or Login with:</p>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="flex items-center justify-center bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300 w-full"
              >
                <i className="fab fa-facebook-f mr-2"></i>Facebook
              </a>
              <a
                href="#"
                className="flex items-center justify-center bg-red-600 text-white py-3 px-6 rounded-full hover:bg-red-700 transition duration-300 w-full"
              >
                <i className="fab fa-google mr-2"></i>Google
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
