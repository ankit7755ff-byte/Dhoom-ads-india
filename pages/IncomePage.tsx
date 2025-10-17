
import React, { useState } from 'react';
import { INCOME_HISTORY } from '../constants';
import BellIcon from '../components/icons/BellIcon';
import UserPlusIcon from '../components/icons/UserPlusIcon';

const IncomePage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Direct', 'Level', 'Reward', 'Task'];

  const totalIncome = INCOME_HISTORY.reduce((sum, item) => sum + item.amount, 0);
  const totalTransactions = INCOME_HISTORY.length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-green-400">Income History</h1>
        <p className="text-gray-400">Track all your earnings</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-800 rounded-xl p-4 shadow-lg">
          <p className="text-sm text-gray-400">TOTAL INCOME</p>
          <p className="text-2xl font-bold text-purple-400">
            ₹{totalIncome.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>
        <div className="bg-slate-800 rounded-xl p-4 shadow-lg">
          <p className="text-sm text-gray-400">TOTAL TRANSACTIONS</p>
          <p className="text-2xl font-bold text-purple-400">{totalTransactions}</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap ${
                activeFilter === filter ? 'bg-purple-600 text-white' : 'bg-slate-700 text-gray-300'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <button className="p-3 bg-slate-700 rounded-full ml-2">
          <BellIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-3">
        {INCOME_HISTORY.map(transaction => (
          <div key={transaction.id} className="bg-slate-800 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center">
                <UserPlusIcon className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold">{transaction.type}</p>
                <p className="text-xs text-gray-400">From: {transaction.from}</p>
                <p className="text-xs text-gray-400">{transaction.date}</p>
              </div>
            </div>
            <p className="text-lg font-bold text-green-400">
              ₹{transaction.amount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncomePage;
