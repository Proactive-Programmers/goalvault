import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addGoal } from '../../redux/slices/userSlice.js';


const GoalInputs = () => {
  const user = useSelector((state) => state);
  const [goal, setGoal] = useState(null);
  const dispatch = useDispatch();
  console.log(user.id, goal);
  const handleAddGoal = async () => {
    //add the added item to state
    //send req to database
    try {
      const response = await fetch('/goals/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ user_id: user.id, goal_name: goal }),
      });
      const data = await response.json();
      console.log(data, 'data');
      dispatch(addGoal(data));
    } catch (error) {
      console.log('error is', error);
      console.log(error.message);
    }
  };
  return (
    <div className='goalInputs'>
      <div className='goalInputHead'>
        <h1>What is your next goal?</h1>
      </div>
      <label></label>
      <input
        placeholder='to be employed'
        type='text'
        onChange={(e) => setGoal(e.target.value)}
      />
      <button onClick={handleAddGoal}> Add </button>
    </div>
  );
};

export default GoalInputs;
