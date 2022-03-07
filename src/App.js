import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import VotingList from "./pages/voting";
import Home from "./pages/index";
import Category from "./pages/category";
import { forum } from "./pages/forum";
import { admin } from "./pages/admin";
import PresidentSection from "./components/PresidentCardSection";
import CRSection from "./components/CRSection";
import VicePresidentSection from "./components/VicePresidentComponent";
import SecretarySection from "./components/SecretarySection";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import VotingDetailsPage from "./pages/votingdetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={LoginPage} exact />
          <Route path="/register" component={RegisterPage} exact />
          <Route path="/voting" component={VotingList} exact />
          <Route path="/category" component={Category} exact />
          <Route path="/forum" component={forum} exact />
          <Route path="/admin" component={admin} exact />
          <Route path="/votingdetails" component={VotingDetailsPage} exact />
          <Route path="/president" component={PresidentSection} />
          <Route
            path="/vice-president"
            component={VicePresidentSection}
            exact
          />
          <Route path="/secretary" component={SecretarySection} exact />
          <Route path="/cr" component={CRSection} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
