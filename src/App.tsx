import { useState, useEffect } from 'react';
import './App.css';
import SplashScreen from './components/layout/SplashScreen';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Menu from './components/sections/Menu';
import Service from './components/sections/Service';
import Contact from './components/sections/Contact';
import Info from './components/sections/Info';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('menu');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'menu':
        return <Menu />;
      case 'service':
        return <Service />;
      case 'contact':
        return <Contact />;
      case 'info':
        return <Info />;
      default:
        return <Menu />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header - Desktop only */}
      <Header />
      
      {/* Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Content Area */}
      <main className="w-full pt-20 md:pt-0">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 via-red-900 to-orange-900 text-white py-8 px-4">
        <div className="w-full text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src="/icon.png" alt="R'tacos" className="w-12 h-12 rounded-full border-2 border-white shadow-lg" />
            <h3 className="text-2xl font-bold">R'tacos Birkhadem</h3>
          </div>
          <p className="text-orange-200 mb-4">Authentic Flavors, Modern Twist</p>
          <div className="flex flex-wrap justify-center gap-6 mb-4 text-sm">
            <a href="tel:0549415993" className="hover:text-orange-400 transition-colors">📞 0549 41 59 93</a>
            <a href="tel:0656415993" className="hover:text-orange-400 transition-colors">📞 0656 41 59 93</a>
            <a href="mailto:rtacosbirkhadem2024@gmail.com" className="hover:text-orange-400 transition-colors">✉️ Email Us</a>
          </div>
          <p className="text-orange-300/60 text-sm">© 2024 R'tacos Birkhadem. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
