
import React from 'react';
import HomeIcon from './icons/HomeIcon';
import SettingsIcon from './icons/SettingsIcon';
import LogoutIcon from './icons/LogoutIcon';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-[#1f1f3a]">
      <h1 className="text-xl font-bold text-purple-400">Dhoom Ads India</h1>
      <div className="flex items-center space-x-4">
        <button className="p-2 bg-slate-700 rounded-full">
          <HomeIcon className="w-5 h-5" />
        </button>
        <button className="p-2 bg-slate-700 rounded-full">
          <SettingsIcon className="w-5 h-5" />
        </button>
        <button className="p-2 bg-slate-700 rounded-full">
            <LogoutIcon className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;
