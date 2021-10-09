import { showLoading, hideLoading } from "react-redux-loading-bar";
import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../../_DATA";
import { answerQuestion } from "../authUser";
import {
  questionsReceived,
  getQuestionsFailed,
  updateVotes,
} from "../questions";
import { usersReceived, getUsersFailed, answerQuestionToUser } from "../users";

const api =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type === "api/callBegan") {
      dispatch(showLoading());
      Promise.all([
        _getUsers().catch((e) => dispatch(getUsersFailed(e.message))),
        _getQuestions().catch((e) => dispatch(getQuestionsFailed(e.message))),
      ]).then((data) => {
        dispatch(usersReceived(data[0]));
        dispatch(questionsReceived(data[1]));
        setTimeout(() => {
          dispatch(hideLoading());
        }, 500);
      });
    } else if (action.type === "api/answerQuestion") {
      dispatch(showLoading());
      _saveQuestionAnswer(action.payload).then(() => {
        const { qid, answer } = action.payload;
        dispatch(answerQuestion([qid, answer]));
        dispatch(answerQuestionToUser(action.payload));
        dispatch(updateVotes(action.payload));
        setTimeout(() => {
          dispatch(hideLoading());
        }, 1000);
      });
    } else if (action.type === "api/addQuestion") {
      dispatch(showLoading());
      _saveQuestion(action.payLoad).then(() =>
        _getQuestions().then((data) => dispatch(questionsReceived(data)))
      );
      setTimeout(() => {
        dispatch(hideLoading());
      }, 1500);
    }
    next(action);
  };

export default api;
