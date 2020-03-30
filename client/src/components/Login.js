import React, { useContext } from "react";
import { FormContext } from "../global/FormContext";
import { LoginWrapper, Title, Avatar, User, InputWrap, Icon, Error, Email, Password } from "../styles/";
import At from "../images/at.svg";
import Pass from "../images/password.svg";
import Ava from "../images/user-silhouette.svg";

export default function Login({ show, pic, error }) {
  const { logEmail, logPass, setLogEmail, setLogPass, signName, signEmail, signPass, conPass } = useContext(
    FormContext
  );

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
      <Title props={activeProps}>{logEmail.length > 0 && logPass.length > 6 ? "Let's Go!" : "Login"}</Title>
      <Avatar>{pic ? <User src={pic} className="animated fadeIn" /> : <User src={Ava} />}</Avatar>
      <InputWrap>
        <Icon src={At} />
        <Email type="text" placeholder="email" value={logEmail} onChange={event => setLogEmail(event.target.value)} />
      </InputWrap>
      <InputWrap>
        <Icon src={Pass} />
        <Password
          type="password"
          placeholder="password"
          value={logPass}
          onChange={event => setLogPass(event.target.value)}
        />
      </InputWrap>
      {<Error>{error}</Error>}
    </LoginWrapper>
  );
}
