
import React, { useState } from 'react';
import type { Page } from './types';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import HomePage from './pages/HomePage';
import TasksPage from './pages/TasksPage';
import TeamPage from './pages/TeamPage';
import IncomePage from './pages/IncomePage';
import ProfilePage from './pages/ProfilePage';
import WithdrawalPage from './pages/WithdrawalPage';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('Home');

  const renderPage = () => {
    switch (activePage) {
      case 'Home':
        return <HomePage />;
      case 'Tasks':
        return <TasksPage />;
      case 'Team':
        return <TeamPage />;
      case 'Income':
        return <IncomePage />;
      case 'Withdrawal':
        return <WithdrawalPage />;
      case 'Profile':
        return <ProfilePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#161625] text-white font-sans">
      <div className="container mx-auto max-w-md pb-24">
        <Header />
        <main className="p-4">
          {renderPage()}
        </main>
      </div>
      <BottomNav activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
};

export default App;
