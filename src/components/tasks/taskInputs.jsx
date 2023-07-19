import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../../redux/slices/userSlice';
const TaskInputs = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    task: null,
    due_date: null,
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
    console.log(
      { goal_id: state.currentGoal.id, ...inputs },
      'requestbody',
      'goalid',
      state.currentGoal.id
    );
    try {
      const response = await fetch(`/tasks/${state.currentGoal.id}`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ goal_id: state.currentGoal.id, ...inputs }),
      });
      const data = await response.json();
      dispatch(addTask(data));
    } catch (error) {
      console.log(error.message);
    }
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
            placeholder='01/02/23'
            type='text'
            name={'due_date'}
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
