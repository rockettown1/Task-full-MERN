import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { Container, ButtonContainer, Button, LogContainer, Active, Hidden, LabelL, LabelS, Wrapper } from "../styles/";
import { useSpring } from "react-spring";
import { AuthContext } from "../global/AuthContext";
import { TasksContext } from "../global/TasksContext";
import { FormContext } from "../global/FormContext";
import { TutorialContext } from "../global/TutorialContext";
import { authHandler } from "../utils/authenticate";

export default function AccessModal() {
  const [showLogin, setShowLogin] = useState(true);
  const [show, setShow] = useState(false);
  const [pic] = useState("");
  const [, setisAuthenticated] = useContext(AuthContext);
  const { getTasks } = useContext(TasksContext);
  const [logmessage, setLogMessage] = useState("");
  const [signmessage, setSignMessage] = useState("");
  const { setJustSignedup } = useContext(TutorialContext);
  const {
    setName,
    logEmail,
    logPass,
    signEmail,
    signPass,
    conPass,
    signName,
    setLogEmail,
    setLogPass,
    setSignEmail,
    setSignPass,
    setSignName,
    setConPass
  } = useContext(FormContext);
  const history = useHistory();

  const activeProps = {
    logemail: logEmail,
    logpass: logPass,
    signemail: signEmail,
    signpass: signPass,
    conpass: conPass,
    signname: signName,
    show: showLogin
  };

  const slideRight = useSpring({
    from: {
      left: "0%"
    },
    to: {
      left: "50%"
    }
  });

  const slideLeft = useSpring({
    from: {
      left: "50%"
    },
    to: {
      left: "0%"
    }
  });

  const scale = useSpring({
    from: {
      transform: "scale(0)"
    },
    to: {
      transform: "scale(1)"
    }
  });

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1200);
  }, []);

  useEffect(() => {
    if (signPass === conPass && signPass !== "") {
      setSignMessage("Passwords match!");
    } else if (signPass !== conPass && signPass !== "") {
      setSignMessage("Passwords don't match");
    }
  }, [conPass, signPass]);

  const signUpHandler = async () => {
    //creates a new user
    const response = await fetch("https://blooming-harbor-18687.herokuapp.com/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        name: signName,
        email: signEmail.toLowerCase(),
        password: signPass
      })
    });

    const data = await response.json();

    //if a token comes back from request, user is now authenticated
    if (data.error) {
      setisAuthenticated(false);
    }
    const collection = await authHandler(setisAuthenticated);

    if (collection.error) {
      console.log(collection.error);
    }
    setSignEmail("");
    setSignPass("");
    setSignName("");
    setisAuthenticated(true);
    setJustSignedup(true);
    history.push("/tasks");
  };

  const logInHandler = async () => {
    if (logEmail.length > 0 && logPass.length > 6) {
      const response = await fetch("https://blooming-harbor-18687.herokuapp.com/users/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          email: logEmail.toLowerCase(),
          password: logPass
        })
      });
      const data = await response.json();

      if (data.error) {
        setLogMessage(data.error);
        setisAuthenticated(false);
        return;
      }
      const collection = await authHandler(setisAuthenticated);

      getTasks(collection);
      setName(data.user.name.split(" ")[0]);
      setisAuthenticated(true);
      setLogEmail("");
      setLogPass("");
      setConPass("");
      history.push("/tasks");
    }
  };

  const nameHandler = () => {
    setSignMessage("Please enter your full name");
  };
  const emailHandler = () => {
    setSignMessage("Please enter your email address");
  };
  const passHandler = () => {
    setSignMessage("Passwords should be more than 6 characters");
  };
  const confirmHandler = () => {
    setSignMessage("Please confirm your password");
  };

  return (
    <Wrapper style={scale}>
      {show ? null : <p className="animated fadeIn">Checking status...</p>}
      <Container show={show}>
        {show ? (
          <>
            <Hidden>
              <LogContainer showLogin={showLogin}>
                <Signup
                  show={showLogin}
                  nameHandler={nameHandler}
                  passHandler={passHandler}
                  confirmHandler={confirmHandler}
                  emailHandler={emailHandler}
                  error={signmessage}
                />
                <Login show={showLogin} error={logmessage} pic={pic} />
              </LogContainer>
            </Hidden>
            <ButtonContainer>
              <Button onClick={() => setShowLogin(true)}>
                <LabelL showLogin={showLogin}>
                  {logEmail.length > 0 && logPass.length > 6 && showLogin ? "Submit" : "Login"}
                </LabelL>
              </Button>
              <Button onClick={() => setShowLogin(false)}>
                <LabelS showLogin={showLogin}>
                  {signEmail.length > 0 && signPass === conPass && signPass.length > 6 && !showLogin
                    ? "Submit"
                    : "Signup"}
                </LabelS>
              </Button>
              <Active
                style={showLogin ? slideLeft : slideRight}
                props={activeProps}
                onClick={showLogin ? logInHandler : signUpHandler}
              />
            </ButtonContainer>
          </>
        ) : null}
      </Container>
    </Wrapper>
  );
}
