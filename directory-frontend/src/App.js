import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './NavBar'
import CompanyCreate from './CompanyCreate'
import CompanyDelete from './CompanyDelete'
import CompanyDetail from './CompanyDetail'
import CompanyEdit from './CompanyEdit'
import CompanyIndex from './CompanyIndex'

const App = () => {
  return (
    <Router>
      <NavBar />
        <div>
          <Route path="/" exact component={CompanyIndex} />
          <Route path="/companies/edit" component={CompanyEdit} />
          <Route path="/companies/show"  component={CompanyDetail} />
          <Route path="/companies/delete"  component={CompanyDelete} />
          <Route path="/companies/new"  component={CompanyCreate} />
        </div>
    </Router>

  )
};

export default App;