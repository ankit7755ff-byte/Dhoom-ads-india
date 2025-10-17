
import React from 'react';
import TeamIcon from '../components/icons/TeamIcon';

const TeamPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-96 text-gray-400">
      <TeamIcon className="w-24 h-24 mb-4" />
      <h2 className="text-2xl font-bold mb-2">Team Information</h2>
      <p>Your team details will be displayed here.</p>
    </div>
  );
};

export default TeamPage;
