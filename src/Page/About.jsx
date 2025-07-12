import React from 'react'

const About = () => {
  return (
    <div>
      <div>
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto text-justify ">
            Welcome to Jamai Barakati Siddiqua, where we are dedicated to providing exceptional education to young minds. Our mission is to nurture creativity, critical thinking, and a love for learning, empowering students to achieve their full potential. With state-of-the-art facilities and a passionate faculty, we ensure that each student receives personalized attention to foster their academic and personal growth.
          </p>
        </div>

        <div className="container mx-auto flex flex-wrap items-center justify-center">
          <div className="w-full md:w-1/2 p-4">
            <img 
              src="https://media.istockphoto.com/id/1061125190/photo/muslim-education-activities-in-classroom-at-school-happy-children-learning.webp?a=1&b=1&s=612x612&w=0&k=20&c=pPaTj-H4tJJ9otYm2nmA171c5yOqkYC9A_T-QuiEzuc=" 
              alt="School Image" 
              className="rounded-lg shadow-lg w-full h-auto object-cover transform hover:scale-105 transition-all duration-300" 
            />
          </div>

          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-3xl font-semibold text-blue-600 mb-6  text-justify  *:">Our Vision</h3>
            <p className="text-lg text-gray-700 mb-6  leading-relaxed ">
              Our vision is to foster an environment where students are encouraged to think critically, solve problems creatively, and grow into leaders who will make meaningful contributions to society. We aspire to create a space that nurtures curiosity and innovation, empowering each student to take initiative and drive positive change in the world.
            </p>

            <h3 className="text-3xl font-semibold text-blue-600 mb-6">Our Values</h3>
            <ul className="list-inside text-lg text-gray-700 space-y-4">
              <li className="flex items-center">
                <span className="inline-block w-2.5 h-2.5 bg-blue-600 rounded-full mr-3"></span>
                Excellence in Education
              </li>
              <li className="flex items-center">
                <span className="inline-block w-2.5 h-2.5 bg-blue-600 rounded-full mr-3"></span>
                Integrity and Honesty
              </li>
              <li className="flex items-center">
                <span className="inline-block w-2.5 h-2.5 bg-blue-600 rounded-full mr-3"></span>
                Innovation and Creativity
              </li>
              <li className="flex items-center">
                <span className="inline-block w-2.5 h-2.5 bg-blue-600 rounded-full mr-3"></span>
                Respect and Responsibility
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default About
