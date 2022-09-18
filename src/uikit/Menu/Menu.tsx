import { PropsWithChildren, useRef, useState } from "react";
import { ContextMenu } from "@consta/uikit/ContextMenu";
import { Button } from "@consta/uikit/Button";

type Props<T> = {
  icon: React.FC<any>;
  items: T[];
  getLabel: (item: T) => string | number;
};

export function Menu<T extends { onClick?: (item: T) => void }>({
  icon,
  items,
  getLabel,
}: PropsWithChildren<Props<T>>) {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((open) => !open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleItemClick = ({ item }: { item: T }) => {
    handleClose();

    if (item.onClick) {
      item.onClick(item);
    }
  };

  return (
    <>
      <Button iconLeft={icon} ref={ref} onClick={handleToggle} size="s" />
      {open && (
        <ContextMenu
          items={items}
          getLabel={getLabel}
          anchorRef={ref}
          onItemClick={handleItemClick}
          onClickOutside={handleClose}
          size="s"
          direction="upCenter"
        />
      )}
    </>
  );
}
