import React, { useState } from 'react'

//components
import Input from './input'
import Button from './buttons'


const SaveItemForm = ({saveItem, updateChange}) => {
	
	// const [powerEstimate, setPowerEstimate] = useState('');
	const [power_item, setPowerItem] = useState('');
	const [power_value, setPowerValue] = useState(0);
	const [value, setValue] = useState('0');

	
	function updatePowerItem(event) {
    event.preventDefault();
	  setPowerItem(event.target.value)
	}
	
	function upDatePowerValue(event) {
    event.preventDefault()
	  setPowerValue(event.target.value)
	}

	return (
		<div>
       <form className="input-field"  
        onSubmit={(event) => {
        event.preventDefault()
				// saveItem(value)

				setValue('')
       }}>
				<Input
					placeholder='name of appliance'
					type='text'
					name='input'
					value={power_item}
 					onChange={updatePowerItem}
 				/>
				<Input
					placeholder='Add appliance rating'
					type='number'
					name='input'
					value={power_value}
 					onChange={upDatePowerValue}
				/>
				<Button
					name='Generate estimate'
					type='submit'
					onclick={(item) => {
						item = {power_item, power_value}
						saveItem(item)
					}}
				/>
			</form>
		</div>
	)
 }

export default SaveItemForm