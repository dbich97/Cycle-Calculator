import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PregnancyCalculatorPage from './pages/PregnancyCalculatorPage';
import { LocalizationProvider } from './contexts/LocalizationContext';
import { useLocalization } from './hooks/useLocalization';

type Page = 'home' | 'pregnancy' | 'articles' | 'about' | 'contact';

const AppContent: React.FC = () => {
  const [page, setPage] = useState<Page>('home');
  const { t, dir } = useLocalization();

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage />;
      case 'pregnancy':
        return <PregnancyCalculatorPage />;
      case 'articles':
        return <ArticlesPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col" dir={dir}>
      <Navbar currentPage={page} onNavigate={setPage} />
      <main className="flex-grow pt-20">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

const App: React.FC = () => {
  return (
    <LocalizationProvider>
      <AppContent />
    </LocalizationProvider>
  );
};

export default App;