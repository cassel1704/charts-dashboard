import {
  efficiencyActions,
  EfficiencyContract,
  RootState,
  useImport,
} from "@/services";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Efficiency } from "./Efficiency";

interface Props {}

export const Efficiencies: FC<Props> = () => {
  const efficiency = useSelector((state: RootState) => state.efficiency);
  const dispatch = useDispatch();

  const handleValid = (json: unknown) => {
    if (!json || typeof json !== "object") {
      return false;
    }

    const eff = json as EfficiencyContract;

    if (!eff.percent || (eff.percent && typeof eff.percent !== "number")) {
      return false;
    }

    return eff.percent >= 0 && eff.percent <= 1;
  };

  const {
    open: openEf1,
    getRootProps: getRootPropsEf1,
    getInputProps: getInputPropsEf1,
  } = useImport({
    onValid: handleValid,
    onDrop: (json: unknown) =>
      dispatch(efficiencyActions.import1(json as EfficiencyContract)),
  });

  const {
    open: openEf2,
    getRootProps: getRootPropsEf2,
    getInputProps: getInputPropsEf2,
  } = useImport({
    onValid: handleValid,
    onDrop: (json: unknown) =>
      dispatch(efficiencyActions.import2(json as EfficiencyContract)),
  });

  return (
    <>
      <Efficiency
        onImportClick={openEf1}
        percent={efficiency.efficiency1.percent}
        getRootProps={getRootPropsEf1}
        getInputProps={getInputPropsEf1}
      />
      <Efficiency
        onImportClick={openEf2}
        percent={efficiency.efficiency2.percent}
        getRootProps={getRootPropsEf2}
        getInputProps={getInputPropsEf2}
      />
    </>
  );
};
