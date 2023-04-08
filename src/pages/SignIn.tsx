import styled from "@emotion/styled";
import { useState, useEffect, FormEvent } from "react";
import { PostSignIn } from "../api/signApi";
import { ISignUpReq } from "../types/api";
import { useNavigate } from "react-router-dom";

const formSize = {
  default: 480,
  small: 335,
};

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [pwdErr, setPwdErr] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(true);
  const [judging, setJudging] = useState(true);

  const nav = useNavigate();

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const resp = await PostSignIn({
      email,
      password: pwd,
    } as ISignUpReq);
    localStorage.setItem("pre-onboarding-key", resp.data.access_token);
    nav("/todo");
  };

  const verifyEmail = (v: string) => {
    return v === "" ? true : /(?=@)/.test(v);
  };

  const verifyPwd = (v: string) => {
    return v === "" ? true : /^.{8,}$/.test(v);
  };

  useEffect(() => {
    const isValidEmail = verifyEmail(email);
    isValidEmail ? setEmailErr(false) : setEmailErr(true);
  }, [email]);

  useEffect(() => {
    const isValidPwd = verifyPwd(pwd);
    isValidPwd ? setPwdErr(false) : setPwdErr(true);
  }, [pwd]);

  useEffect(() => {
    if (!emailErr && !pwdErr && email !== "" && pwd !== "") {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  }, [emailErr, pwdErr, email, pwd]);

  useEffect(() => {
    if (localStorage.getItem("pre-onboarding-key")) {
      nav("/todo");
    } else {
      setJudging(false);
    }
  }, []);

  return (
    <Container>
      {!judging && (
        <>
          <h1>SignIn</h1>
          <FormWrapper>
            <Form onSubmit={(e) => submitHandler(e)}>
              <InputWrapper>
                <Label htmlFor="signup-email">id</Label>
                <Input
                  type="text"
                  id="signup-email"
                  name="email"
                  placeholder="이메일을 입력해주세요."
                  data-testid="email-input"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                {emailErr && (
                  <WarningText>이메일에는 @가 들어가야 합니다!</WarningText>
                )}
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="signup-pwd">password</Label>
                <Input
                  type="password"
                  id="signup-pwd"
                  name="pwd"
                  placeholder="비밀번호를 입력해주세요"
                  data-testid="password-input"
                  onChange={(e) => {
                    setPwd(e.target.value);
                  }}
                />
                {pwdErr && (
                  <WarningText>최소 8자 이상 기입해 주십시오.</WarningText>
                )}
              </InputWrapper>
              <SubmitBtn
                data-testid="signin-button"
                disabled={buttonDisable}
                type="submit"
              >
                로그인
              </SubmitBtn>
            </Form>
          </FormWrapper>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormWrapper = styled.div`
  width: 50%;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 12px;
  min-width: ${formSize.small}px;
  max-width: ${formSize.default}px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 112px;
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 24px;
  margin-top: 24px;
`;

const Input = styled.input`
  margin: 12px 0 4px;
  height: 32px;
  border-radius: 8px;
  padding: 0 12px;
`;

const SubmitBtn = styled.button`
  background-color: #004c99;
  color: white;
  border: none;
  margin-top: 32px;
  height: 48px;
  border-radius: 8px;
  :disabled {
    background-color: #dddd;
  }
`;

const WarningText = styled.span`
  color: red;
  font-weight: bold;
`;
