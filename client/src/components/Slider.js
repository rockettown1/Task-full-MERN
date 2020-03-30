import React, { useContext } from "react";
import { useSpring } from "react-spring";
import { useDrag } from "react-use-gesture";
import { TasksContext } from "../global/TasksContext";
import { TutorialContext } from "../global/TutorialContext";
import { SliderContainer, UnderTask, Done, Delete, TaskSlider } from "../styles/";

function Slider(props) {
  const [{ x }, set] = useSpring(() => ({ x: 0 }));
  const { tasks, getTasks, setCurrentIndex, setPlay, setConfirm } = useContext(TasksContext);
  const { showTut, step3, setStep3, setStep4 } = useContext(TutorialContext);

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx] }) => {
    if (!down && mx > 75) {
      markDone(props.index);
      setPlay(true);
      if (showTut) {
        setStep3(false);
        setStep4(true);
      }
    } else if (!down && mx < -85) {
      if (!step3) {
        setConfirm(true);
        setCurrentIndex(props.index);
      }
    }

    if (mx > 180 || mx < -180) {
      set({ x: 0 });
    } else {
      set({ x: down ? mx : 0 });
    }
  });

  const markDone = async index => {
    setPlay(true);
    const taskID = tasks[index]._id;
    let taskDone = true;
    if (tasks[index].done) {
      taskDone = false;
    }
    await fetch(`https://blooming-harbor-18687.herokuapp.com/tasks/${taskID}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        done: taskDone
      })
    });
    const response = await fetch("https://blooming-harbor-18687.herokuapp.com/tasks", {
      method: "GET",
      headers: { "content-type": "application/json" },
      credentials: "include"
    });
    const data = await response.json();
    const animPlayed = [...data];
    animPlayed[index].played = true;
    getTasks(animPlayed);
  };

  return (
    <SliderContainer className="animated fadeIn">
      <UnderTask>
        <Done>
          <p>{tasks[props.index].done ? "Undo" : "Done"}</p>
        </Done>
        <Delete>
          <p>Delete</p>
        </Delete>
        <TaskSlider {...bind()} style={{ x }}>
          {props.children}
        </TaskSlider>
      </UnderTask>
    </SliderContainer>
  );
}

export default Slider;
