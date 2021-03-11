import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

// import Checkout from './pages/Checkout';s
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import Tv from './pages/Tv';
import Home from './pages/Home';
import SignIn_SignUp from './pages/SignIn_SignUp';

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
        <Route path="/auth">
          <Header />
          <SignIn_SignUp />
          <Footer />
        </Route>
        <Route path="/payment">
          <Header />
          <Footer />
        </Route>
        <Route path="/cart">
          <Header />
          <Cart />
          <Footer />
        </Route>
        <Route path="/shop">
          <Header />
          <Shop />
          <Footer />
        </Route>
        <Route path="/tv">
          <Header />
          <Tv />
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
