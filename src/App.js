import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import NewQuestion from "./components/NewQuestion";
import LeaderBoard from "./components/LeaderBoard";
import QuestionDetails from "./components/QuestionDetails";
import { useEffect } from "react";
import { _getQuestions, _getUsers } from "./_DATA";
import { Provider } from "react-redux";
import confStore from "./store/confStore";
import { getUsers, usersArray } from "./store/users";
import { getQuestions } from "./store/questions";

function App() {
  // Redux Store
  const store = confStore();
  // Getting the data once the component mounts.
  useEffect(() => {
    _getUsers().then((data) => store.dispatch(getUsers(data)));
    _getQuestions().then((data) => store.dispatch(getQuestions(data)));
  }, [store]);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/questions/:id" component={QuestionDetails} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/add" component={NewQuestion} />
          <Route path="/leaderBoard" component={LeaderBoard} />
          <Route path="/" component={LoginPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
