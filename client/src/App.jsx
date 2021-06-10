import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { PlantsContextProvider } from "./context/PlantContext";
import DetailsPage from "./routes/DetailsPage";
import HomePage from "./routes/HomePage";
import UpdatePage from "./routes/UpdatePage";

const App = () => {

  return (
    <PlantsContextProvider>

      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/plants/:id/update" component={UpdatePage}/>
            <Route exact path="/plants/:id" component={DetailsPage}/>
          </Switch>
        </Router>
      </div>

    </PlantsContextProvider>
  )

};

export default App;
