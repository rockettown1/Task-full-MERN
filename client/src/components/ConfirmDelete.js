import React, { useContext } from "react";
import { TasksContext } from "../global/TasksContext";
import { TutorialContext } from "../global/TutorialContext";
import { ConfirmModal, Box, Warning, Yes, No, ConfirmButtons, Text } from "../styles";

export default function ConfirmDelete({ style, keys }) {
  const { tasks, getTasks, setConfirm, currentIndex } = useContext(TasksContext);
  const { showTut, setStep4, setStep5, step4 } = useContext(TutorialContext);
  const deleteTask = async index => {
    const taskID = tasks[index]._id;

    await fetch(`http://localhost:3004/tasks/${taskID}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      credentials: "include"
    });
    const taskList = [...tasks];
    taskList.splice(index, 1);
    getTasks(taskList);
    setConfirm(false);
    if (showTut && step4) {
      setStep4(false);
      setStep5(true);
    }
  };

  return (
    <ConfirmModal style={style} key={keys}>
      <Box>
        <Warning>Are you sure you want to delete this task?</Warning>
        <ConfirmButtons>
          <Yes onClick={() => deleteTask(currentIndex)}>
            <Text>Sure, that's old news</Text>
          </Yes>
          <No onClick={() => setConfirm(false)}>
            <Text>Nope, changed my mind</Text>
          </No>
        </ConfirmButtons>
      </Box>
    </ConfirmModal>
  );
}
