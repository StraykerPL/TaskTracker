import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => {
  const createTaskHTML = (task) => {
    return <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />;
  };


  return (
    <>
        {tasks.map((task) => createTaskHTML(task))}
    </>
  );
};

export default Tasks;