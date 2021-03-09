import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <Header />
          <Home />
          <Footer />
        </Route>
        <Route path="/checkout">
          <Header />
          <Footer />
        </Route>
        <Route path="/cart">
          <Header />
          <Footer />
        </Route>
        <Route path="/tv">
          <Header />
          <Footer />
        </Route>
        <Route path="/camera">
          <Header />
          <Footer />
        </Route>
        <Route path="/smartphones">
          <Header />
          <Footer />
        </Route>
        <Route path="/headphones">
          <Header />
          <Footer />
        </Route>
        <Route path="/speakers_hometheatres">
          <Header />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
