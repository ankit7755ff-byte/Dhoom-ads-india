import React from 'react';
import { USER_DATA, WITHDRAWAL_HISTORY } from '../constants';
import type { Withdrawal } from '../types';
import ClockIcon from '../components/icons/ClockIcon';
import CheckCircleIcon from '../components/icons/CheckCircleIcon';
import XCircleIcon from '../components/icons/XCircleIcon';

const getStatusStyles = (status: Withdrawal['status']) => {
  switch (status) {
    case 'Approved':
      return {
        icon: <CheckCircleIcon className="w-6 h-6 text-green-400" />,
        badge: 'bg-green-500/20 text-green-400',
      };
    case 'Pending':
      return {
        icon: <ClockIcon className="w-6 h-6 text-yellow-400" />,
        badge: 'bg-yellow-500/20 text-yellow-400',
      };
    case 'Rejected':
      return {
        icon: <XCircleIcon className="w-6 h-6 text-red-400" />,
        badge: 'bg-red-500/20 text-red-400',
      };
    default:
      return {
        icon: <div />,
        badge: 'bg-gray-500/20 text-gray-400',
      };
  }
};


const WithdrawalPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-purple-400">Withdraw Funds</h1>
        <p className="text-gray-400">Manage your earnings and payouts</p>
      </div>

      <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl p-6 shadow-lg text-white">
        <p className="text-sm opacity-80">Available Balance</p>
        <p className="text-4xl font-bold tracking-wider mt-2">
          ₹{USER_DATA.walletBalance.toLocaleString('en-IN')}
        </p>
      </div>

      <div className="bg-slate-800 rounded-xl p-5 space-y-4 shadow-md">
        <h3 className="text-lg font-semibold">Request a Withdrawal</h3>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <span className="text-lg">₹</span>
          </div>
          <input
            type="number"
            placeholder="Enter amount"
            className="w-full pl-8 pr-3 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-white placeholder-gray-400 text-lg"
          />
        </div>
        <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition-colors text-lg">
            Withdraw Now
        </button>
      </div>

       <div className="space-y-4">
        <h3 className="text-xl font-bold">Withdrawal History</h3>
        {WITHDRAWAL_HISTORY.map(withdrawal => {
            const { icon, badge } = getStatusStyles(withdrawal.status);
            return (
              <div key={withdrawal.id} className="bg-slate-800 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center">
                    {icon}
                  </div>
                  <div>
                    <p className="font-bold text-lg">
                        ₹{withdrawal.amount.toLocaleString('en-IN')}
                    </p>
                    <p className="text-xs text-gray-400">{withdrawal.date}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${badge}`}>
                  {withdrawal.status}
                </span>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default WithdrawalPage;
