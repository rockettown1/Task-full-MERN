import styled from "styled-components";
import { animated } from "react-spring";

export const TaskSlider = styled(animated.div)`
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: white;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  padding-left: 10px;
`;

export const SliderContainer = styled(animated.div)`
  position: relative;
  height: 50px;
  width: 320px;
  background-color: red;
  border-radius: 10px;
`;

export const UnderTask = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Done = styled.div`
  width: 50%;
  /* background: linear-gradient(135deg, #5ee7df 0%, #b490ca 100%); */
  background: linear-gradient(120deg, #8ee2ba 0%, #9abdd3 100%);
  display: flex;
  padding-left: 20px;
  color: white;
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
  user-select: none;
`;

export const Delete = styled.div`
  width: 50%;
  background: linear-gradient(135deg, #9abdd3 0%, #f77165 100%);
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  color: white;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
  user-select: none;
`;

export const TaskTitle = styled.div`
  position: relative;
  height: 300px;
  width: 100%;
  background: linear-gradient(135deg, #5ee7df 0%, #b490ca 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`;

export const Todo = styled.p`
  pointer-events: none;
  user-select: none;
  font-size: 0.8em;
  padding-right: 60px;
`;

export const TasksContainer = styled(animated.div)`
  position: relative;
  background-color: white;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  transition: all 1s;
  width: 350px;
  max-height: 90vh;
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 1.5s;
  padding-bottom: 50px;
`;

export const Task = styled.input``;

export const TaskWrapper = styled(animated.div)`
  position: relative;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

export const TaskInputWrap = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 10;
  height: 75px;
  width: 100%;
  background: linear-gradient(135deg, #5ee7df 0%, #b490ca 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const GreenTick = styled.img`
  position: absolute;
  right: 0;
  margin-left: 0;
  height: 75px;
  width: 75px;
`;

//confirm delete modal
export const ConfirmModal = styled(animated.div)`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
`;

export const Box = styled.div`
  height: 100px;
  width: 300px;
  background-color: white;
  position: absolute;
  border-radius: 6px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const Warning = styled.p`
  font-size: 0.8em;
  user-select: none;
`;

export const ConfirmButtons = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  border-radius: 6px;
`;

export const Yes = styled.div`
  width: 50%;
  height: 40px;
  outline: none;
  transition: all 0.1s;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(120deg, #8ee2ba 0%, #9abdd3 100%);
  box-shadow: 0px 1px 10px -5px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  &:active {
    box-shadow: inset 0px 1px 10px -5px rgba(0, 0, 0, 0.4);
  }
`;

export const No = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  transition: all 0.1s;
  box-shadow: 0px 1px 10px -5px rgba(0, 0, 0, 0.4);
  background: linear-gradient(135deg, #9abdd3 0%, #f77165 100%);
  cursor: pointer;
  &:active {
    box-shadow: inset 0px 1px 10px -5px rgba(0, 0, 0, 0.4);
  }
`;

export const Text = styled.p`
  font-size: 0.7em;
  pointer-events: none;
  user-select: none;
  color: white;
`;

export const TaskButton = styled.div`
  width: auto;
  height: auto;
  background-color: white;
  border-radius: 6px;
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: inset 0px 1px 5px -1px rgba(0, 0, 0, 0.3);
  &:active {
    box-shadow: inset 0px 1px 5px -1px rgba(0, 0, 0, 1);
  }
`;

export const AddTitle = styled.p`
  color: #70818e;
  font-size: 0.8em;
  padding: 0 10px;
  user-select: none;
`;

export const Todays = styled.p`
  margin: 5px 10px;
  font-size: 0.8em;
`;

export const Welcome = styled.h1`
  margin-top: 20px;
  margin-bottom: 0;
`;

export const BaseWrapper = styled.div`
  position: absolute;
  z-index: 30;
  background-color: white;
  bottom: 0;
  height: 50px;
  width: 100%;
  border-top: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
`;

export const EditButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  background: white;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  margin-top: 10px;
  margin-bottom: 10px;
  transition: border-bottom 0.5s;
  border-bottom: 2px solid lightgrey;
  &:active {
    box-shadow: inset 0px 1px 5px -1px rgba(0, 0, 0, 0.3);
  }
  &:hover {
    border-bottom: 2px solid #b490ca;
  }
`;

export const EditTitle = styled.p`
  color: #70818e;
  font-size: 0.8em;
  padding: 0 10px;
  user-select: none;
`;

//Deadline component
export const DeadlineContainer = styled.div`
  position: absolute;
  right: 0;
  margin-left: 0;
  background-image: ${({ icon }) => `url(${icon})`};
  background-position: center;
  background-size: contain;
  height: 35px;
  width: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  padding-top: 12px;
  padding-bottom: 1px;
  margin-right: 20px;
`;

export const DateInfo = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.5em;
  color: rgba(0, 0, 0, 0.7);
  user-select: none;
`;

//task modal
export const TaskModal = styled(animated.div)`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
`;

export const DateWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
`;

export const CurrentTask = styled.input`
  width: 85%;
  height: 20px;
  font-size: 0.9em;
  appearance: none;
  border: none;
  outline: none;
  border-bottom: 1px solid #f0f0f0;
  transition: all 1s;
  &:focus {
    border-bottom: 1px solid #5ee7df;
  }
`;

//Stats
export const StatsContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 10px;
`;

export const Percent = styled.p`
  margin: 5px 10px;
  font-size: 0.8em;
`;

export const Missed = styled.p`
  margin: 5px 10px;
  font-size: 0.8em;
`;
