import { FC } from "react";
import styled from "styled-components";
import { Header } from "./Header";

interface Props {
  children: React.ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <StyledRoot>
      <Header />
      <StyledContent>{children}</StyledContent>
    </StyledRoot>
  );
};

const StyledRoot = styled.div``;
const StyledContent = styled.div`
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`;
