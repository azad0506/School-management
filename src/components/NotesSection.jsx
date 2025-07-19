import React from 'react';
import { useTranslation } from 'react-i18next';

const NotesSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className="py-16 px-4 bg-white">
        <div
          className={`container mx-auto mt-12 ${i18n.language === 'ur' ? 'text-right' : 'text-left'}`}
          dir={i18n.language === 'ur' ? 'rtl' : 'ltr'}
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            {t('notes_title')}
          </h3>
          <div className="bg-gray-200 rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
            <ul className="list-disc list-inside text-base text-gray-600 space-y-4">
              <li>{t('note1')}</li>
              <li>{t('note2')}</li>
              <li>{t('note3')}</li>
              <li>{t('note4')}</li>
              <li>{t('note5')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesSection;
