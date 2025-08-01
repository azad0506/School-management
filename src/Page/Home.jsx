import React, { useEffect } from 'react'
import Contact from './Contact';
import Feature from '../components/Feature';
import NotesSection from '../components/NotesSection';
import { useTranslation } from 'react-i18next';


const Home = () => {
     const { t, i18n } = useTranslation();
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
                <div className="max-w-full mx-auto relative h-[320px] md:h-[580px]">

                    {/* Welcome Message */}
                    {/* <div className="absolute inset-0 flex items-center justify-center z-10">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center animate-fade-in">
                            Welcome to Jamia Barkate Siddiqa
                        </h1>
                    </div> */}

                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <h1 className="text-2xl md:text-6xl font-extrabold text-white text-center bg-black bg-opacity-40  rounded-md">
                            {t('welcome')}
                        </h1>
                    </div>

                    {/* Slide 1 */}
                    <div className="mySlides hidden relativeh-auto md:h-full">
                        <div className="absolute top-0 left-0 text-white text-xs p-2 ">1 / 3</div>
                        <img
                            src="/image/hab1.jpg"
                            className="w-full h-full object-cover"
                            alt="cild"
                        />
                        <div className="absolute bottom-2 left-0 text-center text-white text-sm w-full">
                            Caption Text
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="mySlides hidden relative h-auto md:h-full ">
                        <div className="absolute top-0 left-0 text-white text-xs p-2 ">2 / 3</div>
                        <img src="/image/h2.jpg"
                            className="w-full h-full object-center md:object-cover" alt="child2" />
                        <div className="absolute bottom-2 left-0 text-center text-white text-sm w-full">
                            Caption Two
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="mySlides hidden relative h-auto md:h-full  ">
                        <div className="absolute top-0 left-0 text-white text-xs p-2 ">3 / 3</div>
                        <img src="/image/h5.png" className="w-full h-full object-cover" alt="Mountains" />
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
            <div dir={i18n.language === 'ur' ? 'rtl' : 'ltr'}>
                <section className="bg-white py-1 px-4">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">{t('about_title')}</h2>
                        <p className="text-base  text-gray-600 mb-8 max-w-3xl mx-auto text-justify "  >
                            {t('about_description')}
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
                            <h3 className="text-3xl font-semibold text-gray-700 mb-6  text-justify  *:">{t('vision_title')}</h3>
                            <p className="text-base text-gray-700 mb-6  leading-relaxed ">
                                {t('vision_text')}
                            </p>

                            <h3 className="text-3xl font-semibold text-gray-700 mb-6 ">{t('values_title')}</h3>
                            <ul className="list-inside text-base text-gray-700 space-y-4">
                                <li className="flex items-center">
                                    <span className="inline-block w-2.5 h-2.5 bg-blue-600 rounded-full mr-3"></span>
                                    {t('value1')}
                                </li>
                                <li className="flex items-center">
                                    <span className="inline-block w-2.5 h-2.5 bg-blue-600 rounded-full mr-3"></span>
                                    {t('value2')}
                                </li>
                                <li className="flex items-center">
                                    <span className="inline-block w-2.5 h-2.5 bg-blue-600 rounded-full mr-3"></span>
                                    {t('value3')}
                                </li>
                                <li className="flex items-center">
                                    <span className="inline-block w-2.5 h-2.5 bg-blue-600 rounded-full mr-3"></span>
                                    {t('value4')}
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

             {/* HEAD AND MEMBER */}
            <div dir={i18n.language === 'ur' ? 'rtl' : 'ltr'}>
                <div className="py-16 px-4 bg-white">
                    <div className="container mx-auto text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">{t('leadership_title')}</h2>
                        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                            {t('leadership_intro')}
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
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{t('director_name')}</h3>
                                <p className="text-lg text-gray-600 mb-4">{t('director_title')}</p>
                                <p className="text-base text-gray-700">
                                    {t('director_desc')}
                                </p>
                                <p className="mt-4 text-sm text-gray-500 italic">
                                    {t('director_quote')}
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
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{t('principal_name')}</h3>
                                <p className="text-lg text-gray-600 mb-4">{t('principal_title')}</p>
                                <p className="text-base text-gray-700">
                                    {t('principal_desc')}
                                </p>
                                <p className="mt-4 text-sm text-gray-500 italic">
                                    {t('principal_quote')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FEATURE SECTION */}
            <Feature />

            {/* Notes Section */}
            <NotesSection />

            <Contact />
        </div>
    )
}

export default Home
