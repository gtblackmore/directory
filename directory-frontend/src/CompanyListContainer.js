import React from 'react';
import { connect } from 'react-redux';
import { fetchCompanies } from './actionCreator';
import CompanyList from './CompanyList';

class CompanyListContainer extends React.Component {

  componentDidMount(){
   this.props.fetchCompanies();
  };

  onCompanySelect = (company) => {
    this.setState({selectedCompany: company})

  }

  render() {
    if(!this.props.companies) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <CompanyList onCompanySelect={this.onCompanySelect} companies={this.props.companies}/>
      </div>
      )
    }
}

const mapStateToProps = (state) => {
  return { companies: state.companies.companies }
};

export default connect(mapStateToProps, { fetchCompanies })(CompanyListContainer);