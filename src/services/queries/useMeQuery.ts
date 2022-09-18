import { useQuery } from "@tanstack/react-query";
import { fetchMe } from "../fetches";

export const USE_ME_QUERY_KEYS = ["me"];

export const useMeQuery = () => {
  const query = useQuery(USE_ME_QUERY_KEYS, fetchMe);

  return query;
};
