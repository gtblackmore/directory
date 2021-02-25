import React from 'react';
import { Field, reduxForm } from 'redux-form';

class CompanyForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field 
          name="name"
          component={this.renderInput}
          label="Company Name"
        />
        <Field
          name="address1"
          component={this.renderInput}
          label="Address"
        />
        <Field
          name="address2"
          component={this.renderInput}
          label="Suite/Apt/Unit Number"
        />
        <Field
          name="city"
          component={this.renderInput}
          label="City"
        />
        <Field
          name="state"
          component={this.renderInput}
          label="State"
        />
        <Field
          name="zip"
          component={this.renderInput}
          label="Zip Code"
        />
        <Field
          name="phone"
          component={this.renderInput}
          label="Phone Number"
        />
        <Field
          name="email"
          component={this.renderInput}
          label="E-Mail"
        />
        <button className="ui button">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.name) {
    errors.name = 'You must enter a name!';
  }

  if (!formValues.address1) {
    errors.address1 = 'You must enter an address!';
  }

  if (!formValues.city) {
    errors.city = 'You must enter a city!';
  }

  if (!formValues.state) {
    errors.state = 'You must enter a state';
  }

  if (!formValues.zip) {
    errors.zip = 'You must enter a zip code!';
  }

  if (!formValues.phone) {
    errors.phone = 'You must enter a phone number!';
  }

  if (!formValues.email) {
    errors.email = 'You must enter an email address!';
  }

  return errors;
};

export default reduxForm({
  form: 'CompanyForm',
  validate
})(CompanyForm);
