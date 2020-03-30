import React, { useState, createContext } from "react";

export const FormContext = createContext();

export const FormProvider = props => {
  const [LoginEmail, setLoginEmail] = useState("");
  const [LoginPass, setLoginPass] = useState("");
  const [SignupEmail, setSignupEmail] = useState("");
  const [SignupPass, setSignupPass] = useState("");
  const [SignupName, setSignupName] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [name, setName] = useState("");
  return (
    <FormContext.Provider
      value={{
        name,
        setName,
        logEmail: LoginEmail,
        logPass: LoginPass,
        setLogEmail: setLoginEmail,
        setLogPass: setLoginPass,
        signName: SignupName,
        signEmail: SignupEmail,
        signPass: SignupPass,
        conPass: confirmPass,
        setSignName: setSignupName,
        setSignEmail: setSignupEmail,
        setSignPass: setSignupPass,
        setConPass: setConfirmPass
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};
