import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { Component } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import axios from 'axios';

export default class Form extends Component {
  state = {
    step: 1,
    firstName: '',
    userEmail: '',
    phone: '',
    country: '',
    region: '',
    gender: '',
    condition: '',
    WillingForOnlineTherapy: '',
    description: '',
    selectedOption: {},
    selectedOption2: {},
    languageSelected: {},
    submitted: 'false',
    submitting: 'false',
    info: { error: 'false', msg: 'null' },
    email: '',
    message: '',
  };
  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleDropdown = (input, value) => {
    this.setState({ [input]: value });
  };

  handleDropdown2 = (selectedOption) => {
    this.setState({ selectedOption });
  };

  handleDropdown3 = (selectedOption) => {
    this.setState({ selectedOption2: selectedOption });
  };

  handleDropdown4 = (selectedOption) => {
    this.setState({ languageSelected: selectedOption });
  };

  handleRadio = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleServerResponse = (ok, msg) => {
    if (ok) {
      const { submitted, submitting, info, email, message } = this.state;
      this.setState({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
        email: '',
        message: '',
      });
    } else {
      this.setState({ info: { error: true, msg: msg } });
    }
  };

  handleEmail = async () => {
    const { firstName, userEmail, selectedOption, selectedOption2 } =
      this.state;
    const values = { firstName, userEmail, selectedOption, selectedOption2 };
    const subject = 'Greeting from annspeech.com';
    const message = 'How are you preena';
    const res = await fetch('/api/sendmail', {
      body: JSON.stringify({
        email: values.userEmail,
        fullname: values.firstName,
        subject: subject,
        message: message,
        patientType: values.selectedOption.value,
        conditionType: values.selectedOption2.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
    console.log(firstName, userEmail, subject, message);
  };

  handleSubmit = (e) => {
    const {
      step,
      firstName,
      userEmail,
      phone,
      country,
      region,
      gender,
      condition,
      WillingForOnlineTherapy,
      description,
      selectedOption,
      selectedOption2,
      languageSelected,
    } = this.state;
    const values = {
      firstName,
      userEmail,
      phone,
      country,
      region,
      gender,
      condition,
      WillingForOnlineTherapy,
      description,
      selectedOption,
      selectedOption2,
      languageSelected,
    };
    e.preventDefault();

    axios({
      method: 'POST',
      url: 'https://formspree.io/f/moqybkbv',
      data: values,
    })
      .then((response) => {
        this.handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        );
      })
      .then((response) => {
        this.handleEmail();
        window.location = 'https://annspeech.com/thanks';
      })
      .catch((error) => {
        this.handleServerResponse(false, error.response.data.error);
      });
  };

  render() {
    const {
      step,
      firstName,
      userEmail,
      phone,
      country,
      region,
      gender,
      condition,
      WillingForOnlineTherapy,
      description,
      selectedOption,
      selectedOption2,
      languageSelected,
      submitted,
      submitting,
      info,
      email,
      message,
    } = this.state;
    const values = {
      firstName,
      userEmail,
      phone,
      country,
      region,
      gender,
      condition,
      WillingForOnlineTherapy,
      description,
      selectedOption,
      selectedOption2,
      languageSelected,
      submitted,
      submitting,
      info,
      email,
      message,
    };

    switch (step) {
      case 1:
        return (
          <Grid item xs={12} md={4} id="contact">
            <Step1
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              handleDropdown={this.handleDropdown}
              values={values}
            />
          </Grid>
        );
      case 2:
        return (
          <Grid item xs={12} md={4}>
            <Step2
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              handleDropdown={this.handleDropdown}
              handleDropdown2={this.handleDropdown2}
              handleDropdown3={this.handleDropdown3}
              handleDropdown4={this.handleDropdown4}
              handleRadio={this.handleRadio}
              handleSubmit={this.handleSubmit}
              values={values}
            />
          </Grid>
        );
      default:
        console.log('This is a multi-step form built with React.');
    }
  }
}
