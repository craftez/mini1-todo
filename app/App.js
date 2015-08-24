const React = require('react');
const ListContainer = require('./ListContainer');

const App = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="row">
          <ListContainer />
        </div>
      </div>
    )
  }
});

React.render(<App />, document.getElementById('app'));
