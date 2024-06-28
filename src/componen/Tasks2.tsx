import React, { useState } from 'react';
import Card from './Card';
import '../App.css';
import { FaPlus } from "react-icons/fa";

interface Task {
  id: number;
  description: string;
  status: 'todo' | 'inProgress' | 'completed';
}

const Tasks2: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, description: 'Create mobile menu prototype in Principle', status: 'todo' },
    { id: 2, description: 'Select photos for blog post', status: 'todo' },
    { id: 3, description: 'Start new marketing campaign', status: 'inProgress' },
    { id: 4, description: 'Fix navigation on mobile devices', status: 'inProgress' },
    { id: 5, description: 'Create wireframes', status: 'inProgress' },
    { id: 6, description: 'Discovery meeting', status: 'completed' }
  ]);

  const [menuVisibility, setMenuVisibility] = useState<{ [key: string]: boolean }>({});

  const moveTask = (id: number, newStatus: 'todo' | 'inProgress' | 'completed') => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  const handleAddTask = () => {
    const newTask: Task = {
      id: tasks.length + 1,
      description: 'New Task',
      status: 'todo'
    };
    setTasks([...tasks, newTask]);
  };

  const handleDescriptionChange = (id: number, newDescription: string) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, description: newDescription } : task
    );
    setTasks(updatedTasks);
  };

  const handleMenuClick = (description: string) => {
    setMenuVisibility(prev => ({
      ...prev,
      [description]: !prev[description]
    }));
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-4">
        {/* To Do Column */}
        <div className="bg-gray-100 p-4 font-light text-left rounded-md">
          <h2 className="text-lg font-light mb-4 text-left">Todo {tasks.filter(task => task.status === 'todo').length}</h2>
          <span onClick={handleAddTask} className="flex items-center justify-center mb-2 border border-dashed border-slate-400 p-3">
            <FaPlus style={{ color: '#7b85d4' }} />
          </span>
          {tasks.filter(task => task.status === 'todo').map(task => (
            <Card
              key={task.id}
              description={task.description}
              date="7 Aug"
              tasks="0/5"
              comments="0"
              onMenuClick={handleMenuClick}
              menuVisible={!!menuVisibility[task.description]}
            >
              <input
                type="text"
                value={task.description}
                onChange={(e) => handleDescriptionChange(task.id, e.target.value)}
                onBlur={(e) => handleDescriptionChange(task.id, e.target.value)}
              />
            </Card>
          ))}
        </div>
        {/* In Progress Column */}
        <div className="bg-gray-100 p-4 font-light text-left rounded-md">
          <h2 className="text-lg font-light mb-4 text-left">In Progress {tasks.filter(task => task.status === 'inProgress').length}</h2>
          <span className="flex items-center justify-center mb-2 border border-dashed border-slate-400 p-3">
            <FaPlus style={{ color: '#7b85d4' }} />
          </span>
          {tasks.filter(task => task.status === 'inProgress').map(task => (
            <Card
              key={task.id}
              description={task.description}
              date="25 Jul"
              tasks="2/3"
              comments="5"
              onMenuClick={handleMenuClick}
              menuVisible={!!menuVisibility[task.description]}
            >
              <input
                type="text"
                value={task.description}
                onChange={(e) => handleDescriptionChange(task.id, e.target.value)}
                onBlur={(e) => handleDescriptionChange(task.id, e.target.value)}
              />
              <button onClick={() => moveTask(task.id, 'completed')}>
                Complete
              </button>
            </Card>
          ))}
        </div>
        {/* Completed Column */}
        <div className="bg-gray-100 p-4 font-light text-left rounded-md">
          <h2 className="text-lg font-light mb-4 text-left">Completed {tasks.filter(task => task.status === 'completed').length}</h2>
          <span className="flex items-center justify-center mb-2 border border-dashed border-slate-400 p-3">
            <FaPlus style={{ color: '#7b85d4' }} />
          </span>
          {tasks.filter(task => task.status === 'completed').map(task => (
            <Card
              key={task.id}
              description={task.description}
              date="28 Jul"
              tasks="4/4"
              comments="7"
              onMenuClick={handleMenuClick}
              menuVisible={!!menuVisibility[task.description]}
            >
              <input
                type="text"
                value={task.description}
                onChange={(e) => handleDescriptionChange(task.id, e.target.value)}
                onBlur={(e) => handleDescriptionChange(task.id, e.target.value)}
              />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks2;