import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostSignIn } from "../api/SignApi";
import { SignData } from "../types";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPwdValid, setIsPwdValid] = useState(false);
  const [isValid, setIdValid] = useState(false);

  const navigator = useNavigate();

  useEffect(() => {
    if (email === "" || /(?=@)/.test(email)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  }, [email]);

  useEffect(() => {
    if (pwd === "" || /^.{8,}/.test(pwd)) {
      setIsPwdValid(true);
    } else {
      setIsPwdValid(false);
    }
  }, [pwd]);

  useEffect(() => {
    if (isEmailValid && isPwdValid && email !== "" && pwd !== "") {
      setIdValid(true);
    } else {
      setIdValid(false);
    }
  }, [isEmailValid, isPwdValid]);

  return (
    <Container>
      <h1>SignIn</h1>
      <FormWrapper>
        <Form
          onSubmit={async (e) => {
            e.preventDefault();
            const signData = {
              email: email,
              password: pwd,
            } as SignData;
            const resp = await PostSignIn(signData);
            if (resp?.data.access_token) {
              localStorage.setItem("ACCESS_TOKEN", resp.data.access_token);
              navigator("/todo");
            } else {
              alert("로그인에 실패하였습니다.");
            }
          }}
        >
          <Label htmlFor="signin-email">email</Label>
          <Input
            type="text"
            id="signin-email"
            name="email"
            placeholder="이메일을 입력하세요"
            data-testid="email-input"
            onChange={(e) => setEmail(e.target.value)}
          />
          {!isEmailValid && (
            <ErrorText>이메일에는 @가 포함되어 있어야 합니다.</ErrorText>
          )}
          <Label htmlFor="signin-pwd">password</Label>
          <Input
            type="password"
            id="signin-pwd"
            name="pwd"
            placeholder="비밀번호를 입력해주세요"
            data-testid="password-input"
            onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
          {!isPwdValid && (
            <ErrorText>비밀번호는 8자리 이상이어야 합니다.</ErrorText>
          )}
          <BtnWrapper>
            <Btn disabled={!isValid} type="submit">
              로그인
            </Btn>
            <Btn>회원가입</Btn>
          </BtnWrapper>
        </Form>
      </FormWrapper>
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
`;

const Form = styled.form`
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
`;

const Input = styled.input`
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 8px;
`;

const ErrorText = styled.span`
  color: red;
  font-weight: bold;
  margin: 4px 0 4px;
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;
`;

const Btn = styled.button`
  padding: 8px;
  border-radius: 8px;
  width: 45%;
  border-width: 1px;
`;
