import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './style.css';
import PortfolioWorkPage from './views/portfolio-work-page';
import NotFound from './views/not-found';

const App = () => {
  return (
    <Router basename="/KGIWebsite">
      <Switch>
        <Route exact path="/" component={PortfolioWorkPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
