import { KebabIcon } from "@/assets";
import { Menu } from "@/uikit";
import { FC } from "react";

interface Props {
  onImportClick: () => void;
}

export const CardMenu: FC<Props> = ({ onImportClick }) => {
  const items = [
    {
      type: "import",
      title: "Импорт JSON",
      onClick: onImportClick,
    },
  ];

  return (
    <Menu icon={KebabIcon} items={items} getLabel={(item) => item.title} />
  );
};
