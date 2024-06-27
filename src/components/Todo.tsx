import React, { useState } from 'react';
import '../App.css';

interface Task {
  id: number;
  title: string;
  status: 'todo' | 'inProgress' | 'completed';
}

const Todo: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Task 1', status: 'todo' },
    { id: 2, title: 'Task 2', status: 'todo' },
    { id: 3, title: 'Task 3', status: 'todo' }
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState<string>('');

  const moveTask = (id: number, newStatus: 'todo' | 'inProgress' | 'completed') => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  const handleAddTask = () => {
    if (newTaskTitle.trim() !== '') {
      const newTask: Task = {
        id: tasks.length + 1,
        title: newTaskTitle,
        status: 'todo'
      };
      setTasks([...tasks, newTask]);
      setNewTaskTitle('');
    }
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className="task-list">
        <h2>Todo</h2>
        {tasks
          .filter(task => task.status === 'todo')
          .map(task => (
            <div key={task.id} className="task">
              <span>{task.title}</span>
              <button onClick={() => moveTask(task.id, 'inProgress')}>
                Start
              </button>
            </div>
          ))}
        <div className="task-add">
          <input
            type="text"
            placeholder="Enter task..."
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
      </div>
      <div className="task-list">
        <h2>In Progress</h2>
        {tasks
          .filter(task => task.status === 'inProgress')
          .map(task => (
            <div key={task.id} className="task">
              <span>{task.title}</span>
              <button onClick={() => moveTask(task.id, 'completed')}>
                Complete
              </button>
            </div>
          ))}
      </div>
      <div className="task-list">
        <h2>Completed</h2>
        {tasks
          .filter(task => task.status === 'completed')
          .map(task => (
            <div key={task.id} className="task">
              <span>{task.title}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Todo;
