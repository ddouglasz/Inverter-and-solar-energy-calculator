import { useState } from "react";

export default initialValue => {
  const [items, setItems] = useState(initialValue);
  const [total, setTotal] = useState(initialValue);
  
  const updateTotal = (newItems) => {
    let powerValuesArray = [];

    newItems.forEach(newItem => {
      powerValuesArray.push(parseInt(newItem.power_value));
    });
    let powerValuesTotal = powerValuesArray.reduce((a, b) => a + b, 0);

    // console.log(powerValuesTotal)
    return setTotal(powerValuesTotal)
  }

	return {
    items,
    
    total,

		addItem: item => {
      const newItems = [...items, item];
      updateTotal(newItems)
			setItems(newItems);
		},

		deleteItem: itemIndex => {
      const newItems = items.filter((_, index) => index !== itemIndex);
      updateTotal(newItems)
      setItems(newItems);
		},

		// displayTotal: (items) => {
    //   updateTotal(items)
    //   setItems(items);
    //   // console.log(items)
		// },
	};
};
