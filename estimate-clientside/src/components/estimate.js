import React from 'react'

import useItemsStates from '../useItemsStates'

//components
import SaveItemForm from './saveItemForm'
import ListItems from './listItems'

// import '../styles/main.scss'




const EstimateComponent = () => {
	const initialValue = []
	
	const { items, addItem, deleteItem, updateChange, total, y } = useItemsStates(initialValue)
	return (
		<div>
			<SaveItemForm saveItem={(item) => addItem(item)} />
			<ListItems items={items} total={total} deleteItem={deleteItem} onChange={updateChange}/>
		</div>
	)
 }

export default EstimateComponent
