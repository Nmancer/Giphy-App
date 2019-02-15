export default (state = [], action) => {
  if (action.type === "FETCH_TRENDING") {
    const newObj = action.payload;
    if (state.length !== 0) {
      if (!action.reset) {
        newObj.data = [...state.data, ...action.payload.data];
      }
    }
    return newObj;
  }
  return state;
};
