import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  @media screen and (max-width: 835px) {
    box-shadow: none;
  }
`;

export const Title = styled.h2`
  background: ${({ props }) =>
    (props.logemail.length > 0 && props.logpass.length > 6 && props.show) ||
    (props.signemail.length > 0 && props.signpass === props.conpass && props.signpass.length > 6 && !props.show)
      ? "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)"
      : "linear-gradient(135deg, #f6d365 0%, #fda085 100%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Avatar = styled.div`
  background-color: #f0f0f0;
  border-radius: 50%;
  height: 75px;
  width: 75px;
  margin-bottom: 20px;
  overflow: hidden;
`;

export const User = styled.img`
  height: 75px;
  width: 75px;
  margin-top: 5px;
`;

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  margin-bottom: 10px;
  @media screen and (max-width: 835px) {
    margin-bottom: 30px;
  }
`;

export const Email = styled.input`
  width: 225px;
  height: 20px;
  appearance: none;
  border: none;
  outline: none;
  border-bottom: 1px solid #f0f0f0;
  transition: all 1s;
  &:focus {
    border-bottom: 1px solid #fda085;
  }
  @media screen and (max-width: 835px) {
    margin: 30px 0;
    font-size: 1em;
  }
`;

export const Password = styled.input`
  width: 225px;
  height: 20px;
  border: none;
  outline: none;
  border-bottom: 1px solid #f0f0f0;
  transition: all 1s;
  &:focus {
    border-bottom: 1px solid #fda085;
  }
  @media screen and (max-width: 835px) {
    font-size: 1em;
  }
`;

export const Submit = styled.button``;

export const Icon = styled.img`
  height: 15px;
  width: 15px;
  margin: 0 5px;
`;

export const Name = styled.input`
  width: 225px;
  height: 20px;
  appearance: none;
  border: none;
  outline: none;
  border-bottom: 1px solid #f0f0f0;
  transition: all 1s;
  &:focus {
    border-bottom: 1px solid #fda085;
  }
  @media screen and (max-width: 835px) {
    font-size: 1em;
  }
`;

export const Error = styled.p`
  font-size: 0.7em;
  color: rgb(253, 160, 133);
`;
