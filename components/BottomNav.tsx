
import React from 'react';
import type { Page } from '../types';
import HomeIcon from './icons/HomeIcon';
import TasksIcon from './icons/TasksIcon';
import TeamIcon from './icons/TeamIcon';
import IncomeIcon from './icons/IncomeIcon';
import ProfileIcon from './icons/ProfileIcon';
import CurrencyRupeeIcon from './icons/CurrencyRupeeIcon';

interface BottomNavProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const NavItem: React.FC<{
  icon: React.ReactNode;
  label: Page;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center w-1/6 transition-colors duration-200 ${
      isActive ? 'text-purple-400' : 'text-gray-400'
    }`}
  >
    {icon}
    <span className="text-xs mt-1">{label}</span>
    {isActive && <div className="w-8 h-1 bg-purple-400 rounded-full mt-1"></div>}
  </button>
);

const BottomNav: React.FC<BottomNavProps> = ({ activePage, setActivePage }) => {
  const navItems = [
    { label: 'Home', icon: <HomeIcon className="w-6 h-6" /> },
    { label: 'Tasks', icon: <TasksIcon className="w-6 h-6" /> },
    { label: 'Team', icon: <TeamIcon className="w-6 h-6" /> },
    { label: 'Income', icon: <IncomeIcon className="w-6 h-6" /> },
    { label: 'Withdrawal', icon: <CurrencyRupeeIcon className="w-6 h-6" /> },
    { label: 'Profile', icon: <ProfileIcon className="w-6 h-6" /> },
  ] as const;

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-[#1f1f3a] border-t border-slate-700 flex justify-around py-2">
      {navItems.map((item) => (
        <NavItem
          key={item.label}
          icon={item.icon}
          label={item.label}
          isActive={activePage === item.label}
          onClick={() => setActivePage(item.label)}
        />
      ))}
    </nav>
  );
};

export default BottomNav;
