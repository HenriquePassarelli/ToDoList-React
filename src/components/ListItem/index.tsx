import { useState } from "react";
import * as C from "./style";
import { Item } from "../../types/item";

type Props = {
  item: Item;
  onChange: (id: number, done: boolean) => void;
};

export const ListItem = ({ item, onChange }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  return (
    <C.Container done={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => {
          onChange(item.id, e.target.checked);
          setIsChecked(item.done);
        }}
      />
      <label>{item.name}</label>
    </C.Container>
  );
};
