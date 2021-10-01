import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import NewQuestion from "./components/NewQuestion";
import LeaderBoard from "./components/LeaderBoard";
import QuestionDetails from "./components/QuestionDetails";

import { useEffect, useState } from "react";
import { _getQuestions } from "./_DATA";
import { Provider } from "react-redux";
import confStore from "./store/confStore";

function App() {
  // Redux Store
  const store = confStore();

  // const [q, setQ] = useState({});
  // useEffect(() => {
  //   _getQuestions().then((data) => setQ(data));
  // }, []);

  // console.log(q);

  // const getQuestions = async () => {
  //   try {
  //     const getQ = await _getQuestions();
  //     const result = await getQ;
  //     setQ(result);
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // };
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
