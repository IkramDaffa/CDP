import * as actionType from "../actionsType/todos.jsx";

const initialState = {
  toDosData: [],
};

function ToDosReducer(state = initialState, action) {
  switch (action.type) {
    case actionType.SET_TODOS:
      return {
        ...state,
        toDosData: action.data,
      };
    default:
      return state;
  }
}
export default ToDosReducer;
