import { FC } from "react";
import { AlertIcon } from "@/assets";
import {
  CountdownCircleTimer,
  ColorFormat,
} from "react-countdown-circle-timer";
import { useDispatch, useSelector } from "react-redux";
import { recommendationsActions, RootState } from "@/services";
import styled from "styled-components";
import { Text } from "@consta/uikit/Text";
import { useThemeVars } from "@consta/uikit/useThemeVars";

interface Props {}

export const RecommendationsTimer: FC<Props> = () => {
  const dispatch = useDispatch();
  const vars = useThemeVars();
  const recommendations = useSelector(
    (state: RootState) => state.recommendations
  );

  const initialRemainingTime = 21;

  return (
    <StyledRoot>
      <CountdownCircleTimer
        initialRemainingTime={initialRemainingTime}
        colors={vars.color.primary["--color-bg-brand"] as ColorFormat}
        trailColor={"transparent" as ColorFormat}
        size={48}
        strokeWidth={4}
        isPlaying
        duration={30}
        onComplete={() => {
          dispatch(recommendationsActions.generate());

          return {
            shouldRepeat: true,
            newInitialRemainingTime: initialRemainingTime,
          };
        }}
      >
        {({ remainingTime }) => <AlertIcon />}
      </CountdownCircleTimer>

      <StyledBadge>
        <Text size="xs">{recommendations.length}</Text>
      </StyledBadge>
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  position: relative;
`;
const StyledBadge = styled.div`
  position: absolute;
  top: 0px;
  right: -4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background: var(--color-typo-alert);
`;
