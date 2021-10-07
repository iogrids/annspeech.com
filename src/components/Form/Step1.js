import { Component } from 'react';
import InputBase from '@material-ui/core/InputBase';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';

const styles = (theme) => ({
  form: {
    background: '#f4f7f8',
    width: '390px',
    margin: '0 auto',
  },
  number: {
    backgroundColor: '#5fcf80',
    color: '#fff',
    height: '30px',
    width: '30px',
    display: 'inline-block',
    fontSize: '.8em',
    marginRight: '4px',
    lineHeight: '30px',
    textAlign: 'center',
    textShadow: '0 1px 0 hsl(0deg 0% 100% / 20%)',
    borderRadius: '100%;',
    marginBottom: theme.spacing(2),
  },
  fieldSets: {
    padding: theme.spacing(2.5),
  },
  heading: {
    textAlign: 'center',
    marginBottom: theme.spacing(1),
    color: '#00b0f0',
    fontWeight: 600,
    margin: '.5rem',
    padding: '1rem',
  },
  label: {
    display: 'block',
    marginBottom: theme.spacing(0.3),
  },
  field: {
    background: 'hsla(0,0%,100%,.1)',
    border: 'none',
    fontSize: '16px',
    height: 'auto',
    outline: '0',
    padding: '15px',
    width: '100%',
    backgroundColor: '#e8eeef',
    color: '#8a97a0',
    boxShadow: 'inset 0 1px 0 rgb(0 0 0 / 3%)',
    margin: '0 0 30px',
  },

  continue: {
    height: theme.spacing(6),
    marginTop: theme.spacing(1),
    color: '#fff',
    backgroundColor: '#4bc970',
  },
});

class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = { country: '', region: '' };
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { country, region } = this.state;
    const { classes } = this.props;
    const { values, handleChange, handleDropdown, handleDropdown2 } =
      this.props;

    return (
      <div className={classes.form}>
        <Box className={classes.formContent}>
          <Typography
            className={classes.heading}
            variant="h4"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Contact Me
          </Typography>
          <Box className={classes.fieldSets}>
            <legend>
              <span className={classes.number}>1</span> Your Basic Info
            </legend>
            <label className={classes.label}>Name:</label>
            <InputBase
              variant="standard"
              className={classes.field}
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              type="text"
              id="name"
              name="name"
            />
            <label className={classes.label}>Email:</label>
            <InputBase
              className={classes.field}
              onChange={handleChange('userEmail')}
              defaultValue={values.userEmail}
              type="text"
              id="userEmail"
              name="userEmail"
            />
            <label className={classes.label}>Phone:</label>
            <InputBase
              className={classes.field}
              onChange={handleChange('phone')}
              defaultValue={values.phone}
              type="text"
              id="phone"
              name="phone"
            />
            <label className={classes.label}>Country:</label>
            <CountryDropdown
              className={classes.field}
              value={values.country}
              onChange={(val) => {
                //this.selectCountry(val);
                handleDropdown('country', val);
              }}
            />
            <label className={classes.label}>Region:</label>
            <RegionDropdown
              className={classes.field}
              country={values.country}
              value={values.region}
              onChange={(val) => {
                //this.selectRegion(val);
                handleDropdown('region', val);
              }}
            />
            <Button
              className={classes.continue}
              color="primary"
              variant="contained"
              fullWidth
              onClick={this.continue}
            >
              Continue
            </Button>
          </Box>
        </Box>
      </div>
    );
  }
}

Step1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Step1);
