import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const TaskInputs = () => {
  const [inputs, setInputs] = useState({
    task: null,
    due: null,
    priority: null,
  });
  const handleChange = (e) => {
    setInputs((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  console.log(inputs);
  const handleAddTask = async () => {
    //send task data to database alongside with goal
    try {
      const response = await fetch('/addTask', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });
      const data = await response.json();
      //either set data with state/or not
    } catch (error) {}
  };
  return (
    <div className='taskInput'>
      <div className='taskInputHolders'>
        <label>
          Task
          <input
            type='text'
            name={'task'}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </label>
        <label>
          Due
          <input
            type='text'
            name={'due'}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </label>
        <label>
          Priority
          <select
            name={'priority'}
            onChange={(e) => {
              handleChange(e);
            }}
          >
            <option value={1}>High</option>
            <option value={2}>Medium</option>
            <option value={3}>Low</option>
          </select>
        </label>
      </div>
      <button onClick={handleAddTask}>add a task</button>
    </div>
  );
};

export default TaskInputs;
