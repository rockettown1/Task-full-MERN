import React, { useContext } from "react";
import { TasksContext } from "../global/TasksContext";
import Lottie from "react-lottie";
import Deadline from "./Deadline";
import { Todo, GreenTick } from "../styles";
import animationData from "../images/lf30_editor_Nxuca0";
import Slider from "./Slider";
import Tick from "../images/newtick.svg";

export default function TaskScreen({ showIncomplete }) {
  const { tasks, getTasks } = useContext(TasksContext);

  const allTasks = [...tasks];
  const incompleted = [];
  allTasks.forEach(task => {
    if (!task.done) {
      incompleted.push(task);
    }
  });

  return showIncomplete
    ? incompleted.map((task, index) => {
        return (
          <Slider index={index} key={index}>
            <Todo>{task.description}</Todo>

            {task.done ? (
              task.played ? (
                <Lottie
                  style={{
                    marginLeft: "0",
                    position: "absolute",
                    right: "0"
                  }}
                  options={{
                    loop: false,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice"
                    }
                  }}
                  height={75}
                  width={75}
                  eventListeners={[
                    {
                      eventName: "complete",
                      callback: () => {
                        const temp = [...tasks];
                        if (temp[index].played) {
                          temp[index].played = false;
                          getTasks(temp);
                        }
                      }
                    }
                  ]}
                />
              ) : (
                <GreenTick src={Tick} />
              )
            ) : task.deadline ? (
              <Deadline deadline={task.deadline} index={index} />
            ) : null}
          </Slider>
        );
      })
    : tasks.map((task, index) => {
        return (
          <Slider index={index} key={index}>
            <Todo>{task.description}</Todo>

            {task.done ? (
              task.played ? (
                <Lottie
                  style={{
                    marginLeft: "0",
                    position: "absolute",
                    right: "0"
                  }}
                  options={{
                    loop: false,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice"
                    }
                  }}
                  height={75}
                  width={75}
                  eventListeners={[
                    {
                      eventName: "complete",
                      callback: () => {
                        const temp = [...tasks];
                        if (temp[index].played) {
                          temp[index].played = false;
                          getTasks(temp);
                        }
                      }
                    }
                  ]}
                />
              ) : (
                <GreenTick src={Tick} />
              )
            ) : task.deadline ? (
              <Deadline deadline={task.deadline} index={index} />
            ) : null}
          </Slider>
        );
      });
}
