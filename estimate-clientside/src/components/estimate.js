import React from "react";

import useItemsStates from "../useItemsStates";

//components
import SaveItemForm from "./saveItemForm";
import ListItems from "./listItems";

// import '../styles/main.scss'

const EstimateComponent = () => {
	const initialValue = [];

	const {
		items,
		addItem,
		deleteItem,
		updateChange,
		total,
		powerUnit,
		totalWithPf,
		convertPowerUnit
	} = useItemsStates(initialValue);
	return (
		<div>
			<SaveItemForm saveItem={item => addItem(item)} />
			<ListItems
				items={items}
				total={total}
				totalWithPf={totalWithPf}
				deleteItem={deleteItem}
				onChange={updateChange}
				powerUnit={powerUnit}
				convertPowerUnit={convertPowerUnit}
			/>
		</div>
	);
};

export default EstimateComponent;
