import React, { Component } from "react";

class Counter extends Component {
  state = {
    //count: 0,
    count: this.props.value,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"], // this is used to create a list as demonstrated in the render.
  };

  styles = {
    fontSize: 50,
    fontWeight: "bold",
  };

  // For functions that are event handlers an arrow function is needed to be used in order to retrieve the Counter class. An arrow function inherits so is able to retrieve this
  // where a normal function cannot
  // To update the dom with changes made to properties, this.setState({}) needs to be used as it will let React know that the property has changed.
  // To simply call this function in the react section you would do  <button className="btn btn-secondary btn-sm" onClick={this.handleIncrement}>
  // However to pass an argument to the function you would have to do onClick={ () => this.handleIncrement(product)}

  handleIncrement = (product) => {
    console.log(product);
    console.log("clicked", this.state.count);
    this.setState({ count: this.state.count + 1 });
  };

  // This function will render the tags into the <div> with the this.RenderTags() if the length of the array of tags in the state class isnt zero, if it is zero the function will return there are no tags and break the function
  // You call this function within the text area of the <div> tag not the className
  // can also be expressed in the render as:
  //<div>
  //    {this.state.tags.length === 0 && "Please create a new tag!"}
  //<div>
  // This will create the words please create... if the tags.length = 0 is true else it does nothing atm
  // the operator && will return the first statement it finds as false or the last true value so
  //    {this.state.tags.length === 0 && false && "Please create a new tag! && 1"}
  // will return 1 as the last two values are always going to be true as theres no comparision made, however
  //    {this.state.tags.length === 0 && true && "Please create a new tag! && 1"}
  //would return a 1.

  RenderTags() {
    if (this.state.tags.length === 0) return <p>there are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      // A React.Fragment just deletes means the html will be in the root not in the root within a seperate div that is a child of the root.
      // This is where the HTML code goes.
      <div>
        {this.props.children}
        <img src={this.state.imageUrl} alt="" />
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.handleIncrement("cheese")}
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <div>{this.RenderTags()}</div>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state; // the {} gets the count from the state class and names the variable count
    return count === 0 ? "Zero" : count; // the ? serves as an IF statement, as this essentailly says return zero IF count = 0 and return the count variable if it is false. True always comes first and false second with the : seperating them
  }
}

export default Counter;
