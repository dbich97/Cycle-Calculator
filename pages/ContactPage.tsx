import React from 'react';
import { MailIcon, PhoneIcon } from '../components/Icons';
import { useLocalization } from '../hooks/useLocalization';

const ContactPage: React.FC = () => {
  const { t } = useLocalization();

  return (
    <div className="w-full max-w-3xl mx-auto p-4 sm:p-6">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-4">
          {t.contactPage.title}
        </h1>
        <p className="text-gray-600 mb-8">
          {t.contactPage.subtitle}
        </p>
        <div className="space-y-6">
          <div className="flex items-center justify-center p-4 bg-purple-50 rounded-lg">
            <MailIcon className="w-8 h-8 text-purple-600 mx-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{t.contactPage.email}</h3>
              <a href="mailto:info@anouthati.com" className="text-purple-700 hover:underline">
                info@anouthati.com
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center p-4 bg-purple-50 rounded-lg">
            <PhoneIcon className="w-8 h-8 text-purple-600 mx-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{t.contactPage.phone}</h3>
              <a href="tel:+123456789" className="text-purple-700 hover:underline" dir="ltr">
                +1 (23) 456-789
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;