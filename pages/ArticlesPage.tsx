import React, { useState } from 'react';
import { ChevronDownIcon } from '../components/Icons';
import { useLocalization } from '../hooks/useLocalization';

const ArticlesPage: React.FC = () => {
  const { t } = useLocalization();
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const articles = t.articlesPage.articles;

  return (
    <div className="w-full max-w-3xl mx-auto p-4 sm:p-6">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-purple-700 text-center mb-8">
          {t.articlesPage.title}
        </h1>
        <div className="space-y-4">
          {articles.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                className="w-full flex justify-between items-center p-4 text-start font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none"
              >
                <span className="text-lg">{item.title}</span>
                <ChevronDownIcon className={`w-6 h-6 text-purple-500 transition-transform duration-300 ${openAccordion === index ? 'rotate-180' : ''}`} />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === index ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="p-4 pt-0 text-gray-600 leading-relaxed text-start">
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;