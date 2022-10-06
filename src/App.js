import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Food Shopping',
      date: '22.11.2022',
      reminder: false
    },
    {
      id: 2,
      text: 'Online Meeting',
      date: '04.08.2022',
      reminder: true
    },
    {
      id: 3,
      text: 'Go to Cinema',
      date: '11.03.2022',
      reminder: false
    }
  ]);

  const addTask = (task) => {
    const newTask = { id: 4, ...task };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task));
  };

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {
        tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks to show!'
      }
    </div>
  );
}

export default App;
