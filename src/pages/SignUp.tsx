import styled from "@emotion/styled";
import { useState, useEffect, FormEvent } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [pwdErr, setPwdErr] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(true);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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

  return (
    <FormWrapper>
      <Form onSubmit={(e) => submitHandler(e)}>
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
        {emailErr && <WarningText>hi</WarningText>}
        <Label htmlFor="signup-pwd">password</Label>
        <PasswordInput
          type="password"
          id="signup-pwd"
          name="pwd"
          placeholder="비밀번호를 입력해주세요"
          data-testid="password-input"
          onChange={(e) => {
            setPwd(e.target.value);
          }}
        />
        {pwdErr && <WarningText>hi</WarningText>}
        <SubmitBtn
          data-testid="signup-button"
          disabled={buttonDisable}
          type="submit"
        >
          회원가입
        </SubmitBtn>
      </Form>
    </FormWrapper>
  );
}

const FormWrapper = styled.div`
  width: 50%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 24px;
`;

const Input = styled.input`
  margin: 12px 0 20px;
  height: 32px;
  border-radius: 8px;
  padding: 0 12px;
`;

const PasswordInput = styled(Input)`
  margin-bottom: 4px;
`;

const SubmitBtn = styled.button`
  background-color: #004c99;
  color: white;
  border: none;
  margin-top: 32px;
  height: 32px;
  border-radius: 8px;
  :disabled {
    background-color: #dddd;
  }
`;

const WarningText = styled.span`
  color: red;
  font-weight: bold;
`;
