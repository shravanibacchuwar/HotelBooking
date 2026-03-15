import React from "react";

function AboutUs() {
  return (
    <div className="bg-linear-to-r from-[#b2e6e7] to-[#B5C6E0] min-h-screen">

      {/* Hero Section */}
      <div className="relative h-[400px]">
        <img
          src="./image.png"
          alt="hotel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            About Our Hotel Booking
          </h1>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        <img
          src="./hotl.webp"
          alt="hotel room"
          className="h-96 w-[80%] object-cover rounded-lg shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Who We Are
          </h2>

          <p className="text-gray-600 mb-4">
            Our hotel booking platform helps travelers discover the best hotels
            around the world. We provide comfortable stays, luxury experiences,
            and affordable booking options for every traveler.
          </p>

          <p className="text-gray-600">
            With a wide range of hotels and seamless booking experience, we aim
            to make travel easier and more enjoyable for our customers.
          </p>
        </div>

      </div>

      {/* Features Section */}
      <div className="bg-linear-to-r from-[#b2e6e7] to-[#B5C6E0] py-16">

        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Us
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">

          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Best Hotels</h3>
            <p className="text-gray-600">
              Discover top rated hotels with premium comfort and luxury.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
            <p className="text-gray-600">
              Book your stay quickly with our simple and secure system.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Our support team is always available to assist you anytime.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default AboutUs;
