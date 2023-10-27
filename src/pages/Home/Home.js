import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./Home.css";

const Home = () => {

  const storageTasks = JSON.parse(localStorage.getItem('tasks'))
  

  const [taskName, setTaskName] = useState({
    name: '',
    status: ''
  });
  const [taskNames, setTaskNames] = useState(storageTasks ?? []);

  const handleAddTask = () => {
    setTaskNames((prev) => {
      const newTaskNames = [...prev, taskName];
      const jsonTasks = JSON.stringify(newTaskNames);
      localStorage.setItem('tasks', jsonTasks)
      return newTaskNames;
    });
    setTaskName("");
  };
  console.log(taskName)

  return (
    <>
      <Header></Header>
      <div className="home">
        <div>
          <div className="taskForm__home">
            <div className="taskForm">
              <input
                type="text"
                value={taskName.name}
                onChange={(event) => setTaskName({name: event.target.value, status: 'Active'})}
                placeholder="Enter your task"
              ></input>
              <button onClick={handleAddTask}>Add</button>
            </div>
          </div>
          <ul className="task-list">
            {taskNames.map((taskName, index) => (
              <li className="task-item">
                <button onClick={() => setTaskName({name: taskName.name, status: 'DONE'})}>{taskName.status}</button>
                {taskName.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
