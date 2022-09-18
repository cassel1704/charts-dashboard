import { Text } from "@consta/uikit/Text";
import { FC } from "react";
import styled from "styled-components";

interface Props {
  value: "proc" | "value";
  onChange: (value: "proc" | "value") => void;
}

export const ShowMode: FC<Props> = ({ value, onChange }) => {
  return (
    <StyledHeaderShowMode>
      <StyledHeaderShowModeItem
        selected={value === "proc"}
        onClick={() => onChange("proc")}
      >
        <Text size="s">%</Text>
      </StyledHeaderShowModeItem>
      <StyledHeaderShowModeItem
        selected={value === "value"}
        onClick={() => onChange("value")}
      >
        <Text size="s">т/ч</Text>
      </StyledHeaderShowModeItem>
      <StyledHeaderShowModeBorder />
    </StyledHeaderShowMode>
  );
};

const StyledHeaderShowMode = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const StyledHeaderShowModeBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 1px solid var(--color-typo-brand);
  pointer-events: none;
`;
const StyledHeaderShowModeItem = styled.div<{ selected: boolean }>`
  border-radius: 4px;
  border: 1px solid var(--color-typo-brand);
  padding: 0 8px;
  white-space: nowrap;

  ${(p) =>
    p.selected &&
    `
      border-color: var(--color-bg-brand);
      background: var(--color-bg-brand);
  `}
`;
