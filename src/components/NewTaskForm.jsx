import { useState } from 'react';
import PropTypes from 'prop-types';
import './NewTaskForm.css';

const kNewFormData = {
  title: '',
  isComplete: 'false',
};

const NewTaskForm = ({ onAddTaskCallback }) => {
  const [taskData, setTaskData] = useState(kNewFormData);

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;

    setTaskData(oldData => ({ ...oldData, [fieldName]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskData.title) { return; }


    setTaskData(kNewFormData);

    onAddTaskCallback({
      ...taskData,
      isComplete: taskData.isComplete === 'true'
    });
  };

  return (
    <form onSubmit={handleSubmit} className="new-task__form">
      <section>
        <h2>Add a Task</h2>
        <div className="new-task__fields">
          <label htmlFor="new-task__title">Title</label>
          <input
            name="title"
            id="new-task__title"
            value={taskData.title}
            onChange={handleChange}
          />
          <label htmlFor="new-task__isComplete">Complete</label>
          <select
            value={taskData.isComplete}
            onChange={handleChange}
            name="isComplete"
            id="new-task__isComplete"
          >
            <option value="true">
							Yes
            </option>
            <option value="false">
							No
            </option>
          </select>
          <button className="button new-task__submit" type="submit">
						Add Task
          </button>
        </div>
      </section>
    </form>
  );
};

NewTaskForm.propTypes = {
  onAddTaskCallback: PropTypes.func.isRequired,
};

export default NewTaskForm;



// import {useState} from 'react';

// const NewTaskForm = ({handleSubmit}) => {
//   const [newTask, SetNewTask] = useState('');

//   const handleChange = event => {
//     SetNewTask(event.target.value);
//   };


//   const onHandleSubmit = event => {
//     event.preventDefault();
//     const newTaskList = {
//       title: '',
//       isComplete: false,
//     };
//     handleSubmit(newTaskList);
//     SetNewTask('');
//   };

//   return (
//     <form onSubmit={onHandleSubmit}>
//       <label htmlFor="title"> Task Name: </label>
//       <input type="text" id="title" title="title" value={'title'} onChange={handleChange}/>
//       <button type="submit">Add Task</button>
//     </form>
//   );
// };
// export default NewTaskForm;