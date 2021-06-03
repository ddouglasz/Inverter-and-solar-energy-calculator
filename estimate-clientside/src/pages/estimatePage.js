import React from "react";
import EstimateComponent from "../components/estimate";
import Navbar from "../components/navbar";

class Estimate extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <EstimateComponent />
      </>
    );
  }
}

export default Estimate;
