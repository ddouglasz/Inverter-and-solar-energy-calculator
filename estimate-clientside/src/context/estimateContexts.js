import React from 'react'

const { Consumer, Provider } = React.createContext(true);

class EstimateContext extends React.Component {

  getEstimate = () => {
     console.log('got here ==>>')
  }

  getValues = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { children } = this.props;
    return (
      <Provider value={{ ...this.state }}>
        {children}
      </Provider>
    );
  }
}

export default Consumer;

export { EstimateContext };

