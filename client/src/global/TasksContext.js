import React, { useState, createContext } from "react";

export const TasksContext = createContext();

export const TasksProvider = props => {
  const [tasks, getTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [play, setPlay] = useState(false);
  const [done, setDone] = useState(true);
  const [confirm, setConfirm] = useState(false);
  const [currentIndex, setCurrentIndex] = useState();
  const [openTask, setOpenTask] = useState(false);
  const [day, setDay] = useState();
  const [edit, setEdit] = useState(false);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        getTasks,
        newTask,
        setNewTask,
        play,
        setPlay,
        done,
        setDone,
        confirm,
        setConfirm,
        currentIndex,
        setCurrentIndex,
        openTask,
        setOpenTask,
        day,
        setDay,
        edit,
        setEdit
      }}
    >
      {props.children}
    </TasksContext.Provider>
  );
};
