import React, { useState } from 'react';
import Card from './Card';
import '../App.css';

interface Task {
  id: number;
  description: string;
  status: 'todo' | 'inProgress' | 'completed';
}

const TodoWithCards: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, description: 'Create mobile menu prototype in Principle', status: 'todo' },
    { id: 2, description: 'Select photos for blog post', status: 'todo' },
    { id: 3, description: 'Start new marketing campaign', status: 'inProgress' },
    { id: 4, description: 'Fix navigation on mobile devices', status: 'inProgress' },
    { id: 5, description: 'Create wireframes', status: 'inProgress' },
    { id: 6, description: 'Discovery meeting', status: 'completed' }
  ]);

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

  return (
    <>
      <div className="p-4">
        <div className="grid grid-cols-3 gap-4">
          {/* To Do Column */}
          <div className="bg-gray-100 p-4 rounded-md">
            <h2 className="text-lg font-bold mb-4">Todo {tasks.filter(task => task.status === 'todo').length}</h2>
            <div className="task-add p-4">
              <button onClick={handleAddTask}>Add Task</button>
            </div>
            {tasks
              .filter(task => task.status === 'todo')
              .map(task => (
                <Card
                  key={task.id}
                  description={task.description}
                  date="7 Aug"
                  tasks=""
                  comments=""
                  onClick={() => moveTask(task.id, 'inProgress')}
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
          <div className="bg-gray-100 p-4 rounded-md">
            <h2 className="text-lg font-bold mb-4">In Progress {tasks.filter(task => task.status === 'inProgress').length}</h2>
            {tasks
              .filter(task => task.status === 'inProgress')
              .map(task => (
                <Card
                  key={task.id}
                  description={task.description}
                  date=""
                  tasks=""
                  comments=""
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
          <div className="bg-gray-100 p-4 rounded-md">
            <h2 className="text-lg font-bold mb-4">Completed {tasks.filter(task => task.status === 'completed').length}</h2>
            {tasks
              .filter(task => task.status === 'completed')
              .map(task => (
                <Card
                  key={task.id}
                  description={task.description}
                  date=""
                  tasks=""
                  comments=""
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
    </>
  );
};

export default TodoWithCards;
