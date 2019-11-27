import React from 'react'
import EstimateComponent from '../components/estimate'
import Navbar from '../components/navbar'
import { EstimateContext } from '../context/estimateContexts'

class Estimate extends React.Component {
	render() {
		return (
			<>
				<EstimateContext>
					<Navbar />
					<EstimateComponent/>
				</EstimateContext>
			</>
		)
	}
}

export default Estimate

