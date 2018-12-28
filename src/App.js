import React from "react";
import { createStore } from "redux";
import reducer from "./reducers/reducer";

const store = createStore(reducer);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }

  componentWillMount() {
    store.subscribe(() => this.setState(store.getState()));
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div className="App">
        <h1>Wanna some seledka</h1>
        <div>
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleChange}
          />
        </div>
        {this.state.checked ? <h2>YEP I WANNA</h2> : null}
      </div>
    );
  }
  handleChange() {
    this.setState({ checked: !this.state.checked });
  }
}

export default App;
