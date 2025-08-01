import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom"
const Navbar = () => {
    const { t, i18n } = useTranslation();
    // State to track the mobile menu visibility
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Toggle function
    const toggleMobileMenu = () => {
        setMobileMenuOpen((prevState) => !prevState);
    };
    // Change language function
    const toggleLanguage = () => {
        if (i18n.language === 'en') {
            i18n.changeLanguage('ur');
        } else {
            i18n.changeLanguage('en');
        }
    };
    return (

        <>


            <nav className="bg-gray-800 sticky top-0 z-50 h-20" >

                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center  sm:justify-between ">
                        {/* Logo */}
                        <div className="flex items-center  ">
                            <Link
                                to="/"
                                className="rounded-md px-3 py-2 text-lg font-bold tracking-wide text-gray-300 hover:bg-gray-700 hover:text-white"
                            >
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
                                    {t('brand_start')}
                                </span>
                               
                                <span className="text-yellow-400">{t('brand_middle')}</span>
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
                                    {t('brand_end')}
                                </span>
                            </Link>
                        </div>
                       
                        {/* ✅ Language Switcher Button */}
                        <div>
                            <button
                                onClick={toggleLanguage}
                                className="ml-4 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
                            >
                                {i18n.language === 'en' ? 'اردو' : 'English'}
                            </button>

                        </div>
                        {/* Mobile Menu Button */}
                       <div className="absolute inset-y-0 right-0 flex items-center sm:hidden ">  {/*//Agar koi item absolute ho jaaye toh woh flex ke flow se bahar chala jaata hai! */}
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded={isMobileMenuOpen}
                                onClick={toggleMobileMenu}
                            >
                                <span className="sr-only">Open main menu</span>
                                {isMobileMenuOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>

                        {/* Menu Links (Desktop) */}
                        <div className="hidden sm:block  border-yellow-500 border-2">
                            <div className="flex space-x-4">

                                <Link
                                    to="/"
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/about"
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                >
                                    About
                                </Link>
                                <Link
                                    to="/contact"
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                >
                                    Contact
                                </Link>

                                <Link
                                    to="/login"
                                    className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                                    aria-current="page"
                                >
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu (collapsible) */}
                {isMobileMenuOpen && (
                    <div className="sm:hidden" id="mobile-menu">
                        <div className="space-y-1 px-2 pt-2 pb-3  bg-gray-800  flex justify-center items-center flex-col border-t">

                            <Link
                                to="/"
                                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                            >
                                Home
                            </Link>
                            <Link
                                to="/about"
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                            >
                                About
                            </Link>
                            <Link
                                to="/contact"
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                            >
                                Contact
                            </Link>
                          
                            <Link
                                to="/login"
                                className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                                aria-current="page"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                )}

            </nav>
        </>



    );
};

export default Navbar;
