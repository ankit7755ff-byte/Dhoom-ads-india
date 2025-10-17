
import React from 'react';
import { USER_DATA } from '../constants';
import UserCircleIcon from '../components/icons/UserCircleIcon';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-xl overflow-hidden shadow-lg">
        <img src="https://picsum.photos/seed/promo/600/300" alt="Promotional Banner" className="w-full" />
      </div>

      <div className="bg-slate-800 rounded-xl p-4">
        <h2 className="text-lg font-semibold mb-2">Updates and Withdrawal Guidelines</h2>
        <p className="text-sm text-gray-400">
          Stay tuned for the latest updates. Please read the withdrawal guidelines carefully before applying for a payout.
        </p>
      </div>

      <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl p-4 shadow-lg text-white">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-lg font-bold">
                {USER_DATA.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-xl">{USER_DATA.name}</p>
                <p className="text-sm opacity-80">{USER_DATA.id}</p>
              </div>
            </div>
          </div>
          <span className="bg-green-400 text-green-900 text-xs font-bold px-3 py-1 rounded-full">Active</span>
        </div>
        
        <div className="mt-6 space-y-4">
            <div className="bg-white/10 rounded-lg p-3">
                <p className="text-sm opacity-80">Main Wallet</p>
                <p className="text-2xl font-bold tracking-wider">
                    ₹{USER_DATA.walletBalance.toLocaleString('en-IN')}
                </p>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
                <p className="text-sm opacity-80">Direct Members</p>
                <p className="text-2xl font-bold">{USER_DATA.directMembers}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
