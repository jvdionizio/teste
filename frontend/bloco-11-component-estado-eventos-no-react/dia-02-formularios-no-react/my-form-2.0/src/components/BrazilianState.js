import React from "react";

class BrazilianStates extends React.Component{
  render(){
    return(
      <option value={this.props.value}>{this.props.title}</option>
    );
  }
}

export default BrazilianStates;