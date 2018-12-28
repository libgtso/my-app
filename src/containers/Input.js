import { connect } from "react-redux";
import simpleInput from "../components/input";
import { handleCheck } from "../actions/index";

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
)(simpleInput);
