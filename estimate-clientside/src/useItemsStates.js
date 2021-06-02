import { useState } from "react";

export default initialValue => {
	const [items, setItems] = useState(initialValue);
	const [total, setTotal] = useState(0);
	const [totalWithPf, setTotalWithPf] = useState(0);
	const [powerUnit, setPowerUnit] = useState("VA");

	const updateTotal = newItems => {
		let powerValuesArray = [];
		let totalPower = 0;
		
		newItems.forEach(newItem => {
			powerValuesArray.push(newItem.power_value);
			totalPower += parseFloat(newItem.power_value);
		});
		if (powerUnit === "KVA") {
			return setTotal(parseFloat(totalPower / 1000).toFixed(3));
		} else {
			return setTotal(parseFloat(totalPower).toFixed(3));
		}
	};

	return {
		items,

		total,

		powerUnit,

		totalWithPf,

		addItem: item => {
			const newItems = [...items, item];
			updateTotal(newItems);
			setItems(newItems);
		},

		deleteItem: itemIndex => {
			const newItems = items.filter((_, index) => index !== itemIndex);
			updateTotal(newItems);
			setItems(newItems);
		},

		convertPowerUnit: event => {
			event.preventDefault();
			const unit = event.target.value;
			setPowerUnit(unit);  
			if (unit === "KVA") {
				const newItem = total / 1000;
				setTotalWithPf(parseFloat(newItem/0.8).toFixed(3))
				setTotal(newItem);
			} else if (unit === "VA") {
				const newItem = total * 1000;
				setTotalWithPf(parseFloat(total/0.8).toFixed(3))
				setTotal(newItem);
			}
		},
	};
};
