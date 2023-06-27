import React from 'react';
import TaskInputs from '../../components/tasks/taskInputs';
import TaskList from '../../components/tasks/taskList';
import './task.css';
import { useSelector } from 'react-redux';
const Task = () => {
  const goalName = useSelector((state) => state.user.currentGoal.name);
  return (
    <div className='taskPage'>
      <TaskInputs />
      <h2>{goalName}</h2>
      <TaskList />
    </div>
  );
};

export default Task;
