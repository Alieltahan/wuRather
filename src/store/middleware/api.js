import { _getQuestions, _getUsers } from "../../_DATA";
import { questionsReceived, getQuestionsFailed } from "../questions";
import { usersReceived, getUsersFailed } from "../users";

const api =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type === "apiCallBegin") {
      const { onSuccess, onError, data } = action.payload;
      Promise.all([
        _getUsers().catch((e) => dispatch(getUsersFailed(e.message))),
        _getQuestions().catch((e) => dispatch(getQuestionsFailed(e.message))),
      ]).then((data) => {
        dispatch(usersReceived(data[0]));
        dispatch(questionsReceived(data[1]));
      });
    }
    next(action);
  };

export default api;
