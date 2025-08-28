import React from 'react';
import { useLocalization } from '../hooks/useLocalization';

const Footer: React.FC = () => {
  const { t } = useLocalization();
  return (
    <footer className="bg-white mt-12">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-gray-500">
          <p>{t.footer.copyright.replace('{year}', new Date().getFullYear().toString())}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;