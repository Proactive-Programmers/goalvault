import React, { useState } from 'react';

const GoalInputs = () => {
  const [goal, setGoal] = useState(null);
  const handleAddGoal = async () => {
    //add the added item to state
    //send req to database
    try {
      const response = await fetch('/addgoal', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ goal }),
      });
      const data = response.json();
    } catch (error) {
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
