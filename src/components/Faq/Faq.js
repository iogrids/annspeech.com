import { makeStyles, withStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@mui/material/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: '0 auto',
    display: 'block',
  },
  title: {
    textAlign: 'center',
    marginTop: theme.spacing(3),
    color: '#00b0f0',
    fontWeight: 600,
  },
  heading: {},
  content: {
    textAlign: 'center',
  },
  expandedPanel: {
    backgroundColor: '#ebebeb',
  },
}));

const AccordionSummary = withStyles({
  content: {
    flexGrow: 0,
  },
})(MuiAccordionSummary);

export default function Faq() {
  const classes = useStyles();

  return (
    <Box spacing={3} className={classes.root}>
      <Typography
        className={classes.title}
        variant="h4"
        gutterBottom
        component="div"
      >
        Frequently Asked Questions
      </Typography>

      <Accordion
        elevation={0}
        classes={{ expanded: classes.expandedPanel }}
        defaultExpanded
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading} variant="body1">
            How is evaluation done? Is it through video calls?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.content} variant="body1">
            I will get in touch with you initially over emails. This will help
            me in preparing for the evaluation session. Following this, a video
            session for assessment will be scheduled mostly on Zoom.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0} classes={{ expanded: classes.expandedPanel }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading} variant="body1">
            What is the duration of each session?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.content} variant="body1">
            An assessment session will be for one hour and each therapy session
            will be for 45 minutes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0} classes={{ expanded: classes.expandedPanel }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading} variant="body1">
            Does online speech therapy work for children?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.content} variant="body1">
            Researches show that online speech therapy (aka telepractice) can
            provide the same results as offline sessions. Telepractice is an
            effective, evidenced based program that works well for both kids and
            adults. Online sessions are highly interactive and children usually
            look forward to attending these sessions. <br />
            <br />
            Parents also play a major role by actively involving in the sessions
            and learning to generalise activities at home. In some cases where
            children are too young to sit or if the presenting conditions are
            severe, sessions would focus on training the parents to effectively
            carry out the activities at home.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0} classes={{ expanded: classes.expandedPanel }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className={classes.heading} variant="body1">
            How well online therapy works for adults?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.content} variant="body1">
            Online speech therapy works well for adults with
            stuttering/stammering, pronunciation difficulties, voice issues,
            communication difficulties due to stroke, parkinsons disease,
            dementia etc. <br />
            <br />
            Great success has been seen for adolescents and adults who choose
            online speech therapy services. Additionally, online speech therapy
            saves time and cost of travel. You can also attend sessions from the
            convenience of your home.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
