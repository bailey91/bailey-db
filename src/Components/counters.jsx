import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

//This function gets the Id from the values passed which will be the Id value set on the prop of the element and runs the filter() function to only return values that are
//different to the counterId passed, this means the array that is updated in .setState will not have this in the array and therefore when it updates it will be deleted so to speak
//The filter function is essentially a loop (ignore the c => it doesnt mean greater than or equal, its a loop) if the same Id is found it is not included in the new array

  handleDelete = (counterId) => {
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({counters});
  }

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} id={counter.id} onDelete={this.handleDelete} value={counter.value} selected={true}>
            <h4>Counter #{counter.id}</h4>
          </Counter>    
        ))}
      </div>
    );
  }
}

export default Counters;
