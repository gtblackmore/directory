import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import NavBar from './NavBar'
import CompanyCreate from './CompanyCreate'
import CompanyItem from './CompanyItem'
import CompanyEdit from './CompanyEdit'
import CompanyListContainer from './CompanyListContainer';

const App = () => {
  return (
    <Router history={history}>
      <NavBar />
        <div className="ui container">
          <Route path="/" exact component={CompanyListContainer} />
          <Route path="/companies/edit/:id" exact component={CompanyEdit} />
          <Route path="/companies/show"  exact component={CompanyItem} />
          <Route path="/companies/new"  exact component={CompanyCreate} />
        </div>
    </Router>

  )
};

export default App;