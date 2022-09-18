import { FC } from "react";
import { Theme as ConstaTheme } from "@consta/uikit/Theme";
import { preset } from "@/preset";

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider: FC<Props> = ({ children }) => {
  return <ConstaTheme preset={preset}>{children}</ConstaTheme>;
};
