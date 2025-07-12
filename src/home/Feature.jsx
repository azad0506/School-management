import React from "react";

const Feature = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Our Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/image/f1.jpg"
              alt="Book Admission"
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">Book Admission</h3>
              <p className="mt-2 text-sm text-gray-600">
                Start your journey with us by booking admission for the upcoming session.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-500 font-semibold hover:underline"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="image/f4.jpg"
              alt="Contact Us"
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">Contact Us</h3>
              <p className="mt-2 text-sm text-gray-600">
                Have questions? Reach out to our support team for assistance.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-500 font-semibold hover:underline"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="image/f3.jpg"
              alt="Help"
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">Help</h3>
              <p className="mt-2 text-sm text-gray-600">
                Find answers to common questions in our help center.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-500 font-semibold hover:underline"
              >
                Visit Help Center
              </a>
            </div>
          </div>

          {/* Additional Cards */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="image/f4.jpg"
              alt="Facilities"
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">Facilities</h3>
              <p className="mt-2 text-sm text-gray-600">
                Discover our state-of-the-art facilities designed for learning.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-500 font-semibold hover:underline"
              >
                Explore Facilities
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="image/f2.jpg"
              alt="Library"
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">Library</h3>
              <p className="mt-2 text-sm text-gray-600">
                A collection of diverse resources for students and staff.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-500 font-semibold hover:underline"
              >
                Visit Library
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="image/f4.jpg"
              alt="Events"
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">Events</h3>
              <p className="mt-2 text-sm text-gray-600">
                Join exciting events and activities hosted by the school.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-500 font-semibold hover:underline"
              >
                View Events
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
