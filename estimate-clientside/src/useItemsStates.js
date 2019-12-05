import { useState } from "react";

export default initialValue => {
  const [items, setItems] = useState(initialValue);
  const [total, setTotal] = useState(0);
  
  const updateTotal = (newItems) => {
    let powerValuesArray = [];
    let totalPower = 0
    newItems.forEach(newItem => {
      powerValuesArray.push(newItem.power_value);
      totalPower += parseFloat(newItem.power_value).toFixed(2)
    });
    // console.log(totalPower)
    return setTotal(totalPower)
  }

	return {
    items,
    
    total,

		addItem: item => {
      const newItems = [...items, item];
      updateTotal(newItems)
      setItems(newItems)
		},
    
		deleteItem: itemIndex => {
      const newItems = items.filter((_, index) => index !== itemIndex);
      updateTotal(newItems)
      setItems(newItems)
		},
	};
};
