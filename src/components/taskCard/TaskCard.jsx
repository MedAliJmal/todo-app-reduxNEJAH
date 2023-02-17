import React from "react";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../../redux/action";
import EditTask from "../editTask/EditTask";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  //   console.log(task);
  return (
    <div>
      <h1 id={task.isDone ? "comp" : "unc"}>{task.action}</h1>
      <button onClick={() => dispatch(deleteTask(task.id))}>delete</button>
      <button onClick={() => dispatch(completeTask(task.id))}>
        {task.isDone ? "Undo" : "Complete"}
      </button>
      <EditTask taskedit={task} />
    </div>
  );
};

export default TaskCard;
