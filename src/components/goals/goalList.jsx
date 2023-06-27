import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentGoal } from '../../redux/slices/userSlice';
import { Link, useNavigate } from 'react-router-dom';
const GoalList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const goals  = useSelector((state)=>state.goals)

  const goals = [
    {
      id: 0,
      name: 'get rich',
      tasks: [
        { taskName: 'work hard', due: 'tomorrow night', priority: 'high' },
      ],
    },
    {
      id: 1,
      name: 'get a job',
      tasks: [{ taskName: 'apply jobs', due: 'this year', priority: 'high' }],
    },
  ];
  const handleDeleteGoal = (id) => {
    console.log('id', id);
    console.log('deleted');
  };

  const handleGoalClick = (goalName) => {
    navigate('/goals/' + goalName);
  };
  return (
    <div className='goalList'>
      <h1>List of Your Goals</h1>
      <div className='goalItemHolder'>
        {goals.map((el) => {
          const urlParam = el.name.split(' ').join('').toLocaleLowerCase();
          return (
            <div className='goalItem' key={el.name}>
              <p
                onClick={() => {
                  dispatch(setCurrentGoal(el));
                  handleGoalClick(urlParam);
                }}
              >
                {el.name}
              </p>
              <div className='goalItemActions'>
                <img
                  onClick={() => {
                    dispatch(setCurrentGoal(el));
                    handleGoalClick(urlParam);
                  }}
                  className='editGoalItem'
                  alt='e'
                  src='../../../public/img/edit.png'
                />

                <img
                  onClick={() => handleDeleteGoal(el.id)}
                  className='deleteGoalItem'
                  alt='d'
                  src='../../../public/img/delete.png'
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GoalList;
