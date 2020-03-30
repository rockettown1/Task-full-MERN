import React, { useContext, useEffect, createRef } from "react";
import { TasksContext } from "../global/TasksContext";
import { TutorialContext } from "../global/TutorialContext";
import { Box, Yes, Text, ConfirmButtons, InputWrap, TaskModal, DateWrapper, CurrentTask } from "../styles";
import DayPicker from "react-day-picker";
import "../styles/day_picker/style.css";

export default function ConfirmDelete({ taskHandler, style, keys }) {
  const { newTask, setNewTask, openTask, setOpenTask, setDay } = useContext(TasksContext);
  const { showTut, setStep2, setStep3 } = useContext(TutorialContext);

  const taskInput = createRef();
  useEffect(() => {
    taskInput.current.focus();
  }, []);

  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter") {
        if (openTask) {
          taskHandler();
        }
      }
    };
    document.addEventListener("keyup", listener);
    return () => {
      document.removeEventListener("keyup", listener);
    };
  }, [newTask]);

  const wrapStyles = { marginTop: "10px", width: "100%", display: "flex", justifyContent: "center" };

  return (
    <TaskModal
      style={style}
      key={keys}
      onClick={() => {
        if (!showTut) {
          setOpenTask(false);
        }
      }}
    >
      <Box style={{ height: "450px" }} onClick={e => e.stopPropagation()}>
        <h2>Add something new</h2>
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
          <Yes
            style={{ width: "100%" }}
            onClick={() => {
              if (newTask.length !== 0) {
                taskHandler();
                if (showTut) {
                  setStep2(false);
                  setStep3(true);
                }
              }
            }}
          >
            <Text>Add to Tasks</Text>
          </Yes>
        </ConfirmButtons>
      </Box>
    </TaskModal>
  );
}
