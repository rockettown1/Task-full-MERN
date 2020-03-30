import React, { useContext } from "react";
import { TasksContext } from "../global/TasksContext";
import moment from "moment";
import { DeadlineContainer, DateInfo } from "../styles/";
import Calendar from "../images/calendar1.png";

export default function Deadline({ deadline, index }) {
  const { setEdit, setCurrentIndex } = useContext(TasksContext);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const theDay = moment(deadline).date();
  const month = moment(deadline).month();

  const DeadlineMonth = months[month];

  return (
    <DeadlineContainer
      icon={Calendar}
      onClick={() => {
        setEdit(true);
        setCurrentIndex(index);
      }}
    >
      <DateInfo>{theDay}</DateInfo>
      <DateInfo>{DeadlineMonth}</DateInfo>
    </DeadlineContainer>
  );
}
