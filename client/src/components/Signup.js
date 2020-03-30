import React, { useContext } from "react";
import { FormContext } from "../global/FormContext";
import { LoginWrapper, Title, InputWrap, Icon, Email, Error, Password, Name } from "../styles/";
import At from "../images/at.svg";
import Pass from "../images/password.svg";
import Person from "../images/woman.svg";

export default function Signup({ show, error, nameHandler, emailHandler, passHandler, confirmHandler }) {
  const {
    logEmail,
    logPass,
    signName,
    signEmail,
    signPass,
    setSignName,
    setSignEmail,
    setSignPass,
    conPass,
    setConPass
  } = useContext(FormContext);

  const activeProps = {
    logemail: logEmail,
    logpass: logPass,
    signemail: signEmail,
    signpass: signPass,
    conpass: conPass,
    signname: signName,
    show: show
  };

  return (
    <LoginWrapper>
      <Title props={activeProps}>
        {signEmail.length > 0 && signPass === conPass && signPass.length > 6 ? "Let's get started" : "Signup"}
      </Title>
      <InputWrap>
        <Icon src={Person} />
        <Name
          onFocus={nameHandler}
          type="text"
          placeholder="name"
          value={signName}
          onChange={event => setSignName(event.target.value)}
        />
      </InputWrap>
      <InputWrap>
        <Icon src={At} />
        <Email
          onFocus={emailHandler}
          type="text"
          placeholder="email"
          value={signEmail}
          onChange={event => setSignEmail(event.target.value)}
        />
      </InputWrap>
      <InputWrap>
        <Icon src={Pass} />
        <Password
          onFocus={passHandler}
          type="password"
          placeholder="password"
          value={signPass}
          onChange={event => setSignPass(event.target.value)}
        />
      </InputWrap>
      <InputWrap>
        <Icon src={Pass} />
        <Password
          onFocus={confirmHandler}
          type="password"
          placeholder="confirm password"
          value={conPass}
          onChange={event => setConPass(event.target.value)}
        />
      </InputWrap>
      <Error>{error}</Error>
    </LoginWrapper>
  );
}
