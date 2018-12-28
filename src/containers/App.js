import React from "react";
import { connect } from "react-redux";
import { handleCheck } from "../actions/index";

class App extends React.Component {
  render() {
    const { checked, handleCheckAction } = this.props;
    return (
      <div className="App">
        <h1>Wanna some seledka</h1>
        <div>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => handleCheckAction(checked)}
          />
        </div>
        {checked ? <h2>YEP I WANNA</h2> : null}
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    checked: store.checked
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleCheckAction: checked => dispatch(handleCheck(checked))
  };
};

// const mapDispatchToProps = dispatch => ({
//   handleCheckAction(checked) {
//     dispatch(handleCheck(checked));
//   }
// });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
