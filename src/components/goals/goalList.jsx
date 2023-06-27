import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentGoal } from '../../redux/slices/userSlice';
import { Link, useNavigate } from 'react-router-dom';

const GoalList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const goals  = useSelector((state)=>state.goals)
  const handleGoalClick = (goalName) => {
    console.log('clicked');
    navigate('/goals/' + goalName);
  };
  const goals = [
    {
      name: 'get rich',
      tasks: [
        { taskName: 'work hard', due: 'tomorrow night', priority: 'high' },
      ],
    },
  ];
  return (
    <div className='goalList'>
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
          </div>
        );
      })}
    </div>
  );
};

export default GoalList;
