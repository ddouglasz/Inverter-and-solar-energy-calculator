import React, { useState } from "react";

//components
import Input from "./input";
import Button from "./buttons";

//Constants
import { LOADS } from "../helpers/loads";

const SaveItemForm = ({ saveItem, updateChange }) => {
  // const [powerEstimate, setPowerEstimate] = useState('');
  const [power_item, setPowerItem] = useState("");
  const [power_value, setPowerValue] = useState(0);
  const [value, setValue] = useState("0");

  function updatePowerItem(event) {
    var index = event.nativeEvent.target.selectedIndex;
    event.preventDefault();
    setPowerItem(event.nativeEvent.target[index].text);
    setPowerValue(event.target.value);
  }

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
        <label htmlFor="loads">Select an Item:</label>
        <select
          name="loads"
          id="loads"
          onChange={updatePowerItem}
          value={value}
        >
          {LOADS.map((load) => (
            <option key={load.item} value={load.rating}>
              {load.item}
            </option>
          ))}
        </select>
        <br />

        <Button
          name="Generate estimate"
          type="submit"
          onclick={(item) => {
            item = { power_item, power_value };
            saveItem(item);
          }}
        />
      </form>
    </div>
  );
};

export default SaveItemForm;
