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
import { usersReceived, getUsersFailed } from "../users";

const api =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type === "api/callBegan") {
      Promise.all([
        _getUsers().catch((e) => dispatch(getUsersFailed(e.message))),
        _getQuestions().catch((e) => dispatch(getQuestionsFailed(e.message))),
      ]).then((data) => {
        dispatch(usersReceived(data[0]));
        dispatch(questionsReceived(data[1]));
      });
    } else if (action.type === "api/answerQuestion") {
      _saveQuestionAnswer(action.payLoad).then(() => {
        const { qid, answer } = action.payLoad;
        dispatch(answerQuestion([qid, answer]));
        return dispatch(updateVotes(action.payLoad));
      });
    } else if (action.type === "api/addQuestion") {
      _saveQuestion(action.payLoad).then(() =>
        _getQuestions().then((data) => dispatch(questionsReceived(data)))
      );
    }
    next(action);
  };

export default api;
