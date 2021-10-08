let newObj = {};
/**
 * @params : (Object): state of users
 */
// method for sorting users based on total scores (questios asked/answered)
export const sortedUsers = (obj) => {
  const arrayOfValues = Object.keys(obj).map((user) => {
    const userId = user;
    const userScore =
      Object.keys(obj[user].answers).length + obj[user].questions.length;
    return (newObj[userId] = userScore);
  });
  // Sorting the score/timestamp in an Array
  const sorting = Object.keys(arrayOfValues).sort((a, b) => {
    return arrayOfValues[b] - arrayOfValues[a];
  });
  // Storing the users' ID in an array
  const usersKeys = Object.keys(newObj);
  // using the sorted score's index to sort the user Ids
  return sorting.map((i) => usersKeys[i]);
};

/**
 * @params : (Object): entire state object
 */
// Method for sorting questions based on timestamp
export const sortedQ = (state) => {
  // Guard Clause
  if (!state.auth.loggedin) return;
  const getAnsweredQId = Object.keys(state.auth.answers);

  const unAnsweredQSorted = Object.values(state.questions)
    .filter((question) => !getAnsweredQId.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  const answeredQSorted = Object.values(state.questions)
    .filter((question) => getAnsweredQId.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  return { answeredQSorted, unAnsweredQSorted };
};
