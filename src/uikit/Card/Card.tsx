import { SettingsIcon } from "@/assets";
import { FC } from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  renderHeaderMiddle: () => React.ReactNode;
  renderHeaderRight: () => React.ReactNode;
}

export const Card: FC<Props> = ({
  children,
  renderHeaderMiddle,
  renderHeaderRight,
}) => {
  return (
    <StyledRoot>
      <StyledHeader>
        <SettingsIcon />
        <StyledHeaderContent>{renderHeaderMiddle()}</StyledHeaderContent>
        {renderHeaderRight()}
      </StyledHeader>
      <StyledContent>{children}</StyledContent>
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: var(--color-bg-ghost);
`;
const StyledHeader = styled.div`
  height: 40px;
  background: var(--color-bg-normal);
  border: 1px solid var(--color-bg-normal);
  border-radius: 2px;
  display: flex;
  align-items: center;
  gap: 16px;
  color: var(--color-typo-brand);
  padding: 6px 12px;
`;
const StyledHeaderContent = styled.div`
  flex-grow: 1;
  color: var(--color-typo-primary);
`;
const StyledContent = styled.div`
  padding: 20px;
`;
