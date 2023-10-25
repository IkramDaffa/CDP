import { API } from "src/common/API";
import * as actionType from "../actionsType/user.jsx";

export const actionSetDataUser = (data) => ({
  type: actionType.SET_USER_DATA,
  data,
});
export const actionSetDataToDos = (data) => ({
  type: actionType.SET_TODOS,
  data,
});
export const setDataTodos = (params, navigate) => async (dispatch) => {
  API.get("todos/")
    .then(async (res) => {
      console.log(res.data);
      let dataRes = res.data;
      const filteredTodo = dataRes.filter((todo) => todo.userId == params);
      console.log(filteredTodo);
      dispatch(actionSetDataToDos(filteredTodo));
      navigate("dashboard");
    })
    .catch((e) => console.log(e));
};

export const setDataUser = (params, navigate) => async (dispatch) => {
  API.get("users/")
    .then((res) => {
      console.log(res.data);
      let dataRes = res.data;
      const filteredUser = dataRes.filter((user) => user.username == params);
      console.log(filteredUser[0]);
      dispatch(actionSetDataUser(filteredUser[0]));
      dispatch(setDataTodos(filteredUser[0].id, navigate));
    })
    .catch((e) => console.log(e));
};
