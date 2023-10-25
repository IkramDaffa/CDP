import * as actionType from "../actionsType/user.jsx";

const initialState = {
  userData: {},
  toDosData: [],
};

function UserReducer(state = initialState, action) {
  switch (action.type) {
    case actionType.SET_USER_DATA:
      return {
        ...state,
        userData: action.data,
      };
    case actionType.SET_TODOS:
      return {
        ...state,
        toDosData: action.data,
      };
    default:
      return state;
  }
}

export default UserReducer;
