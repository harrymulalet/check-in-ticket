import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface HeaderProps {
  title: string;
  onBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onBack }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white h-16 flex items-center px-4 shadow-sm z-50">
      <button 
        onClick={onBack}
        className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        <ArrowLeft className="w-6 h-6 text-gray-900" />
      </button>
      <h1 className="text-xl font-bold text-gray-900 ml-4">{title}</h1>
    </header>
  );
};

export default Header;