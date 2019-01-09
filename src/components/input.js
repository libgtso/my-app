import React from "react";
import PropTypes from "prop-types";

export default class simpleCheckInput extends React.Component {
  render() {
    const { checked, handleCheckAction } = this.props;
    return (
      <React.Fragment>
        <input
          checked={checked}
          type="checkbox"
          onChange={() => handleCheckAction(checked)}
        />
        {checked ? <h2>YEP I WANNA</h2> : null}
      </React.Fragment>
    );
  }
}

simpleInput.propTypes = {
  checked: PropTypes.bool.isRequired,
  handleCheckAction: PropTypes.func.isRequired
};
