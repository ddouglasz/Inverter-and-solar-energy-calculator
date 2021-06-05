import React from "react";
import Button from "./buttons";
import styled from "styled-components";

const StyledItemsList = styled.div`
  .results-wrapper {
    font-weight: 900;
    font-size: 2rem;
  }

  .results {
  }

  .power-unit {
    margin-left: 5px;
    vertical-align: middle;
  }

  .item {
    margin: 5px;
    background: grey;
    display: flex;
    justify-content: space-between;
    padding: 2px;
  }

  .pf-rating {
    /* display: flex; */
    /* justify-content: space-between; */
  }

  .power-rating {

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
  <StyledItemsList>
    <div className="results-wrapper">
      <div className="results">
        <span>Total power rating:</span> <span>{total} {powerUnit}</span>
        <span>
          <select className="power-unit" name="unit" onChange={(total) => convertPowerUnit(total)}>
            <option value="VA">VA</option>
            <option value="KVA">KVA</option>
          </select>
        </span>
        <div>
          <span className="pf-rating"> <span>Pf rating:</span> <span>{totalWithPf} KW</span></span>
        </div>
      </div>
    </div>
    <h1>Appliances: </h1>
    {/* {console.log(mergeDuplicateItems(items))} */}
    {items.map((item, i) => (
      <li className="item" key={i}>
        {item.appliance_name}: {item.appliance_rating} X {item.quantity} Watts
        <Button type="button" classes="" onclick={() => deleteItem(i)}>
          x
        </Button>
      </li>
    ))}
  </StyledItemsList>
);

export default ListItems;
