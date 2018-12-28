export function handleCheck(checked) {
  return {
    type: "TOGGLE",
    payload: !checked
  };
}
