import { CardMenu } from "@/components/CardMenu";
import { Card, DnD } from "@/uikit";
import { Text } from "@consta/uikit/Text";
import { FC } from "react";
import { Gauge } from "@consta/charts/Gauge";
import { useThemeVars } from "@consta/uikit/useThemeVars";
import { DropzoneRootProps, DropzoneInputProps } from "react-dropzone";

interface Props {
  percent: number | null;
  onImportClick: () => void;
  getRootProps: <T extends DropzoneRootProps>(props?: T) => T;
  getInputProps: <T extends DropzoneInputProps>(props?: T) => T;
}

export const Efficiency: FC<Props> = ({
  onImportClick,
  getRootProps,
  getInputProps,
  percent,
}) => {
  const vars = useThemeVars();

  const customFormatter = (
    data: Record<string, number> | undefined
  ): string => {
    return data && typeof data.percent === "number"
      ? `${(Number(data.percent) * 100).toFixed(0)}`
      : "";
  };

  return (
    <Card
      renderHeaderMiddle={() => (
        <>
          <Text as="span">Эффективность</Text>
          <Text as="span" size="xs" view="brand">
            {" "}
            млн.руб
          </Text>
        </>
      )}
      renderHeaderRight={() => <CardMenu onImportClick={onImportClick} />}
    >
      {percent ? (
        <Gauge
          height={150}
          percent={percent}
          range={{
            width: 5,
            color: vars.color.primary["--color-bg-brand"],
          }}
          indicator={{
            pointer: {
              style: {
                lineWidth: 3,
              },
            },
            pin: {
              style: {
                stroke: "transparent",
                fill: vars.color.primary["--color-bg-brand"],
                r: 5,
              },
            },
          }}
          axis={{
            tickLine: {
              length: -8,
            },
            label: {
              formatter: (v: string) => Number(v) * 100,
            },
            subTickLine: {
              length: -5,
              count: 4,
            },
          }}
          statistic={{
            content: {
              formatter: customFormatter,
              style: {
                fontSize: "16px",
                color: vars.color.primary["--color-bg-tone"],
              },
            },
          }}
        />
      ) : (
        <DnD getRootProps={getRootProps} getInputProps={getInputProps} />
      )}
    </Card>
  );
};
