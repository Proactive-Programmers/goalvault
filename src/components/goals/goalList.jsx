import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentGoal,
  setGoals,
  setTasks,
} from '../../redux/slices/userSlice';
import { Link, useNavigate } from 'react-router-dom';
const GoalList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goals = useSelector((state) => state.goals);
  const userid = useSelector((state) => state.id);
  const handleDeleteGoal = async (id) => {
    const response = await fetch('/deleteGoal', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(id),
    });
    const data = await response.json();
  };

  const handleGoalClick = (goalName) => {
    navigate('/goals/' + goalName);
  };

  const getGoals = async () => {
    const goalsResponse = await fetch(`/goals/${userid}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
    const goalsData = await goalsResponse.json();

    console.log(goalsData, 'goals data');

    dispatch(setGoals(goalsData));
  };

  useEffect(() => {
    getGoals();
  }, []);

  return (
    <div className='goalList'>
      <h1>List of Your Goals</h1>
      <div className='goalItemHolder'>
        {goals &&
          goals.map((el) => {
            const urlParam = el['goal_name']
              .split(' ')
              .join('')
              .toLocaleLowerCase();
            return (
              <div className='goalItem' key={el.name + el.goal_name}>
                <p
                  onClick={() => {
                    dispatch(setCurrentGoal(el));
                    handleGoalClick(urlParam);
                  }}
                >
                  {el['goal_name']}
                </p>
                <div className='goalItemActions'>
                  <img
                    onClick={() => {
                      dispatch(setCurrentGoal(el));
                      handleGoalClick(urlParam);
                    }}
                    className='editGoalItem'
                    alt='e'
                    width={'20px'}
                    src={require('../../../assets/delete.png')}
                  />

                  <img
                    onClick={() => handleDeleteGoal(el.id)}
                    className='deleteGoalItem'
                    width={'20px'}
                    src={require('../../../assets/edit.png')}
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
