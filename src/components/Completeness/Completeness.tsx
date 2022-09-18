import { Card } from "@/uikit";
import { FC, useState } from "react";
import { Pie } from "@consta/charts/Pie";
import { useSelector, useDispatch } from "react-redux";
import { CardMenu } from "@/components";
import {
  completenessActions,
  CompletenessContract,
  RootState,
  useImport,
} from "@/services";
import { DnD } from "@/uikit";
import styled from "styled-components";
import { Text } from "@consta/uikit/Text";
import { ShowMode } from "./components/ShowMode";
import { Efficiencies } from "./components/Efficiencies";

interface Props {}

export const Completeness: FC<Props> = () => {
  const completeness = useSelector((state: RootState) => state.completeness);
  const dispatch = useDispatch();
  const [showMode, setShowMode] = useState<"proc" | "value">("proc");

  const handleValid = (json: unknown) => {
    if (!Array.isArray(json)) {
      return false;
    }

    if (!json.length) {
      return false;
    }

    return json.every(
      (current) => current.type && current.value && current.proc
    );
  };

  const handleDrop = (json: unknown) => {
    dispatch(completenessActions.import(json as CompletenessContract[]));
  };

  const { open, getRootProps, getInputProps } = useImport({
    onValid: handleValid,
    onDrop: handleDrop,
  });

  return (
    <StyledContent>
      <StyledContentLeft>
        <Card
          renderHeaderMiddle={() => (
            <StyledHeader>
              <Text>Загрузка установки</Text>
              {!!completeness.length && (
                <ShowMode value={showMode} onChange={setShowMode} />
              )}
            </StyledHeader>
          )}
          renderHeaderRight={() => <CardMenu onImportClick={open} />}
        >
          {completeness.length ? (
            <Pie
              padding={[80, 0, 0]}
              data={completeness}
              angleField={showMode}
              colorField="type"
              innerRadius={0.55}
              statistic={{
                title: false,
                content: false,
              }}
              interactions={[
                { type: "tooltip", enable: false },
                { type: "legend-filter", enable: false },
              ]}
              legend={{
                layout: "horizontal",
                position: "top",
                itemSpacing: 0,
                marker: {
                  symbol: "square",
                },
              }}
              label={false}
            />
          ) : (
            <DnD getRootProps={getRootProps} getInputProps={getInputProps} />
          )}
        </Card>
      </StyledContentLeft>
      <StyledContentRight>
        <Efficiencies />
      </StyledContentRight>
    </StyledContent>
  );
};

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 16px;

  @media (max-width: 1919px) {
    grid-template-columns: 1fr;
  }
`;

const StyledContentLeft = styled.div``;
const StyledContentRight = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
`;
