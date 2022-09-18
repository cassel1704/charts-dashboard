export interface SnackbarContract {
  key: string;
  message: string;
  status?: "success" | "warning" | "alert" | "normal";
  progressMode?: "line" | "timer";
}
