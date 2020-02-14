import React from "react";

const Button = props => <button onClick={props.onClick}>{props.text}</button>;

export default class Queue extends React.Component {
  state = {
    items: [1, 2, 3],
    newItem: "",
    frontItem: "",
    rearItem: ""
  };

  handleNewItemChange = e => {
    this.setState({
      newItem: e.target.value
    });
  };

  handleEnqueueClick = () => {
    const items = [...this.state.items];
    items.push(this.state.newItem);
    this.setState({
      items,
      newItem: "",
      frontItem: "",
      rearItem: ""
    });
  };

  handleDequeueClick = () => {
    const items = [...this.state.items];
    if (!items.length) return;
    items.shift();
    this.setState({
      items,
      newItem: "",
      frontItem: "",
      rearItem: ""
    });
  };

  handleFrontClick = () => {
    this.setState({
      frontItem: this.state.items[0]
    });
  };

  handleRearClick = () => {
    this.setState({
      rearItem: this.state.items[this.state.items.length - 1]
    });
  };

  render() {
    return (
      <div>
        <div className="row">
          <label>Queue items: Remove &#x2190; </label>
          <input type="text" value={this.state.items} disabled />
          <label> &#x2190; Add</label>
        </div>
        <div className="row">
          <label>Add item to queue: </label>
          <input
            type="text"
            onChange={this.handleNewItemChange}
            value={this.state.newItem}
          />
          <Button text="Enqueue" onClick={this.handleEnqueueClick} />
        </div>
        <div className="row">
          <label>Remove item from queue: </label>
          <Button text="Dequeue" onClick={this.handleDequeueClick} />
        </div>
        <div className="row">
          <label>Item to be removed: </label>
          <Button text="Front" onClick={this.handleFrontClick} />
          <input type="text" value={this.state.frontItem} disabled />
        </div>
        <div className="row">
          <label>Last item added: </label>
          <Button text="Rear" onClick={this.handleRearClick} />
          <input type="text" value={this.state.rearItem} disabled />
        </div>
      </div>
    );
  }
}
