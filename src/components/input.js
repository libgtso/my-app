import React from "react";

export default class simpleInput extends React.Component {
  render() {
    const { checked, handleCheckAction } = this.props;
    return (
      <React.Fragment>
        <input checked={checked} type="checkbox" onChange={() => handleCheckAction(checked)} />
        {checked ? <h2>YEP I WANNA</h2> : null}
      </React.Fragment>
    );
  }
}
