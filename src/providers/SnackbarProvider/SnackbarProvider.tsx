import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SnackBar } from "@consta/uikit/SnackBar";
import styled from "styled-components";
import { RootState, snackbarActions } from "@/services";

interface Props {}

export const SnackbarProvider: FC<Props> = () => {
  const items = useSelector((state: RootState) => state.snackbar);
  const dispatch = useDispatch();

  return (
    <StyledSnackbar>
      <SnackBar
        items={items}
        onItemClose={(item) => dispatch(snackbarActions.remove(item))}
        getItemShowProgress={(item) => item.progressMode}
        getItemAutoClose={() => 3}
      />
    </StyledSnackbar>
  );
};

const StyledSnackbar = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
`;
