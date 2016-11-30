import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import { sendMessageAction } from '../../actions/chat';

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }
  if (!values.message) {
    errors.message = 'Required';
  }
  return errors;
}



const warn = values => {
  const warnings = {}
  if (values.username < 19) {
    warnings.username = 'Username Must be 15 characters or less';
  }
  return warnings;
}

// FormGroup <FormControl {...input} type={type} placeholder={label} />
// <input {...input} type={type} placeholder={label} />
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <FormGroup>
    <FormControl {...input} type={type} placeholder={label} />
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </FormGroup>
)

function submitNewMessage(values, dispatch) {
  dispatch(sendMessageAction(values.username, values.message));
}


class NewMessageForm extends Component {

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit(submitNewMessage)} className="form-inline" >
        <Field name="username" type="text" component={renderField} label="Username" />
        <Field name="message" type="text" component={renderField} label="Message" />
        <FormGroup>
          <button type="submit" disabled={submitting}>Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        </FormGroup>
      </form>
    )
  }
}


export default reduxForm({
  form: 'newMessageValidation',  // a unique identifier for this form
  validate,                // <--- validation function given to redux-form
  warn                     // <--- warning function given to redux-form
})(NewMessageForm)

