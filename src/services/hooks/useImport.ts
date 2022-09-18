import { snackbarActions } from "@/services";
import { useDispatch } from "react-redux";
import { FileRejection, useDropzone } from "react-dropzone";

interface Props {
  onValid?: (content: unknown) => boolean;
  onDrop?: (content: unknown) => void;
}

export const useImport = (options: Props) => {
  const dispatch = useDispatch();

  const onError = () => {
    dispatch(
      snackbarActions.add({
        msg: "Не удалось импортировать файл",
        status: "alert",
      })
    );
  };

  const onDrop = (acceptedFiles: File[], fileRejections: FileRejection[]) => {
    if (fileRejections.length) {
      onError();
      return;
    }

    const file = acceptedFiles[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        const json = JSON.parse(content);

        if (options.onValid) {
          if (!content && content && typeof content !== "string") {
            onError();
            return;
          }

          if (!options.onValid(json)) {
            onError();
            return;
          }
        }

        if (options.onDrop) {
          options.onDrop(json);
        }
      };
      reader.onerror = () => {
        onError();
      };
      reader.readAsText(file);
    }
  };

  const props = useDropzone({
    accept: {
      "application/json": [".json"],
    },
    multiple: false,
    onDrop,
  });

  return props;
};
