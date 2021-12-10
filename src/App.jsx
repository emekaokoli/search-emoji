import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Search from './container/Search';
import NotFound from './components/Page404';

function App() {
  return (
    <Router>
      <Nav />
      <div className='App'>
        <Switch>
          <Route path='/'>
            <Search />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
