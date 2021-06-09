import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import DetailsPage from "./routes/DetailsPage";
import HomePage from "./routes/HomePage";
import UpdatePage from "./routes/UpdatePage";

const App = () => {
  return (
  <div>

    <Router>
      <Switch></Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/restaurants/:id/update" component={UpdatePage}/>
      <Route exact path="/restaurants/:id" component={DetailsPage}/>
    </Router>

  </div>
  )

};

export default App;
