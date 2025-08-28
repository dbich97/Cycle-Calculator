import React from 'react';
import { useLocalization } from '../hooks/useLocalization';

const AboutPage: React.FC = () => {
  const { t } = useLocalization();

  return (
    <div className="w-full max-w-3xl mx-auto p-4 sm:p-6">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-purple-700 text-center mb-8">
          {t.aboutPage.title}
        </h1>
        <div className="space-y-6 text-gray-700 leading-relaxed text-start">
          <p>{t.aboutPage.paragraph1}</p>
          <p>{t.aboutPage.paragraph2}</p>
          <h2 className="text-2xl font-bold text-purple-600 pt-4">
            {t.aboutPage.missionTitle}
          </h2>
          <p>{t.aboutPage.missionText}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;