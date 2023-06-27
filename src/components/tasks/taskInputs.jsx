import React from 'react';
import { useSelector } from 'react-redux';

const TaskInputs = () => {
  let goal = useSelector((state) => state.user.currentGoal);
  return (
    <div className='taskInput'>
      <div className='taskInputHolders'>
        <label>
          Name
          <input type='text' />
        </label>
        <label>
          Due
          <input type='text' />
        </label>
        <label>
          Priority
          <input type='text' />
        </label>
      </div>
      <button>add a task</button>
    </div>
  );
};

export default TaskInputs;
