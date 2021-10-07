import { Route, Redirect, Switch } from "react-router-dom";
import QuestionDetails from "./QuestionDetails";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import NotFound from "./NotFound";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
import { useSelector } from "react-redux";
import NavBar from "./NavBar";

const PrivateRoute = () => {
  const authUserId = useSelector((state) => state.auth.id);
  const condition = authUserId;
  return condition ? (
    <>
      <NavBar />
      <Switch>
        <Route path="/questions/:id" component={QuestionDetails} />
        <Route path="/add" component={NewQuestion} />
        <Route path="/leaderboard" component={LeaderBoard} />

        <Route path="/login" component={LoginPage} />
        <Route path="/notfound" component={NotFound} />
        <Route path="/" exact component={Dashboard} />
        <Redirect to="/notfound" />
      </Switch>
    </>
  ) : (
    <>
      <Route path="/login" component={LoginPage} />
      <Redirect to="/login" />
    </>
  );
};

export default PrivateRoute;
