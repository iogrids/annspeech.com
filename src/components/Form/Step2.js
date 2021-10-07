import { Component } from 'react';
import InputBase from '@material-ui/core/InputBase';
import Select from 'react-select';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
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
  buttonGroup: {
    gap: '5px',
  },
});

class Step2 extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { classes } = this.props;
    const {
      values,
      handleChange,
      handleDropdown,
      handleDropdown2,
      handleDropdown3,
      handleSubmit,
    } = this.props;
    const Genres = [
      { value: 'Child', label: 'Child' },
      { value: 'Adult', label: 'Adult' },
    ];

    const Books = [
      { value: 'Autism', label: 'Autism', link: 'Child' },
      { value: 'Speech Delay', label: 'Speech Delay', link: 'Child' },
      { value: 'Unclear Speech', label: 'Unclear Speech', link: 'Child' },
      { value: 'Stuttering', label: 'Stuttering', link: 'Child' },
      {
        value: 'Cleft Lip & Palate',
        label: 'Cleft Lip & Palate',
        link: 'Child',
      },
      { value: 'Slow Learner', label: 'Slow Learner', link: 'Child' },
      {
        value: 'Reading & Writing Issues',
        label: 'Reading & Writing Issues',
        link: 'Child',
      },
      {
        value: 'Oro-Motor/Feeding Issues',
        label: 'Oro-Motor/Feeding Issues',
        link: 'Child',
      },
      {
        value: 'Stroke',
        label: 'Stroke',
        link: 'Adult',
      },
      {
        value: 'Voice Disorder',
        label: 'Voice Disorder',
        link: 'Adult',
      },
      {
        value: 'Stuttering',
        label: 'Stuttering',
        link: 'Adult',
      },
      {
        value: 'Pronunciation Issues',
        label: 'Pronunciation Issues',
        link: 'Adult',
      },
      {
        value: 'Swallowing Issues',
        label: 'Swallowing Issues',
        link: 'Adult',
      },
    ];

    const filteredOptions = Books.filter(
      (o) => o.link === values.selectedOption.value
    );

    const customStyles = {
      control: (base, state) => ({
        ...base,
        background: 'hsla(0,0%,100%,.1)',
        border: 'none',
      }),
    };

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
              <span className={classes.number}>2</span> Your Basic Info
            </legend>
            <label className={classes.label}>Gender:</label>
            <Select
              className={classes.field}
              styles={customStyles}
              value={values.selectedOption}
              //value={values.gender}
              onChange={handleDropdown2}
              /*onChange={(val) => {
                handleDropdown('gender', val);
              }}*/
              options={Genres}
              variant="filled"
            ></Select>
            <label className={classes.label}>Choose condition:</label>
            <Select
              className={classes.field}
              styles={customStyles}
              value={values.selectedOption2}
              onChange={handleDropdown3}
              /*onChange={(val) => {
                handleDropdown('condition', val);
              }}*/
              options={filteredOptions}
            ></Select>
            <label className={classes.label}>Detailed Description:</label>
            <InputBase
              className={classes.field}
              onChange={handleChange('description')}
              defaultValue={values.description}
              fullWidth
              id="filled-basic"
              multiline
              variant="standard"
            />
            <ButtonGroup
              fullWidth
              variant="contained"
              aria-label="outlined primary button group"
              className={classes.buttonGroup}
            >
              <Button
                className={classes.continue}
                color="success"
                variant="contained"
                onClick={this.back}
              >
                Back
              </Button>
              <Button
                className={classes.continue}
                color="success"
                variant="contained"
                onClick={(e) => {
                  {
                    handleSubmit(e);
                  }
                }}
              >
                Submit
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      </div>
    );
  }
}

export default withStyles(styles)(Step2);
