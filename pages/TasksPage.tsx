
import React from 'react';
import { TASKS } from '../constants';
import TasksIcon from '../components/icons/TasksIcon';

const TasksPage: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 text-xl font-bold">
        <TasksIcon className="w-6 h-6" />
        <h2>Daily Tasks</h2>
      </div>
      
      <div className="space-y-3">
        {TASKS.map(task => (
          <div key={task.id} className="bg-slate-800 rounded-xl p-4 flex items-center justify-between shadow-md">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-lg flex items-center justify-center font-bold text-lg">
                {task.id}
              </div>
              <div>
                <p className="font-semibold">{task.name}</p>
              </div>
            </div>
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
              View Ad
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksPage;
