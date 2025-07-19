import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        
        <footer className="bg-gray-700 text-white py-8 ">
            <div className="container mx-auto flex flex-col  md:flex-row justify-around items-center px-4 ">


                {/* Quick Links */}
                <div className="text-center md:text-left mb-6 md:mb-0">
                    <h4 className="font-semibold mb-2">Quick Links</h4>
                    <ul className="text-sm space-y-2">
                        <li><a href="#" className="hover:text-gray-400">Home</a></li>
                        <li><a href="#" className="hover:text-gray-400">About Us</a></li>
                        <li><a href="#" className="hover:text-gray-400">Academics</a></li>
                        <li><a href="#" className="hover:text-gray-400">Contact</a></li>
                    </ul>
                </div>

                {/* Logo and Motto */}
                <div className="text-center md:text-left mb-6 md:mb-0 ">
                    <a
                        href="#"
                        className="text-lg font-bold tracking-wide text-gray-300 hover:text-white"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
                            JAMIA_
                        </span>
                        <span className="text-yellow-400">BARKATE</span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
                            _SIDDIQA
                        </span>
                    </a>
                    <p className="text-sm mt-2">Empowering Girl Students for a Bright Future</p>
                    {/* Social Links */}
                    <div className="text-center md:text-left">
                        <h4 className="font-semibold mb-2">Follow Us</h4>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="#" className="text-xl hover:text-gray-400"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="text-xl hover:text-gray-400"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-xl hover:text-gray-400"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>

            </div>


            {/* Footer Bottom */}
            <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4">
                <p>&copy; 2025 Jamia Barkate Siddiqa. All rights reserved.
                     Developed by Mohammad Azad.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
