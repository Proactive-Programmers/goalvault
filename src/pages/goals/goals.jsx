import React from 'react';
import GoalInputs from '../../components/goals/goalInputs';
import GoalList from '../../components/goals/goalList';
import './goals.css';
import Navbar from '../../components/navbar/navbar';
const Goals = () => {
  return (
    <div className='goalsPage'>
      <GoalInputs />
      <GoalList />
    </div>
  );
};

export default Goals;
