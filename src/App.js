import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import NewQuestion from "./components/NewQuestion";
import LeaderBoard from "./components/LeaderBoard";
import QuestionDetails from "./components/QuestionDetails";
import { useEffect } from "react";
import { Provider } from "react-redux";
import confStore from "./store/confStore";
import NotFound from "./components/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import LoadingBar from "react-redux-loading-bar";

function App() {
  // Redux Store
  const store = confStore();
  // Getting the data once the component mounts.
  useEffect(() => {
    store.dispatch({ type: "api/callBegan" });
  }, [store]);
  return (
    <Provider store={store}>
      <LoadingBar />
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute component={QuestionDetails} path="/questions/:id" exact />
        <PrivateRoute component={LeaderBoard} path="/leaderboard" exact />
        <PrivateRoute component={NewQuestion} path="/add" exact />
        <PrivateRoute component={Dashboard} path="/" exact />
        <PrivateRoute component={NotFound} to="/NotFound" />
        <Redirect to="/NotFound" />
      </Switch>
    </Provider>
  );
}

export default App;
