import AxiosMockAdapter from "axios-mock-adapter";
import { axiosInstance } from "../axios";

import meMock from "./mocks/me.json";

const headers = { "content-type": "application/json" };

export const configureAxiosMockAdapter = () => {
  const mockInstance = new AxiosMockAdapter(axiosInstance, {});

  mockInstance.onGet("/me").reply(() => [200, meMock, headers]);
};
