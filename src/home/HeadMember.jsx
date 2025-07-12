import React from 'react'

const HeadMember = () => {
  return (
    <div>
       
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
                        <ul className="list-disc list-inside text-lg text-gray-600 flex flex-col items-start">
                            <li>Always be punctual and prepared for class.</li>
                            <li>Respect your peers and teachers to create a positive learning environment.</li>
                            <li>Stay focused on your studies and strive for excellence in every subject.</li>
                            <li>Participate actively in extracurricular activities to broaden your skills and interests.</li>
                            <li>Seek help whenever needed—don’t hesitate to ask questions and clarify doubts.</li>
                        </ul>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default HeadMember
