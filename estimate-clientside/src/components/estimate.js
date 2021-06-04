import React from "react";

import useItemsStates from "../useItemsStates";
import styled from 'styled-components'

//components
import SaveItemForm from "./saveItemForm";
import ListItems from "./listItems";

// import '../styles/main.scss'

const StyledAppCover = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const EstimateComponent = () => {
  const initialValue = [];

  const {
    items,
    addItem,
    deleteItem,
    reset,
    updateChange,
    total,
    powerUnit,
    totalWithPf,
    convertPowerUnit,
  } = useItemsStates(initialValue);
  return (
    <StyledAppCover>
      <ListItems
        items={items}
        total={total}
        totalWithPf={totalWithPf}
        deleteItem={deleteItem}
        reset={reset}
        onChange={updateChange}
        powerUnit={powerUnit}
        convertPowerUnit={convertPowerUnit}
      />
      <SaveItemForm saveItem={(item) => addItem(item)} reset={reset} />
    </StyledAppCover>
  );
};

export default EstimateComponent;
