import {
  QueryClient,
  QueryClientProvider as QCProvider,
} from "@tanstack/react-query";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export const QueryClientProvider: FC<Props> = ({ children }) => {
  return <QCProvider client={queryClient}>{children}</QCProvider>;
};
