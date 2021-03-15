import React from 'react';
import { Link } from 'react-router-dom';

const CompanyItem = ({company, onCompanySelect}) => {
  return (
    <div className="ui items">

    <div className="item">
      <div className="ui small image">
        <img src="https://via.placeholder.com/150" alt={company.name} />
      </div>
    <div className="content">
      <div className="header">{company.name}</div>
      <div className="meta">
        <span className="address1">{company.address1}</span>
        <br />
        <span className="address2">{company.address2}</span>
        <br />
        <span className="city-info">{company.city}, {company.state} {company.zip}</span>
      </div>
      <br />
      <Link to={`/companies/edit/${company.id}`} className="ui button">Edit Company</Link>
      </div>
    </div>
    </div>
  )};

export default CompanyItem;