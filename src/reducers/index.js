// @utils
const persistState = (state) => {
  // dont hate me for this :)
  // Think on a way to persist the current votes so if the page is refreshed the data is not lost.
  localStorage.setItem('stringifiedState', JSON.stringify(state));
}

const mutateArray = (state, payload) => {
  const newState = state.map((ruling, index) => {
    if (index !== payload.index) {
      return ruling
    }
    return {
      ...ruling,
      ...payload.ruling
    }
  })
  persistState(newState);
  return newState;
}


export const votesReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SELECT_VOTE":
      return mutateArray(state, payload);
    case "CAST_VOTE":
      return mutateArray(state, payload);
    case "RESET_VOTE_STATUS":
      return mutateArray(state, payload);
    default:
      return state;
  }
};

