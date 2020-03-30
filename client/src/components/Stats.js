import React from "react";
import { Percent, Missed, StatsContainer } from "../styles/";

export default function Stats({ percent, overdue }) {
  let ss = null;
  if (overdue !== 1) {
    ss = "s";
  }
  return (
    <StatsContainer>
      <Percent>{percent}% Done</Percent>
      <Missed>
        {overdue} Task{ss} overdue
      </Missed>
    </StatsContainer>
  );
}
