import styles from "./scss/bemit.module.scss";
import { Navbar } from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from "./components/home/Home";
import Popular from "./components/popular/Popular";
import TopRated from "./components/topRated/TopRated";
import {Upcoming} from "./components/upcoming/Upcoming";

const App = () => {
  return (
    <Router>
      <div className={styles.container}>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact>
          <Home />
        </Route>
        <Route path="/popular" component={Popular}>
          <Popular />
        </Route>
        <Route path="/rated">
          <TopRated />
        </Route>
        <Route path="/upcoming">
          <Upcoming />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
