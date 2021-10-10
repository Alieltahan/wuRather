# Would You Rather Project

This is the starter code for the final assessment project for Udacity's React & Redux course.

The `_DATA.js` file represents a fake database and methods that let you access the data. The only thing you need to edit in the ` _DATA.js` file is the value of `avatarURL`. Each user should have an avatar, so you’ll need to add the path to each user’s avatar.

# Installation

- git clone https://github.com/Alieltahan/wuRather.git : for cloning the project locally.
- npm install: for installing the dependencies.
- npm start: to start the app locally.

# Description

- A simple app for asking/answering questions with two option to select from.
- The application has a routing between different nav routes.
- Login by username (include 3 users to select from).
- Logout.
- Private routes which is accessible only by authorization of logged in user.

# Dependencies

- Material UI.
- Redux Toolkit.
- React.
- React-router-dom
- redux.

## What You're Getting

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # App Icon.
│   └── index.html # DO NOT MODIFY
└── src
    ├── img # Styles for your app. Feel free to customize this as you desire.
        └── icons #
            └── logout.svg # logout icon.
        └── ripped.jpg # background pic for 404 page.
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── components # container for all the components.
        ├── LoginPage.js #
            ├── NavBar.js #
            ├── Dashboard.js #
                ├── Questions.js #
                    ├── AnsweredQ.js #
                    └──  UnAnsweredQ.js #
                        └──RenderQ.js
                └── QUESTION DETAILS....
            └── LeaderBoard.js #
        ├── store # container for the redux store's files
                └── middleware.js #
                    └── api.js # file for calling backend functions.
            ├── confStore.js # Redux Store
            ├── rootReducer.js # Combining users/questions reducers
            ├── users.js # users reducer
            ├── auth.js # authentication & logged in user reducer
            └── questions.js # questions reducer
    ├── styles # container for all the styles files.
        ├── LoginPage.module.css #
        ├── Dashboard.module.css #
        ├── LeaderBoard.module.css #
        ├── NavBar.module.css #
        ├── NewQuestions.module.css #
        ├── NotFound.module.css #
        ├── QuestionDetails.module.css #
        ├── Questions.module.css #
        ├── RenderQ.module.css #
        ├──  #

    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── _DATA.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
## dependencies

- material-UI
<!-- - reduxToolkit -->

## Data

There are two types of objects stored in our database:

- Users
- Questions

### Users

Users include:

| Attribute | Type   | Description                                                                                                                                                                                                    |
| --------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id        | String | The user’s unique identifier                                                                                                                                                                                   |
| name      | String | The user’s first name and last name                                                                                                                                                                            |
| avatarURL | String | The path to the image file                                                                                                                                                                                     |
| questions | Array  | A list of ids of the polling questions this user created                                                                                                                                                       |
| answers   | Object | The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options. |

### Questions

Questions include:

| Attribute | Type   | Description                            |
| --------- | ------ | -------------------------------------- |
| id        | String | The question’s unique identifier       |
| author    | String | The author’s unique identifier         |
| timestamp | String | The time when the question was created |
| optionOne | Object | The first voting option                |
| optionTwo | Object | The second voting option               |

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type   | Description                                                        |
| --------- | ------ | ------------------------------------------------------------------ |
| votes     | Array  | A list that contains the id of each user who voted for that option |
| text      | String | The text of the option                                             |

Your code will talk to the database via 4 methods:

- `_getUsers()`
- `_getQuestions()`
- `_saveQuestion(question)`
- `_saveQuestionAnswer(object)`

1. `_getUsers()` Method

_Description_: Get all of the existing users from the database.
_Return Value_: Object where the key is the user’s id and the value is the user object.

2. `_getQuestions()` Method

_Description_: Get all of the existing questions from the database.
_Return Value_: Object where the key is the question’s id and the value is the question object.

3. `_saveQuestion(question)` Method

_Description_: Save the polling question in the database.
_Parameters_: Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute     | Type   | Description                                |
| ------------- | ------ | ------------------------------------------ |
| author        | String | The id of the user who posted the question |
| optionOneText | String | The text of the first option               |
| optionTwoText | String | The text of the second option              |

_Return Value_: An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type   | Description                                                                                                                  |
| --------- | ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| id        | String | The id of the question that was posted                                                                                       |
| author    | String | The id of the user who posted the question                                                                                   |
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option |
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option |
| timestamp | String | The time when the question was created                                                                                       |

4. `_saveQuestionAnswer(object)` Method

_Description_: Save the answer to a particular polling question in the database.
_Parameters_: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute  | Type   | Description                                                                             |
| ---------- | ------ | --------------------------------------------------------------------------------------- |
| authedUser | String | The id of the user who answered the question                                            |
| qid        | String | The id of the question that was answered                                                |
| answer     | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"` |

```
