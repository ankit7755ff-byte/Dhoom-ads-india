
import React from 'react';
import { USER_DATA } from '../constants';
import UserCircleIcon from '../components/icons/UserCircleIcon';
import UserIcon from '../components/icons/UserIcon';
import EnvelopeIcon from '../components/icons/EnvelopeIcon';
import PhoneIcon from '../components/icons/PhoneIcon';
import MapPinIcon from '../components/icons/MapPinIcon';
import BuildingLibraryIcon from '../components/icons/BuildingLibraryIcon';
import CodeBranchIcon from '../components/icons/CodeBranchIcon';
import HashtagIcon from '../components/icons/HashtagIcon';

const InfoField: React.FC<{ icon: React.ReactNode, value: string, readOnly?: boolean, placeholder?: string }> = ({ icon, value, readOnly = false, placeholder }) => (
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
      {icon}
    </div>
    <input
      type="text"
      value={value}
      readOnly={readOnly}
      placeholder={placeholder}
      className="w-full pl-10 pr-3 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-white placeholder-gray-400"
    />
  </div>
);


const ProfilePage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl p-6 flex flex-col items-center text-center shadow-lg">
        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4">
            <UserCircleIcon className="w-20 h-20 text-white" />
        </div>
        <h2 className="text-2xl font-bold">{USER_DATA.name}</h2>
        <p className="text-sm text-purple-200">User ID: {USER_DATA.id}</p>
      </div>

      <div className="bg-slate-800 rounded-xl p-5 space-y-4 shadow-md">
        <h3 className="text-lg font-semibold flex items-center"><UserIcon className="w-5 h-5 mr-2" /> Personal Information</h3>
        <InfoField icon={<UserIcon className="w-5 h-5" />} value={USER_DATA.name} readOnly />
        <InfoField icon={<EnvelopeIcon className="w-5 h-5" />} value={USER_DATA.email} readOnly />
        <InfoField icon={<PhoneIcon className="w-5 h-5" />} value={USER_DATA.phone} readOnly />
        <InfoField icon={<MapPinIcon className="w-5 h-5" />} value={USER_DATA.city} readOnly />
      </div>
      
      <div className="bg-slate-800 rounded-xl p-5 space-y-4 shadow-md">
        <h3 className="text-lg font-semibold flex items-center"><BuildingLibraryIcon className="w-5 h-5 mr-2" /> Bank Details</h3>
        <InfoField icon={<BuildingLibraryIcon className="w-5 h-5" />} value="" placeholder="Enter bank name" />
        <InfoField icon={<CodeBranchIcon className="w-5 h-5" />} value="" placeholder="Enter branch name" />
        <InfoField icon={<HashtagIcon className="w-5 h-5" />} value="" placeholder="Enter IFSC Code" />
        <InfoField icon={<UserIcon className="w-5 h-5" />} value="" placeholder="Enter Account Name" />
         <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-colors">
            Update Bank Details
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
