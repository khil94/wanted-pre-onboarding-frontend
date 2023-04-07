import styled from "@emotion/styled";

interface IComponentProps {
  children: React.ReactNode;
}

export function CommonLayout({ children }: IComponentProps) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;
