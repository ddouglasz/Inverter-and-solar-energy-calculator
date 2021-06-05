import React, { useState } from "react";

//components
import Input from "./input";
import Button from "./buttons";

//Constants
import { LOADS } from "../helpers/loads";

import styled from "styled-components";

const StyledSaveItemForm = styled.div`  
  .inputs-cover {
    margin-bottom: 10%;
    font-size: 25px;
    display: flex;

  }

  .select-cover {

  }

  .appliance-label {
    margin-right: 4px;
  }

  .appliance-name {
  }

  .select-loads {
    vertical-align: middle;
    margin-right: 4px;
  }

  .quantity-input {
    width: 40px;
    padding: 0;
    vertical-align: middle;
  }

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
    margin-top: 5px;
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

  .reset-btn {
    margin-left: 4px;
    padding: 20px;
    font-size: 25px;
    background-color: red;
    color: #ffff;
    border: none;
    cursor: pointer;
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
          setValue("");
        }}
      >
        <div className="inputs-cover">
          <div className="select-cover">
            <label className="appliance-label" htmlFor="appliance">
              Select an appliance:
            </label>
            <select
              className="select-loads"
              name="loads"
              id="loads"
              onChange={updatePowerItem}
            >
              {LOADS.map((load, i) => (
                <option key={i} value={load.rating}>
                  {load.item}
                </option>
              ))}
            </select>
          </div>
          <Input
            placeholder="1"
            type="number"
            name="input"
            classes="quantity-input"
            value={(event) => event.target.value}
            onChange={updateQuantity}
          />
        </div>
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
        <Button classes="reset-btn" type="button" onclick={() => reset()}>
          Reset
        </Button>
      </form>
    </StyledSaveItemForm>
  );
};

export default SaveItemForm;
