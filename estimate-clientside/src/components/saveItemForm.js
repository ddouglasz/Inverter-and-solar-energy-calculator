import React, { useState, useEffect } from "react";

//components
import Input from "./input";
import Button from "./buttons";

//Constants
import { LOADS } from "../helpers/loads";

const SaveItemForm = ({ saveItem, updateChange }) => {
  // const [powerEstimate, setPowerEstimate] = useState('');
  const [power_item, setPowerItem] = useState("5W Bulb");
  const [power_value, setPowerValue] = useState(5);
  const [quantity, setQuantity] = useState(1);
  const [value, setValue] = useState("0");

  function updateQuantity(event) {
    event.preventDefault();
    setQuantity(event.target.value);
  }

  function updatePowerItem(event) {
    var index = event.nativeEvent.target.selectedIndex;
    event.preventDefault();
    setPowerItem(event.nativeEvent.target[index].text);
    setPowerValue(event.target.value);
  }

//   console.log("==>>", quantity);

  return (
    <div>
      <form
        className="input-field"
        onSubmit={(event) => {
          event.preventDefault();
          // saveItem(value)
          setValue("");
        }}
      >
        <br />
        <label htmlFor="appliance">Select an appliance:</label>
        <select name="loads" id="loads" onChange={updatePowerItem}>
          {LOADS.map((load, i) => (
            <option key={i} value={load.rating}>
              {load.item}
            </option>
          ))}
        </select>
        <br />

        <Input
          placeholder="1"
          type="number"
          name="input"
          value={(event) => event.target.value}
          onChange={updateQuantity}
        />
        <Button
          name="Generate estimate"
          type="submit"
          onclick={(item) => {
            item = { power_item, power_value, quantity };
            saveItem(item);
          }}
        />
      </form>
    </div>
  );
};

export default SaveItemForm;
