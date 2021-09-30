import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../../_DATA";

export const getUsers = async () => {
  try {
    const users = await _getUsers();
    console.log(users);
  } catch (e) {
    console.log(e.message);
  }
};
export const getQuestions = async () => {
  try {
    const getQuestions = await _getQuestions();
    console.log(getQuestions);
  } catch (e) {
    console.log(e.message);
  }
};
