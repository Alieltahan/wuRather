import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import NewQuestion from "./components/NewQuestion";
import LeaderBoard from "./components/LeaderBoard";
import QuestionDetails from "./components/QuestionDetails";
import { useEffect } from "react";
import { Provider } from "react-redux";
import confStore from "./store/confStore";
import NotFound from "./components/NotFound";

function App() {
  // Redux Store
  const store = confStore();
  // Getting the data once the component mounts.
  useEffect(() => {
    store.dispatch({ type: "api/callBegan" });
  }, [store]);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/questions/:id" component={QuestionDetails} />
          <Route path="/add" component={NewQuestion} />
          <Route path="/leaderBoard" component={LeaderBoard} />
          <Route path="/NotFound" component={NotFound} />
          <Route path="/login" component={LoginPage} />
          <Route path="/" exact component={Dashboard} />
          <Redirect to="/NotFound" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
