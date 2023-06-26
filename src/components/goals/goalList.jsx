import React from 'react';
import { useSelector } from 'react-redux';

const GoalList = () => {
  // const goals  = useSelector((state)=>state.goals)
  const goals = [{ name: 'get rich' }];
  return (
    <div className='goalList'>
      {goals.map((el) => {
        return (
          <div className='goalItem' key={el}>
            <p>{el.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default GoalList;
