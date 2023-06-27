import React from 'react';
import { useSelector } from 'react-redux';

const TaskList = () => {
  let goal = useSelector((state) => state.user.currentGoal);
  console.log(goal);
  return (
    <div className='taskList'>
      <div className='taskListHolder'>
        <div className='taskListTable'>
          <p>Task Name</p>
          <p>Due Date</p>
          <p>Priority</p>
        </div>
        {goal.tasks.map((el) => {
          return (
            <div className='taskListItem' key={el}>
              <p>{el.taskName}</p>
              <p>{el.due}</p>
              <p>{el.priority}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskList;
