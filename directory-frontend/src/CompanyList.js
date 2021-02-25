import React from 'react';
import CompanyItem from './CompanyItem'

const CompanyList = ({companies, onCompanySelect}) => {
   const renderedCompanies = companies.map((company) => {
      return <CompanyItem onCompanySelect={onCompanySelect} company={company} key={company.id}/>;
   })
   return <div className="ui relaxed divided list">{renderedCompanies}</div>
};

export default CompanyList;