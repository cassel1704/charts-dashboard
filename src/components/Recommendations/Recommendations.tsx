import { KebabIcon } from "@/assets";
import { RootState } from "@/services";
import { Card } from "@/uikit";
import { Text } from "@consta/uikit/Text";
import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

interface Props {}

export const Recommendations: FC<Props> = () => {
  const recommendations = useSelector(
    (state: RootState) => state.recommendations
  );

  return (
    <Card
      renderHeaderMiddle={() => <Text>Рекоммендации</Text>}
      renderHeaderRight={() => <KebabIcon />}
    >
      {!!recommendations.length ? (
        <StyledRecommendationList>
          {recommendations.map((current) => (
            <StyledRecommendationListItem key={current.id}>
              <Text>{current.msg}</Text>
            </StyledRecommendationListItem>
          ))}
        </StyledRecommendationList>
      ) : (
        <Text>Рекоммендации отсутсвуют</Text>
      )}
    </Card>
  );
};

export const StyledRecommendationList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 490px;
  overflow-y: auto;
  padding-right: 20px;
`;
export const StyledRecommendationListItem = styled.li`
  padding: 12px 12px 24px;
  background: var(--color-bg-normal);
`;
