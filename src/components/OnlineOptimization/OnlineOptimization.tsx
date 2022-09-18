import { FC } from "react";
import { Text } from "@consta/uikit/Text";
import styled from "styled-components";
import { Card, DnD } from "@/uikit";
import { CardMenu } from "@/components";
import { Button } from "@consta/uikit/Button";
import { Line } from "@consta/charts/Line";
import { useDispatch, useSelector } from "react-redux";
import {
  onlineOptimizationActions,
  OnlineOptimizationContract,
  RootState,
  useImport,
} from "@/services";
import { downloadExcelFromJSON } from "@/utils";
import { format } from "date-fns";

interface Props {}

export const OnlineOptimization: FC<Props> = () => {
  const dispatch = useDispatch();
  const onlineOptimization = useSelector(
    (state: RootState) => state.onlineOptimization
  );

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
          (currentValue: { d: string; v: number }) =>
            currentValue.d && currentValue.v
        )
    );
  };

  const handleDrop = (json: unknown) => {
    const modified = (
      json as { tag: string; value: { d: string; v: number }[] }[]
    ).reduce((accum: OnlineOptimizationContract[], current) => {
      current.value.forEach((currentValue) => {
        accum.push({
          title: current.tag,
          value: currentValue.v,
          date: currentValue.d,
        });
      });

      return accum;
    }, []);

    dispatch(onlineOptimizationActions.import(modified));
  };

  const handleDownload = () => {
    const prepared = onlineOptimization.reduce((accum: any[], current) => {
      const itemWithCurrentDateIndex = accum.findIndex(
        (c) => c.date === current.date
      );

      if (itemWithCurrentDateIndex > -1) {
        accum[itemWithCurrentDateIndex][current.title] = current.value;
      } else {
        accum.push({
          date: current.date,
          [current.title]: current.value,
        });
      }

      return accum;
    }, []);

    downloadExcelFromJSON(prepared);
  };

  const { open, getRootProps, getInputProps } = useImport({
    onValid: handleValid,
    onDrop: handleDrop,
  });

  return (
    <Card
      renderHeaderMiddle={() => (
        <StyledHeader>
          <Text>Онлайн оптимизация</Text>
          {!!onlineOptimization.length && (
            <Button size="s" label="Экспорт в excel" onClick={handleDownload} />
          )}
        </StyledHeader>
      )}
      renderHeaderRight={() => <CardMenu onImportClick={open} />}
    >
      {!!onlineOptimization.length ? (
        <Line
          data={onlineOptimization}
          xField="date"
          yField="value"
          seriesField="title"
          meta={{
            date: {
              alias: "Дата",
              formatter: (value) => format(new Date(value), "dd/MM"),
            },
            value: { alias: "Значение" },
          }}
        />
      ) : (
        <DnD getRootProps={getRootProps} getInputProps={getInputProps} />
      )}
    </Card>
  );
};

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
