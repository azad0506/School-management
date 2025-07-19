import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Feature = () => {
  const { t, i18n } = useTranslation();

  return (
    <div dir={i18n.language === 'ur' ? 'rtl' : 'ltr'}>

      <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            {t('features_title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/image/f1.jpg"
                alt={t('feature1_title')}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{t('feature1_title')}</h3>
                <p className="mt-2 text-sm text-gray-600">{t('feature1_desc')}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-blue-500 font-semibold hover:underline"
                >
                  {t('feature1_link')}
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="image/f4.jpg"
                alt={t('feature2_title')}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{t('feature2_title')}</h3>
                <p className="mt-2 text-sm text-gray-600">{t('feature2_desc')}</p>
                <Link
                  to="/contact"
                  className="mt-4 inline-block text-blue-500 font-semibold hover:underline"
                >
                  {t('feature2_link')}
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="image/f3.jpg"
                alt={t('feature3_title')}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{t('feature3_title')}</h3>
                <p className="mt-2 text-sm text-gray-600">{t('feature3_desc')}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-blue-500 font-semibold hover:underline"
                >
                  {t('feature3_link')}
                </a>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="image/f4.jpg"
                alt={t('feature4_title')}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{t('feature4_title')}</h3>
                <p className="mt-2 text-sm text-gray-600">{t('feature4_desc')}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-blue-500 font-semibold hover:underline"
                >
                  {t('feature4_link')}
                </a>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="image/f2.jpg"
                alt={t('feature5_title')}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{t('feature5_title')}</h3>
                <p className="mt-2 text-sm text-gray-600">{t('feature5_desc')}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-blue-500 font-semibold hover:underline"
                >
                  {t('feature5_link')}
                </a>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="image/f4.jpg"
                alt={t('feature6_title')}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{t('feature6_title')}</h3>
                <p className="mt-2 text-sm text-gray-600">{t('feature6_desc')}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-blue-500 font-semibold hover:underline"
                >
                  {t('feature6_link')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
