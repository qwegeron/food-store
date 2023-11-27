"use client";
import { useEffect, useState } from "react";
import Filters, { Filter } from "../layout/filters";
import MenuItem, { ItemProps } from "./menuItem";

type Items = Array<ItemProps & { id: string }>;

interface MenuProps {
  items: Items;
}

const Menu: React.FC<MenuProps> = ({ items }: MenuProps) => {
  const [itemsOrder, setItemsOrder] = useState<Filter>("alphabet");
  const [orderedItems, setOrderedItems] = useState<Items>(items);

  useEffect(() => {
    const nonOrderedItems = [...items];
    if (itemsOrder === "alphabet") {
      nonOrderedItems.sort((a, b) => b.price - a.price);
    } else {
      nonOrderedItems.sort((a, b) => a.name.localeCompare(b.name));
    }
    setOrderedItems(nonOrderedItems);
  }, [itemsOrder, items]);

  return (
    <>
      <Filters filter={itemsOrder} setFilter={setItemsOrder} />
      <div className="grid grid-cols-3 gap-4 mt-6">
        {orderedItems.map((item) => (
          <MenuItem
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            key={item.id}
          />
        ))}
      </div>
    </>
  );
};

export default Menu;
