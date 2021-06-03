import React from "react";
import Button from "./buttons";

//TODO: Function is a bit buggy, so left for now.
// Check for items that are listed more than once and add their quantities then remove duplicates.
// const mergeDuplicateItems = (items) => {
//   let applianceName = [];
//   let mergedItems = [];
//   items.forEach((element) => {
//     if (!applianceName.includes(element["appliance_name"])) {
//       applianceName.push(element["appliance_name"]);
//       mergedItems.push(element);
//     } else {
//       mergedItems.forEach((mergedItem) => {
//         if (mergedItem["appliance_name"] === element["appliance_name"]) {
//           mergedItem["appliance_rating"] = parseInt(mergedItem["appliance_rating"]) + parseInt(
//             element["appliance_rating"]
//           );
//         }
//       });
//     }
//   });
//   return mergedItems;
// };

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
    {/* {console.log(mergeDuplicateItems(items))} */}
    {items.map((item, i) => (
      <li key={i}>
        {item.appliance_name}: {item.appliance_rating} X {item.quantity} Watts
        <Button
          type="button"
          name="x"
          className=""
          onclick={() => deleteItem(i)}
        />
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
    <Button name="Reset" type="button" onclick={() => reset()} />
  </div>
);

export default ListItems;
