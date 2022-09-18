import { axiosInstance } from "../axios";
import { MeContract } from "../contracts";

export const fetchMe = () => axiosInstance.get<MeContract>("/me");
