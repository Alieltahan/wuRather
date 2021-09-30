import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import NewQuestion from "./components/NewQuestion";
import LeaderBoard from "./components/LeaderBoard";
import QuestionDetails from "./components/QuestionDetails";
import Questions from "./components/Questions";

import { useEffect } from "react";
import { getQuestions, getUsers } from "./components/services/api";

function App() {
  useEffect(() => {
    getUsers();
    getQuestions();
  }, []);
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/questions/:id" component={QuestionDetails} />
        <Route path="/questions" component={Questions} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/newQuestion" component={NewQuestion} />
        <Route path="/leaderBoard" component={LeaderBoard} />
        <Route path="/" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
