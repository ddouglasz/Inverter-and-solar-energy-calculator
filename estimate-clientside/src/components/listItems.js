import React from "react";
import Button from "./buttons";
import styled from "styled-components";

const styledItemsList = styled.div`
  .results-wrapper {
    font-size: 32px;
    font-weight: bold;
    margin-top: 20px;
  }
`;

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
  <styledItemsList>
    <div className="results-wrapper">
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
    </div>
    {/* {console.log(mergeDuplicateItems(items))} */}
    {items.map((item, i) => (
      <li key={i}>
        {item.appliance_name}: {item.appliance_rating} X {item.quantity} Watts
        <Button type="button" classes="" onclick={() => deleteItem(i)}>
          x
        </Button>
      </li>
    ))}
  </styledItemsList>
);

export default ListItems;
