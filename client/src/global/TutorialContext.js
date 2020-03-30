import React, { useState, createContext } from "react";

export const TutorialContext = createContext();

export const TutorialProvider = props => {
  const [showTut, setShowTut] = useState(false);
  const [justSignedup, setJustSignedup] = useState(false);
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [step4, setStep4] = useState(false);
  const [step5, setStep5] = useState(false);

  return (
    <TutorialContext.Provider
      value={{
        showTut,
        setShowTut,
        justSignedup,
        setJustSignedup,
        step1,
        step2,
        step3,
        step4,
        step5,
        setStep1,
        setStep2,
        setStep3,
        setStep4,
        setStep5
      }}
    >
      {props.children}
    </TutorialContext.Provider>
  );
};
