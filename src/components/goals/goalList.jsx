import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentGoal, setGoals } from '../../redux/slices/userSlice';
import { Link, useNavigate } from 'react-router-dom';
const GoalList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goals = useSelector((state) => state.goals);
  const userid = useSelector((state) => state.id);
  const handleDeleteGoal = async (id) => {
    console.log('id', id);
    console.log('deleted');
    const response = await fetch('/deleteGoal', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      //maybe send username aswell
      body: JSON.stringify(id),
    });
    const data = await response.json();
    //update state maybe
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
              <div className='goalItem' key={el.name}>
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
