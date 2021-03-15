import React from 'react';
import { connect } from 'react-redux';
import { fetchCompany, editCompany } from './actionCreator';
import CompanyForm from './CompanyForm';

class CompanyEdit extends React.Component {
  componentDidMount() {
    this.props.fetchCompany(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editCompany(this.props.match.params.id, formValues)
  }
  
  render() {
    if (!this.props.company > 1) {
      return <div>Loading...</div>;
    }
    return (
      <div>
      Edit Company
      <CompanyForm
        initialValues={this.props.company}
        onSubmit={this.onSubmit}
      />
      </div>
    )}
}
const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {company: state.companies.selectedCompany}
}

export default connect(mapStateToProps, { fetchCompany, editCompany })(CompanyEdit);