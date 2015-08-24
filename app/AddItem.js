const React = require('react');

const AddItem = React.createClass({
  getInitialState() {
    return {
      newItem: ""
    }
  },

  handleChange(event) {
    this.setState({
      newItem: event.target.value
    });
  },

  handleSubmit(e) {
    if(e.keyCode === 13) {
      this.props.add(this.state.newItem);
      this.setState({newItem: ""});
    }
  },

  render() {
    return (
      <div>
        <input type="text"
        className="form-control"
        value={this.state.newItem}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
        placeholder="New Item" />
      </div>
    )
  }
});

module.exports = AddItem;
