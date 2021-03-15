import React from 'react';
import { connect } from 'react-redux';
import { createCompany } from './actionCreator';
import CompanyForm from './CompanyForm';

class CompanyCreate  extends React.Component {
  
  onSubmit = (formValues) => {
    this.props.createCompany(formValues);
  }

  render() {
    return (
      <div>
        Create a Company
        <CompanyForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, {createCompany})(CompanyCreate);