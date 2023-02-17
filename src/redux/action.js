import {
  ADD_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  FILTER_TASK,
} from "./actionTypes";

export const deleteTask = (taskID) => {
  return {
    type: DELETE_TASK,
    payload: taskID,
  };
};

export const TaskAdd = (newTask) => {
  return {
    type: ADD_TASK,
    payload: newTask,
  };
};

export const completeTask = (taskID) => {
  return {
    type: COMPLETE_TASK,
    payload: taskID,
  };
};

export const taskEdit = (editedTask) => {
  return { type: EDIT_TASK, payload: editedTask };
};

export const filterTask = () => {
  return { type: FILTER_TASK };
};
