import React, { useState } from "react";

//components
import Input from "./input";
import Button from "./buttons";

//Constants
import { LOADS } from "../helpers/loads";

import styled from "styled-components";

const StyledSaveItemForm = styled.div`
  .generate-estimate-btn {
    background-color: #000000;
    border: none;
    color: #ffffff;
    text-align: center;
    font-size: 28px;
    padding: 20px;
    width: 200px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;
  }

  .generate-estimate-btn span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }

  .generate-estimate-btn span:after {
    content: "...";
    position: absolute;
    opacity: 0;
    top: 0;
    transition: 0.5s;
  }

  .generate-estimate-btn:hover span {
    padding-right: 25px;
  }

  .generate-estimate-btn:hover span:after {
    opacity: 1;
    right: 0;
  }
`;

const SaveItemForm = ({ saveItem, reset }) => {
  // const [powerEstimate, setPowerEstimate] = useState('');
  const [appliance_name, setPowerItem] = useState("5W Bulb");
  const [appliance_rating, setPowerValue] = useState(5);
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

  return (
    <StyledSaveItemForm>
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
          classes="generate-estimate-btn"
          type="submit"
          onclick={(item) => {
            item = { appliance_name, appliance_rating, quantity };
            saveItem(item);
          }}
        >
          <span>Calculate</span>
        </Button>
      </form>
      <Button type="button" onclick={() => reset()}>
        Reset
      </Button>
    </StyledSaveItemForm>
  );
};

export default SaveItemForm;
