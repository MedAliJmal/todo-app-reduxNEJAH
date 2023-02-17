import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTask, TaskAdd } from "../../redux/action";

const AddTask = () => {
  const [text, setText] = useState("");
  const { filter } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: Math.random(), action: text, isDone: false };
    text.trim() === "" ? alert("Add task") : dispatch(TaskAdd(newTask));
    setText("");
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <button onClick={() => dispatch(filterTask())}>
        {filter ? "Show All" : "Show Uncompleted"}
      </button>
    </div>
  );
};

export default AddTask;
