import "./App.scss";
import SideNav from "./SideNav";
import RightBody from "./RightBody";
import EmailForm from "./EmailForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Resume from "./Resume";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <SideNav />
        </div>
        <div className="rightBody">
          <Switch>
            <Route path="/skills" component={Resume}></Route>
            <Route path="/email" component={EmailForm}></Route>
            <Route path="/" component={RightBody}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
