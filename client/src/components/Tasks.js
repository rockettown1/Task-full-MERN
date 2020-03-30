import React, { useState, useEffect, useContext } from "react";
import { TasksContext } from "../global/TasksContext";
import { AuthContext } from "../global/AuthContext";
import { TutorialContext } from "../global/TutorialContext";
import { authHandler } from "../utils/authenticate";
import {
  TaskTitle,
  TasksContainer,
  TaskWrapper,
  TaskButton,
  AddTitle,
  Todays,
  Welcome,
  BaseWrapper,
  EditButton,
  EditTitle
} from "../styles";
import { useSpring, useTransition } from "react-spring";
import ConfirmDelete from "./ConfirmDelete";
import AddTask from "./AddTask";
import Stats from "./Stats";
import EditDeadline from "./EditDeadline";
import Logout from "./Logout";
import moment from "moment";
import TaskScreen from "./TaskScreen";
import Tutorial from "./Tutorial";

export default function Tasks() {
  const {
    tasks,
    getTasks,
    newTask,
    setNewTask,
    setPlay,
    confirm,
    openTask,
    setOpenTask,
    day,
    setDay,
    edit
  } = useContext(TasksContext);

  const {
    setShowTut,
    justSignedup,
    step1,
    step2,
    step3,
    step4,
    step5,
    setStep1,
    setStep2,
    setStep3,
    setStep4,
    setStep5
  } = useContext(TutorialContext);
  const [isAuthenticated, setisAuthenticated] = useContext(AuthContext);
  const [, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [percent, setPercent] = useState(0);
  const [taskCount, setTaskCount] = useState(0);
  const [overdue, setOverdue] = useState(0);
  const [showIncomplete, setShowIncomplete] = useState(false);

  const fadeConfirm = useTransition(confirm, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  const fadeTask = useTransition(openTask, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  const fadeEdit = useTransition(edit, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  useEffect(() => {
    const todaysDate = new Date().getDate();
    const todaysMonth = new Date().getMonth();
    let todaysTasks = 0;
    let overDueCount = 0;
    let doneCount = 0;
    let percentage = 0;
    tasks.forEach(task => {
      if (task.done) {
        doneCount++;
      }
      const taskDate = moment(task.deadline).date();
      const taskMonth = moment(task.deadline).month();

      if (task.deadline) {
        if (!task.done && todaysDate === taskDate && todaysMonth === taskMonth) {
          todaysTasks++;
        }
        if (!task.done && todaysDate > taskDate && todaysMonth >= taskMonth) {
          overDueCount++;
        }
      }
    });
    if (tasks.length > 0) {
      percentage = Math.round((doneCount / tasks.length) * 100);
    }
    setPercent(percentage);
    setTaskCount(todaysTasks);
    setOverdue(overDueCount);
  }, [tasks]);

  // useEffect(() => {
  //   const openTaskModal = event => {
  //     if (event.code === "Enter") {
  //       if (!openTask) {
  //         setOpenTask(true);
  //       } else {
  //         setOpenTask(false);
  //       }
  //     }
  //   };
  //   document.addEventListener("keyup", openTaskModal);
  //   return () => {
  //     document.removeEventListener("keyup", openTaskModal);
  //   };
  // }, [openTask]);

  //get tasks if array is currently empty
  useEffect(() => {
    const getCollection = async () => {
      const response = await authHandler(setisAuthenticated);
      getTasks(response);
    };
    if (tasks.length === 0) {
      getCollection();
    }

    const getUser = async () => {
      const response = await fetch("https://blooming-harbor-18687.herokuapp.com/users/me", {
        method: "GET",
        headers: {
          "content-type": "application/json"
        },
        credentials: "include"
      });
      const data = await response.json();
      if (data.error) {
        setisAuthenticated(false);
        console.log(data.error);
        return;
      }
      setName(data.name.split(" ")[0]);
    };
    getUser();

    setTimeout(() => {
      setLoading(true);
      setPlay(false);
    }, 2000);
  }, []);

  const scaleUp = useSpring({
    from: {
      height: "0px",
      opacity: 0
    },
    to: {
      height: "2000px",
      opacity: 1
    },
    onRest: () => {
      if (justSignedup) {
        setTimeout(() => {
          setShowTut(true);
        }, 1000);
      }
    }
  });

  const createTaskHandler = async () => {
    console.log("creating a task");
    let newTasksList = tasks;
    const capitalisedTask = newTask.charAt(0).toUpperCase() + newTask.slice(1);
    if (isAuthenticated && capitalisedTask !== "") {
      newTasksList.push({ description: capitalisedTask, done: false });
      await fetch("https://blooming-harbor-18687.herokuapp.com/tasks", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({
          description: capitalisedTask,
          deadline: day
        })
      });
      const response = await fetch("https://blooming-harbor-18687.herokuapp.com/tasks", {
        method: "GET",
        headers: { "content-type": "application/json" },
        credentials: "include"
      });
      const data = await response.json();
      getTasks(data);
      setNewTask("");
      setOpenTask(false);
      setDay();
    }
  };

  let s = null;
  if (taskCount !== 1) {
    s = "s";
  }

  return (
    <TasksContainer style={scaleUp}>
      <Tutorial />
      <TaskTitle>
        <Welcome>Hey there, {name}.</Welcome>
        <Todays>
          You've got {taskCount} Task{s} to do today
        </Todays>
        <TaskButton
          onClick={() => {
            setOpenTask(true);
            setStep1(false);
            setStep2(true);
          }}
        >
          <AddTitle>Let's add a task</AddTitle>
        </TaskButton>
        <Stats percent={percent} overdue={overdue} />
      </TaskTitle>

      <TaskWrapper>
        <TaskScreen showIncomplete={showIncomplete} />
      </TaskWrapper>
      {fadeConfirm.map(({ item, props, key }, index) => {
        return item && <ConfirmDelete style={props} keys={index} key={key} />;
      })}
      {fadeTask.map(({ item, props, key }, index) => {
        return item && <AddTask taskHandler={createTaskHandler} style={props} keys={index} key={key} />;
      })}
      {fadeEdit.map(({ item, props, key }, index) => {
        return item && <EditDeadline style={props} keys={index} key={key} />;
      })}

      <BaseWrapper>
        <EditButton onClick={() => setShowIncomplete(!showIncomplete)}>
          <EditTitle>{showIncomplete ? "Show" : "Hide"} Done</EditTitle>
        </EditButton>
        <Logout />
      </BaseWrapper>
    </TasksContainer>
  );
}
