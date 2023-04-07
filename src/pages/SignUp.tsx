import styled from "@emotion/styled";
import { useState } from "react";

export default function SignUp() {
  const [pwdErr, setPwdErr] = useState(false);

  return (
    <FormWrapper>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e);
        }}
      >
        <Label htmlFor="signup-email">id</Label>
        <Input
          type="text"
          id="signup-email"
          name="email"
          placeholder="이메일을 입력해주세요."
          data-testid="email-input"
        />
        <Label htmlFor="signup-pwd">password</Label>
        <PasswordInput
          type="password"
          id="signup-pwd"
          name="pwd"
          placeholder="비밀번호를 입력해주세요"
          data-testid="password-input"
        />
        {pwdErr && <WarningText>hi</WarningText>}
        <SubmitBtn data-testid="signup-button" type="submit">
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
`;

const WarningText = styled.span`
  color: red;
  font-weight: bold;
`;
