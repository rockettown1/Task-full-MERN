import React, { useContext, useEffect, createRef } from "react";
import { TasksContext } from "../global/TasksContext";
import { Box, Yes, Text, ConfirmButtons, InputWrap, TaskModal, DateWrapper, CurrentTask } from "../styles";
import DayPicker from "react-day-picker";
import "../styles/day_picker/style.css";

export default function ConfirmDelete({ style, keys }) {
  const { tasks, getTasks, newTask, setNewTask, currentIndex, day, setDay, setEdit } = useContext(TasksContext);

  const taskInput = createRef();

  useEffect(() => {
    taskInput.current.focus();
    setNewTask(tasks[currentIndex].description);
    setDay(tasks[currentIndex].deadline);
  }, []);

  const updateTask = async () => {
    const taskID = await tasks[currentIndex]._id;

    await fetch(`https://blooming-harbor-18687.herokuapp.com/tasks/${taskID}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        description: newTask,
        deadline: day && tasks[currentIndex].deadline !== day ? day : tasks[currentIndex].deadline
      })
    });
    const updatedTasks = [...tasks];
    updatedTasks[currentIndex].description = newTask;
    updatedTasks[currentIndex].deadline = day;
    getTasks(updatedTasks);
    setEdit(false);
    setNewTask("");
    setDay();
  };

  const wrapStyles = { marginTop: "10px", width: "100%", display: "flex", justifyContent: "center" };

  return (
    <TaskModal
      style={style}
      key={keys}
      onClick={() => {
        setEdit(false);
        setNewTask("");
        setDay();
      }}
    >
      <Box style={{ height: "450px" }} onClick={e => e.stopPropagation()}>
        <h2>Make Changes</h2>
        <InputWrap style={wrapStyles}>
          <CurrentTask
            ref={taskInput}
            type="text"
            placeholder="Add a task"
            value={newTask}
            onChange={event => {
              if (event.target.value.length < 80) {
                setNewTask(event.target.value);
              }
            }}
          />
        </InputWrap>
        <DateWrapper>
          <DayPicker onDayClick={day => setDay(day)} />
        </DateWrapper>

        <ConfirmButtons>
          <Yes style={{ width: "100%" }} onClick={updateTask}>
            <Text>Edit this task</Text>
          </Yes>
        </ConfirmButtons>
      </Box>
    </TaskModal>
  );
}
