import React from 'react';
import { connect } from 'react-redux';
import CompanyItem from './CompanyItem';

const CompanyList = (props) => {
  const renderedCompanies = props.companies.map((company) => {
    return <CompanyItem company={company} key={company.id}/>;
  })
   return <div className="ui relaxed divided list">{renderedCompanies}</div>
};



export default connect(null)(CompanyList);