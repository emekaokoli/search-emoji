import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Searchbar } from './components/Searchbar';
import { Page404 } from './utils/Page404';

function App() {
  return (
    <Router>
      <Header />
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route
            exact
            path='/search/:emoji'
            render={(props) => <Searchbar {...props} />}
          />
          <Route path='*'>
            <Page404 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
