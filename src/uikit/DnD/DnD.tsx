import { Text } from "@consta/uikit/Text";
import { FC } from "react";
import styled from "styled-components";
import { DropzoneRootProps, DropzoneInputProps } from "react-dropzone";

interface Props {
  getRootProps: <T extends DropzoneRootProps>(props?: T) => T;
  getInputProps: <T extends DropzoneInputProps>(props?: T) => T;
}

export const DnD: FC<Props> = ({ getRootProps, getInputProps }) => (
  <StyledDnD {...getRootProps()}>
    <input {...getInputProps()} />

    <Text>Данных нет. Чтобы сделать импорт перетащите сюда JSON файл</Text>
  </StyledDnD>
);

const StyledDnD = styled.div`
  border: 2px dashed var(--color-typo-secondary);
  padding: 24px;
  border-radius: 8px;
  text-align: center;
  color: var(--color-typo-secondary);
`;
