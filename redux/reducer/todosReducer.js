import todoActions from "../todoActions";

export default function(state = [], action) {
  switch (action.type) {
    case todoActions.ADD_TODO:
      return state;
    default:
      return state;
  }
}
