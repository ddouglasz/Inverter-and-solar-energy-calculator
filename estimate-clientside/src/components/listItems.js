import React from "react";
import Button from "./buttons";


//Check for items that are listed more than once and add their quantities then remove duplicates.
const mergeDuplicateItems = (items) => {
	console.log('---->>>', items)
	return []
}

const ListItems = ({
  items,
  deleteItem,
  reset,
  total,
  powerUnit,
  convertPowerUnit,
  totalWithPf,
}) => (
  <div>
	
	{mergeDuplicateItems(items)}
    {items.map((item, i) => (
      <li key={i}>
        {item.power_item}: {item.power_value} X {item.quantity} Watts
        <Button type="button" name="x" className="" onclick={() => deleteItem(i)} />
      </li>
    ))}

    <h1>
      <span>Total power rating:</span> {total} {powerUnit}
      <span>
        <select name="unit" onChange={(total) => convertPowerUnit(total)}>
          <option value="VA">VA</option>
          <option value="KVA">KVA</option>
        </select>
      </span>
      <div>
        <span> pf rating: {totalWithPf} KW</span>
      </div>
    </h1>

	<Button
          name="Reset"
          type="button"
          onclick={() => reset()}
        />
  </div>
);

export default ListItems;
