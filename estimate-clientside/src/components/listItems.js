import React from "react";

const ListItems = ({
	items,
	deleteItem,
	total,
  powerUnit,
  convertPowerUnit,
}) => (
	<div>
		{items.map((item, i) => (
			<li key={i}>
				{item.power_item}: {item.power_value} Watts
				<button className="" onClick={() => deleteItem(i)}>
					x
				</button>
			</li>
		))}

		<h1>
			<span>Total power rating:</span> {total} {powerUnit}
			<span>
				<select name="unit" onChange={total => convertPowerUnit(total)}>
          <option value='VA'>VA</option>
          <option value='KVA'>KVA</option>
				</select>
			</span>
		</h1>
	</div>
);

export default ListItems;
