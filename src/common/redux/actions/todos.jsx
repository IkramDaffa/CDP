import { API } from "src/common/API";
import * as actionType from "../actionsType/todos.jsx";

export const actionSetDataToDos = (data) => ({
  type: actionType.SET_TODOS,
  data,
});

export const setDataTodos = (params) => async (dispatch) => {
  API.get("todos/")
    .then((res) => {
      console.log(res.data);
      let dataRes = res.data;
      const filteredTodo = dataRes.filter((todo) => todo.userId == params);
      console.log(filteredTodo);
      dispatch(actionSetDataToDos(filteredTodo));
    })
    .catch((e) => console.log(e));
};
