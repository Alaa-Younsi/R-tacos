import { useState } from 'react';
import Menu from './Menu';
import Service from './Service';
import Contact from './Contact';
import Info from './Info';

const MainContent = () => {
  const [activeTab, setActiveTab] = useState('menu');

  const tabs = [
    { id: 'menu', label: 'Menu' },
    { id: 'service', label: 'Service' },
    { id: 'contact', label: 'Contact' },
    { id: 'info', label: 'Info' },
  ];

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
    <div className="bg-gradient-to-br from-pink-400 via-red-500 to-orange-500 border-4 border-red-600 w-[67%] h-[90%] absolute top-[4%] left-[32%] hidden md:block rounded-xl shadow-2xl shadow-red-600/50 overflow-hidden">
      {/* Corner accents */}
      <div className="absolute top-2 left-2 w-8 h-8 border-l-4 border-t-4 border-yellow-300 z-10"></div>
      <div className="absolute top-2 right-2 w-8 h-8 border-r-4 border-t-4 border-yellow-300 z-10"></div>
      <div className="absolute bottom-2 left-2 w-8 h-8 border-l-4 border-b-4 border-yellow-300 z-10"></div>
      <div className="absolute bottom-2 right-2 w-8 h-8 border-r-4 border-b-4 border-yellow-300 z-10"></div>

      {/* Tab Navigation */}
      <div className="flex border-b-4 border-red-700 bg-gradient-to-r from-red-600 to-orange-600">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-4 px-6 font-bold text-lg transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-white text-red-600 border-b-4 border-yellow-400'
                : 'text-white hover:bg-red-700/50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="h-[calc(100%-4rem)] overflow-y-auto hide-scrollbar bg-white/95">
        {renderContent()}
      </div>
    </div>
  );
};

export default MainContent;
