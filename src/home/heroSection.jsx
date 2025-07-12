import React from 'react'

const HeroSection = () => {
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
    </div>
  )
}

export default HeroSection
