import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './NavBar'
import CompanyCreate from './CompanyCreate'
import CompanyDelete from './CompanyDelete'
import CompanyItem from './CompanyItem'
import CompanyEdit from './CompanyEdit'
import CompanyListContainer from './CompanyListContainer';

const App = () => {
  return (
    <Router>
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