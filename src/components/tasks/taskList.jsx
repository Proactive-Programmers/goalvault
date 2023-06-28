import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTasks } from '../../redux/slices/userSlice';
const TaskList = () => {
  let goal = useSelector((state) => state.currentGoal);
  let tasks = useSelector((state) => state.tasks);
  console.log(goal, 'goal');

  console.log(goal);
  const dispatch = useDispatch();

  const getTask = async () => {
    const tasksResponse = await fetch(`/tasks/${goal.id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
    const taskData = await tasksResponse.json();
    console.log('task data', taskData);
    dispatch(setTasks(taskData));
  };

  useEffect(() => {
    getTask();
  }, []);
  return (
    <div className='taskList'>
      <div className='taskListHolder'>
        <div className='taskListTable'>
          <p>Task Name</p>
          <p>Due Date</p>
          <p>Priority</p>
        </div>
        {tasks &&
          tasks.map((task) => {
            let priorityLevel = '';
            if (task.priority == '1') {
              priorityLevel == 'High';
            } else if (task.priority == '2') {
              priorityLevel = 'Medium';
            } else {
              priorityLevel = 'Low';
            }
            return (
              <div
                className='taskListItem'
                key={task.task + task.due_date + task.priority}
              >
                <p>{task.task}</p>
                <p>{task.due_date}</p>
                <p>{priorityLevel}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TaskList;
