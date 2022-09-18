import { ecpActions, ECPContract, RootState, useImport } from "@/services";
import { Card, DnD } from "@/uikit";
import { Text } from "@consta/uikit/Text";
import { FC } from "react";
import { Line } from "@consta/charts/Line";
import { CardMenu } from "@/components";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { format } from "date-fns";
import { useThemeVars } from "@consta/uikit/useThemeVars";

interface Props {}

export const ECP: FC<Props> = () => {
  const ecp = useSelector((state: RootState) => state.ecp);
  const dispatch = useDispatch();
  const vars = useThemeVars();

  const handleValid = (json: unknown) => {
    if (!Array.isArray(json)) {
      return false;
    }

    if (!json.length) {
      return false;
    }

    return json.every(
      (current) =>
        current.tag &&
        current.value &&
        current.value.every(
          (currentValue: { d: string; v: number; stream: string }) =>
            currentValue.d && currentValue.v && currentValue.stream
        )
    );
  };
  const handleDrop = (json: unknown) => {
    dispatch(ecpActions.import(json as ECPContract));
  };

  const { open, getRootProps, getInputProps } = useImport({
    onValid: handleValid,
    onDrop: handleDrop,
  });

  const colorMap = {
    original: vars.color.primary["--color-typo-system"],
    min_warning: vars.color.primary["--color-typo-warning"],
    min_danger: vars.color.primary["--color-typo-alert"],
    max_warning: vars.color.primary["--color-typo-warning"],
    max_danger: vars.color.primary["--color-typo-alert"],
  };

  return (
    <Card
      renderHeaderMiddle={() => <Text>Изменение ECP</Text>}
      renderHeaderRight={() => <CardMenu onImportClick={open} />}
    >
      {!!ecp.length ? (
        <StyledLineList>
          {ecp.map((ecpItem) => (
            <StyledLineListItem key={ecpItem.tag}>
              <StyledLineListItemTitle>
                <Text as="span">{ecpItem.tag}</Text>
                <Text as="span" view="brand">
                  , ед. изм
                </Text>
              </StyledLineListItemTitle>
              <Line
                data={ecpItem.value}
                xField="d"
                yField="v"
                seriesField="stream"
                height={100}
                yAxis={{
                  tickCount: 4,
                }}
                meta={{
                  d: {
                    alias: "Дата",
                    formatter: (value) => format(new Date(value), "dd/MM"),
                  },
                  v: { alias: "Значение" },
                }}
                legend={false}
                lineStyle={({ stream }) => {
                  return {
                    stroke: colorMap[stream],
                    lineDash: stream === "original" ? null : [2, 4],
                  };
                }}
              />
            </StyledLineListItem>
          ))}
        </StyledLineList>
      ) : (
        <DnD getRootProps={getRootProps} getInputProps={getInputProps} />
      )}
    </Card>
  );
};
const StyledLineList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const StyledLineListItem = styled.li`
  padding: 8px;
  background: var(--color-bg-default);
`;
const StyledLineListItemTitle = styled.div`
  margin-bottom: 12px;
`;
