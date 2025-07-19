import React from 'react'
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>


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
    </div>
  )
}

export default About
