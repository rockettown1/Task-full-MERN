import React, { useContext } from "react";
import styled from "styled-components";
import { TutorialContext } from "../global/TutorialContext";
import Lottie from "react-lottie";
import swipeRight from "../images/lf30_editor_Nih1Um.json";
import swipeLeft from "../images/lf30_editor_AVYo0C.json";
import Cal from "../images/calendar1.png";

export default function Tutorial() {
  const { showTut, setShowTut, step1, step2, step3, step4, step5 } = useContext(TutorialContext);

  let style = {};
  if (window.innerWidth < 835) {
    if (step1) {
      style = { marginTop: "160px" };
    } else if (step2) {
      style = { marginTop: "20px", right: 0 };
    } else if (step3) {
      style = { marginTop: "280px", left: 0 };
    } else if (step4) {
      style = { marginTop: "20px", right: 0, bottom: 0 };
    } else if (step5) {
      style = { marginTop: "300px" };
    }
  } else {
    if (step1) {
      style = { marginLeft: "-230px", marginTop: "80px", left: 0 };
    } else if (step2) {
      style = { marginRight: "-230px", marginTop: "300px", right: 0 };
    } else if (step3) {
      style = { marginLeft: "-230px", marginTop: "150px", left: 0 };
    } else if (step4) {
      style = { marginRight: "-230px", marginTop: "150px", right: 0 };
    } else if (step5) {
      style = { marginTop: "300px" };
    }
  }

  return (
    showTut && (
      <TutorialContainer className="animated fadeIn" style={style}>
        {step1 && (
          <>
            <TutorialHead>
              <p>Welcome to the tutorial!</p>
            </TutorialHead>
            <TutorialBody>
              <p>Click on the main button to add a task</p>
              <p>1/5</p>
            </TutorialBody>
          </>
        )}
        {step2 && (
          <>
            <TutorialHead>
              <p>Adding a task & deadline date</p>
            </TutorialHead>
            <TutorialBody>
              <p>Simply type in a task and select a deadline date (if you have one)</p>
              <p>e.g Email Leon about app idea.</p>
              <p>2/5</p>
            </TutorialBody>
          </>
        )}
        {step3 && (
          <>
            <TutorialHead>
              <p>Marking a task as done</p>
            </TutorialHead>
            <TutorialBody>
              <p>
                To mark a task as done, click on a task & drag (or swipe) to the right until the green tick appears. You
                can repeat the action to undo it.
              </p>
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: swipeRight,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice"
                  }
                }}
                height={150}
                width={150}
              />
              <p>3/5</p>
            </TutorialBody>
          </>
        )}
        {step4 && (
          <>
            <TutorialHead>
              <p>Deleting a task</p>
            </TutorialHead>
            <TutorialBody>
              <p>
                To delete a task, click on a task & drag (or swipe) to the left. When the confirmation pops up select
                the 'sure' option.
              </p>
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: swipeLeft,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice"
                  }
                }}
                height={150}
                width={150}
              />
            </TutorialBody>
            <p>4/5</p>
          </>
        )}
        {step5 && (
          <>
            <TutorialHead>
              <p>Updating a task</p>
            </TutorialHead>
            <TutorialBody>
              <p>
                You can update a task whenever you like by clicking on the calendar icon and changing either the task,
                deadline, or both.
              </p>
              <IconContainer>
                <Icon src={Cal} />
              </IconContainer>
              <p>5/5 Enjoy x</p>
              <EndTut onClick={() => setShowTut(false)}>End Tutorial</EndTut>
            </TutorialBody>
          </>
        )}
      </TutorialContainer>
    )
  );
}

const TutorialContainer = styled.div`
  width: 200px;
  height: auto;
  position: absolute;
  z-index: 40;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  color: white;
  font-size: 0.8em;
  padding: 0 10px;

  @media screen and (max-width: 835px) {
    background-color: rgba(0, 0, 0, 0.9);
  }
`;

const TutorialHead = styled.div`
  height: 30px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TutorialBody = styled.div``;

const IconContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Icon = styled.img`
  height: 30px;
  width: 30px;
`;

const EndTut = styled.button`
  position: absolute;
  z-index: 50;
  background-color: white;
  border-radius: 6px;
  height: 20px;
  outline: none;
  border: none;
  margin: 7px;
  bottom: 0;
  right: 0;
`;
