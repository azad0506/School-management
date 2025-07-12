import React, { useEffect } from 'react'
import Contact from './Contact';


const Home = () => {
    useEffect(() => {
        let slideIndex = 0;
        const showSlides = () => {
            const slides = document.getElementsByClassName('mySlides');
            const dots = document.getElementsByClassName('dot');

            // Hide all slides
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.add('hidden');
            }

            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }

            // Remove active class from all dots
            for (let i = 0; i < dots.length; i++) {
                dots[i].classList.remove('bg-gray-700');
                dots[i].classList.add('bg-gray-400');
            }

            // Show the current slide and add active class to the current dot
            slides[slideIndex - 1].classList.remove('hidden');
            dots[slideIndex - 1].classList.add('bg-gray-700');

            setTimeout(showSlides, 2000); // Change image every 2 seconds
        };

        showSlides();
    }, []); // Empty dependency array ensures it runs only once
    return (
        <div>

            {/* Hero section slide bar */}
            <div>
                <div className="max-w-full mx-auto relative h-[580px]">

                    {/* Welcome Message */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center animate-fade-in">
                            Welcome to Jamia Barkate Siddiqa
                        </h1>
                    </div>
                    {/* Slide 1 */}
                    <div className="mySlides hidden relative h-full">
                        <div className="absolute top-0 left-0 text-white text-xs p-2 ">1 / 3</div>
                        <img
                            src="/image/h1.jpg"
                            className="w-full h-full object-cover"
                            alt="cild"
                        />
                        <div className="absolute bottom-2 left-0 text-center text-white text-sm w-full">
                            Caption Text
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="mySlides hidden relative h-full ">
                        <div className="absolute top-0 left-0 text-white text-xs p-2 ">2 / 3</div>
                        <img src="/image/h2.jpg"
                            className="w-full h-full object-cover" alt="child2" />
                        <div className="absolute bottom-2 left-0 text-center text-white text-sm w-full">
                            Caption Two
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="mySlides hidden relative h-full  ">
                        <div className="absolute top-0 left-0 text-white text-xs p-2 ">3 / 3</div>
                        <img src="/image/h3.jpg" className="w-full h-full object-cover" alt="Mountains" />
                        <div className="absolute bottom-2 left-0 text-center text-white text-sm w-full">
                            Caption Three
                        </div>
                    </div>
                </div>

                {/* Dots */}
                <div className="flex justify-center mt-4 space-x-2">
                    <span className="dot h-4 w-4 bg-gray-400 rounded-full"></span>
                    <span className="dot h-4 w-4 bg-gray-400 rounded-full"></span>
                    <span className="dot h-4 w-4 bg-gray-400 rounded-full"></span>
                </div>


            </div>

            {/* About Section */}
            <div>
                <section className="bg-white py-16 px-4">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
                        <p className="text-lg  text-gray-600 mb-8 max-w-3xl mx-auto text-justify "  >
                            Welcome to Jamai Barakati Siddiqua, where we are dedicated to providing exceptional education to young minds. Our mission is to nurture creativity, critical thinking, and a love for learning, empowering students to achieve their full potential. With state-of-the-art facilities and a passionate faculty, we ensure that each student receives personalized attention to foster their academic and personal growth.
                        </p>
                    </div>

                    <div className="container mx-auto flex flex-wrap items-center justify-center">
                        <div className="w-full md:w-1/2 p-4">
                            <img
                                src="/image/a1.jpg"
                                alt="School Image"
                                className="rounded-lg shadow-lg w-full h-auto object-cover transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                            />
                        </div>

                        <div className="w-full md:w-1/2 p-4">
                            <h3 className="text-3xl font-semibold text-gray-700 mb-6  text-justify  *:">Our Vision</h3>
                            <p className="text-lg text-gray-700 mb-6  leading-relaxed ">
                                Our vision is to foster an environment where students are encouraged to think critically, solve problems creatively, and grow into leaders who will make meaningful contributions to society. We aspire to create a space that nurtures curiosity and innovation, empowering each student to take initiative and drive positive change in the world.
                            </p>

                            <h3 className="text-3xl font-semibold text-gray-700 mb-6">Our Values</h3>
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

            {/* FEATURE SECTION */}
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

              {/* HEAD AND MEMBER */}
              <div className="py-16 px-4 bg-white">
                <div className="container mx-auto text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">Meet Our Leadership</h2>
                    <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                        Our school is led by experienced professionals who are passionate about guiding students towards success. Learn more about our Director and Principal, and their vision for our school.
                    </p>
                </div>

                <div className="container mx-auto flex flex-wrap justify-center gap-8">
                    {/* Director Card */}
                    <div className="w-full md:w-1/3 p-4">
                        <div className="bg-gray-200 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                            <img
                                src="/image/m1.jpg"
                                alt="Director"
                                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-600"
                            />
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Dr.Maulana Azad Sahab</h3>
                            <p className="text-lg text-gray-600 mb-4">Director</p>
                            <p className="text-base text-gray-700">
                                With years of experience in the education field, he is committed to the growth and success of every student at Jamai Barakati Siddiqua. His leadership ensures the highest standards in education and student well-being.
                            </p>
                            <p className="mt-4 text-sm text-gray-500 italic">
                                "Inspiring leadership, fostering excellence in education, and promoting personal growth."
                            </p>
                        </div>
                    </div>

                    {/* Principal Card */}
                    <div className="w-full md:w-1/3 p-4">
                        <div className="bg-gray-200 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOF_H6KGYPHCyeWWpYM9peumkPeGM9cTEl6w&s"
                                alt="Principal"
                                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-600"
                            />
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Md Naushad Alam</h3>
                            <p className="text-lg text-gray-600 mb-4">Principal</p>
                            <p className="text-base text-gray-700">
                                he brings over a decade of educational leadership to our school. She focuses on providing a balanced education that nurtures both academic achievement and personal development.
                            </p>
                            <p className="mt-4 text-sm text-gray-500 italic">
                                "Every student is capable of greatness with the right guidance and encouragement."
                            </p>
                        </div>
                    </div>
                </div>

                {/* Notes Section */}
                <div className="container mx-auto mt-12 text-center">
                    <h3 className="text-3xl font-bold text-gray-800 mb-6">Important Notes for Students</h3>
                    <div className="bg-gray-200 rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
                        <ul className="list-disc list-inside text-lg text-gray-600 space-y-4 border-2 border-red-500">
                            <li>Always be punctual and prepared for class.</li>
                            <li>Respect your peers and teachers to create a positive learning environment.</li>
                            <li>Stay focused on your studies and strive for excellence in every subject.</li>
                            <li>Participate actively in extracurricular activities to broaden your skills and interests.</li>
                            <li>Seek help whenever needed—don’t hesitate to ask questions and clarify doubts.</li>
                        </ul>
                    </div>
                </div>
            </div>


            <Contact />
        </div>
    )
}

export default Home
