import React, { useState } from 'react'

//components
import Input from './input'
import Button from './buttons'

// import '../styles/main.scss'

const equipments = [
	{ equipment_name: 'radio', equipment_rating: 40 },
	{ equipment_name: 'fridge', equipment_rating: 34 },
	{ equipment_name: 'light bulb', equipment_rating: 45 },
]


const EstimateComponent = () => {
	
	const [powerEstimate, setPowerEstimate] = useState('Click me, please');
	const [powerItem, setPowerItem] = useState('No item');
	const [powerVlaue, setPowerVlaue] = useState('0');

	function updatePowerItem(event) {
		return setPowerItem(event.target.value)
	}


	// render() {
	return (
		<div>
			{/* {console.log(powerVlaue)} */}
			<form className="input-field" >
				<Input
					placeholder='name of appliance'
					type='text'
					name='input'
					// value={() => getValues()}
					onChange={updatePowerItem}
					// onChange={(event) => setPowerItem(event.target.value)}
				/>
				<Input
					placeholder='Add appliance rating'
					type='text'
					name='input'
					// value={() => getValues()}
					onChange={(event) => setPowerVlaue(event.target.value)}
				/>
				<Button
					name='Generate estimate'
					type='submit'
					onclick={() => setPowerEstimate('got it!')}
				/>
			</form>
			{equipments.map((equipment, i) =>
				<li key={i}>{equipment.equipment_name}: {equipment.equipment_rating} Watts</li>
			)}
			{/* <h1>{displayContents()}</h1> */}

			<h1>{powerItem}: <span>{powerVlaue}</span> {powerVlaue > 1 ? 'Watts' : 'Watt'} </h1>
			{/* <h1>Home Item: <span>{powerVlaue}</span></h1> */}
			<h1>Total power consumed: <span>{powerEstimate}</span> Watts</h1>
		</div>
	)
	// }
}

export default EstimateComponent