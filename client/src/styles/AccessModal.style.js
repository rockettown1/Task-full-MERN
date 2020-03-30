import styled from "styled-components";
import { animated } from "react-spring";

export const Container = styled(animated.div)`
  position: relative;
  background-color: white;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  transition: all 1s;
  width: 350px;
  height: ${({ show }) => (show ? "350px" : "0px")};
  display: flex;
  justify-content: center;
  overflow: hidden;
  margin: 0;

  @media screen and (max-width: 835px) {
    box-shadow: none;
    width: 370px;
    height: 500px;
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  box-shadow: inset 0px 1px 10px -5px rgba(0, 0, 0, 0.3);
  /* overflow: hidden; */
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  @media screen and (max-width: 835px) {
    border-radius: 10px;
  }
`;

export const Button = styled.div`
  width: 50%;
  border: none;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Active = styled(animated.div)`
  width: 50%;
  height: 45px;
  background: ${({ props }) =>
    (props.logemail.length > 0 && props.logpass.length > 6 && props.show) ||
    (props.signemail.length > 0 && props.signpass === props.conpass && props.signpass.length > 6 && !props.show)
      ? "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)"
      : "linear-gradient(135deg, #f6d365 0%, #fda085 100%)"};
  position: absolute;
  left: 0%;
  transition: all 1s;
  cursor: pointer;
  @media screen and (max-width: 835px) {
    border-radius: 10px;
    height: 40px;
  }
`;

export const Hidden = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

export const LogContainer = styled(animated.div)`
  display: flex;
  height: 100%;
  justify-content: space-between;
  transition: all 1s;
  position: absolute;
  width: 600px;
  padding-right: 50px;
  padding-left: 50px;
  transform: ${({ showLogin }) => (showLogin ? "translateX(-50%)" : "translateX(0%)")};
`;

export const LabelL = styled.p`
  position: relative;
  z-index: 10;
  transition: all 1s;
  color: ${({ showLogin }) => (showLogin ? "white" : "#fda085")};
  pointer-events: none;
`;

export const LabelS = styled.p`
  position: relative;
  z-index: 10;
  transition: all 1s;
  color: ${({ showLogin }) => (showLogin ? "#fda085" : "white")};
  pointer-events: none;
`;

export const Wrapper = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 835px) {
    background-color: white;
    height: 100vh;
    width: 100vw;
  }
`;

//Logout
export const LogoutButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 30px;
  background: white;
  margin-top: 10px;
  margin-bottom: 10px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  transition: border-bottom 0.5s;
  border-bottom: 2px solid lightgrey;
  &:active {
    box-shadow: inset 0px 1px 5px -1px rgba(0, 0, 0, 0.3);
  }
  &:hover {
    border-bottom: 2px solid #b490ca;
  }
`;

export const LogoutText = styled.p`
  color: #70818e;
  font-size: 0.8em;
  padding: 0 10px;
  user-select: none;
`;

export const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 835px) {
    background-color: white;
    align-items: flex-start;
  }
`;
