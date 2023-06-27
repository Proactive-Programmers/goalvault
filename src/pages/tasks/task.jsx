import React from 'react';
import TaskInputs from '../../components/tasks/taskInputs';
import TaskList from '../../components/tasks/taskList';

const Task = () => {
  return (
    <div className='taskPage'>
      <TaskInputs />
      <TaskList />
    </div>
  );
};

export default Task;
