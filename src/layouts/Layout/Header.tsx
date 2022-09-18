import { FC } from "react";
import styled from "styled-components";
import { Header as ConstaHeader, HeaderModule } from "@consta/uikit/Header";
import { Text } from "@consta/uikit/Text";
import { AvatarIcon, KebabIcon } from "@/assets";
import { useMeQuery } from "@/services";
import { RecommendationsTimer } from "@/components";

interface Props {}

export const Header: FC<Props> = () => {
  const meQuery = useMeQuery();

  return (
    <StyledHedaer
      rightSide={
        <StyledHeaderModule>
          <StyledDivider />
          <StyledHeaderUser>
            <AvatarIcon />
            <StyledBox>
              <Text>
                {meQuery.data?.data.lastName} {meQuery.data?.data.firstName}
              </Text>
              <Text size="s" view="brand">
                {meQuery.data?.data.rank}
              </Text>
            </StyledBox>
          </StyledHeaderUser>
          <StyledDivider />
          <StyledHeaderInformer>
            <RecommendationsTimer />
          </StyledHeaderInformer>
          <StyledDivider />
          <StyledHeaderKebab>
            <KebabIcon />
          </StyledHeaderKebab>
        </StyledHeaderModule>
      }
    />
  );
};

const StyledHedaer = styled(ConstaHeader)`
  background: var(--color-bg-normal);
  border: none;
  box-shadow: 0px 4px 4px var(--color-shadow-group-2);
  padding: 0;
`;
const StyledHeaderModule = styled(HeaderModule)`
  display: flex;
  align-items: center;
`;
const StyledBox = styled.div``;
const StyledHeaderUser = styled.div`
  min-width: 160px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 12px;
  color: var(--color-typo-brand);
`;
const StyledHeaderInformer = styled.div`
  padding: 0 12px;
`;
const StyledHeaderKebab = styled.div`
  padding: 0 5px;
`;
const StyledDivider = styled.div`
  width: 1px;
  height: var(--header-height);
  background: var(--color-bg-default);
`;
